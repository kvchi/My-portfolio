/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { forwardRef, useLayoutEffect, useRef } from "react";

const observedElements = new Set();
let observer = null;
let motionQuery = null;
let motionQueryCleanup = null;
let registrationCount = 0;

function revealElement(element) {
  if (!element) return;

  element.dataset.motionState = "revealed";
  observer?.unobserve(element);
  observedElements.delete(element);
}

function revealObservedElements() {
  observedElements.forEach(revealElement);
  observer?.disconnect();
  observer = null;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function ensureMotionPreferenceListener() {
  if (motionQuery) return;

  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handlePreferenceChange = (event) => {
    if (event.matches) revealObservedElements();
  };

  motionQuery.addEventListener("change", handlePreferenceChange);
  motionQueryCleanup = () => motionQuery?.removeEventListener("change", handlePreferenceChange);
}

function ensureObserver() {
  if (observer || prefersReducedMotion() || !("IntersectionObserver" in window)) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) revealElement(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  return observer;
}

function belongsToCurrentHash(element) {
  const rawHashId = window.location.hash.slice(1);
  let hashId = rawHashId;

  try {
    hashId = decodeURIComponent(rawHashId);
  } catch {
    // Keep malformed hashes harmless; routing can continue with the raw value.
  }

  return hashId && element.closest("[id]")?.id === hashId;
}

function registerReveal(element, immediate) {
  registrationCount += 1;

  if (
    immediate ||
    belongsToCurrentHash(element) ||
    prefersReducedMotion() ||
    !("IntersectionObserver" in window)
  ) {
    revealElement(element);
  } else {
    ensureMotionPreferenceListener();
    const sharedObserver = ensureObserver();
    if (sharedObserver) {
      element.dataset.motionState = "pending";
      observedElements.add(element);
      sharedObserver.observe(element);
    } else {
      revealElement(element);
    }
  }

  return () => {
    observer?.unobserve(element);
    observedElements.delete(element);
    registrationCount -= 1;

    if (registrationCount === 0) {
      observer?.disconnect();
      observer = null;
      motionQueryCleanup?.();
      motionQueryCleanup = null;
      motionQuery = null;
    }
  };
}

export function revealSection(section) {
  if (!section) return;

  if (section.matches("[data-motion-state='pending']")) revealElement(section);
  section.querySelectorAll("[data-motion-state='pending']").forEach(revealElement);
}

const Reveal = forwardRef(function Reveal(
  {
    as: Element = "div",
    variant = "fade-up",
    delay = 0,
    duration = 520,
    immediate = false,
    className = "",
    style,
    onFocusCapture,
    children,
    ...props
  },
  forwardedRef,
) {
  const elementRef = useRef(null);
  const immediateOnMount = useRef(immediate);

  useLayoutEffect(() => registerReveal(elementRef.current, immediateOnMount.current), []);

  const setRef = (element) => {
    elementRef.current = element;
    if (typeof forwardedRef === "function") forwardedRef(element);
    else if (forwardedRef) forwardedRef.current = element;
  };

  const handleFocusCapture = (event) => {
    revealElement(elementRef.current);
    onFocusCapture?.(event);
  };

  return (
    <Element
      ref={setRef}
      data-reveal={variant}
      style={{
        "--reveal-delay": `${Math.min(Math.max(delay, 0), 400)}ms`,
        "--reveal-duration": `${Math.min(Math.max(duration, 350), 650)}ms`,
        ...style,
      }}
      className={`motion-reveal ${className}`.trim()}
      onFocusCapture={handleFocusCapture}
      {...props}
    >
      {children}
    </Element>
  );
});

export default Reveal;
