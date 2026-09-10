import { useEffect, useRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import { whatIDoData } from "../data/whatIDoData";
import Reveal from "./Reveal";

function renderCardVisual(visual) {
  if (visual.type === "image") {
    return (
      <figure className="what-i-do-visual what-i-do-image-frame">
        <img
          src={visual.src}
          width={visual.width}
          height={visual.height}
          alt={visual.alt}
          loading="lazy"
          decoding="async"
          className="what-i-do-image"
        />
        <figcaption>{visual.caption}</figcaption>
      </figure>
    );
  }

  if (visual.type === "flow") {
    return (
      <div className="what-i-do-visual what-i-do-flow" aria-hidden="true">
        {visual.items.map((item, index) => (
          <div className="what-i-do-flow-step" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="what-i-do-visual what-i-do-checklist" aria-hidden="true">
      <div className="what-i-do-browser-bar">
        <span />
        <span />
        <span />
      </div>
      {visual.items.map((item) => (
        <div className="what-i-do-check" key={item}>
          <span className="what-i-do-check-icon"><IoCheckmark /></span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

export default function WhatIDo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    let animationFrame = null;
    let listening = false;

    const resetCards = () => {
      cards.forEach((card) => {
        card.style.removeProperty("--stack-progress");
        card.style.removeProperty("--stack-scale");
        card.style.removeProperty("--stack-opacity");
        card.style.removeProperty("--card-sticky-top");
      });
    };

    const updateCards = () => {
      animationFrame = null;
      const compactMotion = window.innerWidth < 1024;
      const approachDistance = Math.min(
        window.innerHeight * (compactMotion ? 0.3 : 0.55),
        compactMotion ? 240 : 520,
      );
      const scaleDepth = compactMotion ? 0.02 : 0.045;
      const opacityDepth = compactMotion ? 0.04 : 0.08;
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const topGap = window.innerWidth < 640 ? 12 : 24;
      const preferredTop = headerHeight + topGap;

      cards.forEach((card, index) => {
        const cardHeight = card.offsetHeight;
        const fullyReadableTop = window.innerHeight - cardHeight - topGap;
        const stickyTop = Math.min(preferredTop, fullyReadableTop);
        card.style.setProperty("--card-sticky-top", `${stickyTop}px`);

        const nextCard = cards[index + 1];
        if (!nextCard) return;

        const nextTop = nextCard.getBoundingClientRect().top;
        const progress = Math.min(
          1,
          Math.max(0, (preferredTop + approachDistance - nextTop) / approachDistance),
        );

        card.style.setProperty("--stack-progress", progress.toFixed(3));
        card.style.setProperty("--stack-scale", (1 - progress * scaleDepth).toFixed(3));
        card.style.setProperty("--stack-opacity", (1 - progress * opacityDepth).toFixed(3));
      });
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateCards);
      }
    };

    const startListening = () => {
      if (motionQuery.matches && !listening) {
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        listening = true;
        requestUpdate();
      } else if (!motionQuery.matches && listening) {
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
        listening = false;
        resetCards();
      }
    };

    motionQuery.addEventListener("change", startListening);
    startListening();

    return () => {
      motionQuery.removeEventListener("change", startListening);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      resetCards();
    };
  }, []);

  return (
    <section id="what-i-do" className="what-i-do-section" aria-labelledby="what-i-do-heading">
      <Reveal className="what-i-do-heading-wrap">
        <p className="what-i-do-eyebrow">What I do</p>
        <h2 id="what-i-do-heading" data-section-heading tabIndex="-1" className="section-heading-focus">I turn product ideas into dependable web experiences.</h2>
        <p>
          My work spans the interface, the supporting application flow, and the quality checks that help a project ship with confidence.
        </p>
      </Reveal>

      <div className="what-i-do-stack">
        {whatIDoData.map((card, index) => (
          <article
            key={card.id}
            ref={(element) => { cardsRef.current[index] = element; }}
            className={`what-i-do-card ${card.theme}`}
            style={{ "--stack-index": index + 1 }}
          >
            <div className="what-i-do-copy">
              <div className="what-i-do-label-row">
                <span>{card.label}</span>
                <span aria-hidden="true">{card.number}</span>
              </div>
              <h3>{card.heading}</h3>
              <p>{card.description}</p>
              <ul aria-label={`${card.label} highlights`}>
                {card.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            {renderCardVisual(card.visual)}
          </article>
        ))}
      </div>
    </section>
  );
}
