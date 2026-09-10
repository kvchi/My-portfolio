import { useLayoutEffect, useRef } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import {Footer, Header} from "./components";
import Error from './pages/Error';
import Projects from './pages/Projects';
import { revealSection } from './components/Reveal';

const pageTitles = {
  '/': 'Jonathan Mkpuma | Frontend Developer',
  '/about': 'About | Jonathan Mkpuma',
  '/contact': 'Contact | Jonathan Mkpuma',
  '/services': 'Capabilities | Jonathan Mkpuma',
  '/projects': 'Projects | Jonathan Mkpuma',
};

function SkipLink() {
  const moveToMain = (event) => {
    const main = document.getElementById('main-content');
    if (!main) return;

    event.preventDefault();
    revealSection(main);
    main.scrollIntoView({ block: 'start' });
    main.querySelector('[data-page-heading], [data-section-heading]')?.focus({ preventScroll: true });
  };

  return <a href="#main-content" onClick={moveToMain} className="skip-link">Skip to main content</a>;
}

function RouteAccessibility() {
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef(null);

  useLayoutEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found | Jonathan Mkpuma';

    const firstRender = previousPathname.current === null;
    const pathnameChanged = !firstRender && previousPathname.current !== pathname;
    previousPathname.current = pathname;

    if (
      key === 'default' ||
      (!firstRender && !pathnameChanged) ||
      (pathname === '/' && hash && hash !== '#home')
    ) return undefined;

    const animationFrame = window.requestAnimationFrame(() => {
      document.querySelector('#main-content [data-page-heading]')?.focus({ preventScroll: false });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname, hash, key]);

  return null;
}

function PageOutlet() {
  return (
    <>
      <SkipLink />
      <Header />
      <RouteAccessibility />
      <div className="pt-16 sm:pt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function ErrorLayout() {
  return (
    <>
      <SkipLink />
      <Header />
      <RouteAccessibility />
      <div className="pt-16 sm:pt-[72px]">
        <Error />
      </div>
      <Footer />
    </>
  );
}

const Routes = createBrowserRouter([

  {
    path: "/",
    element: <PageOutlet />,
    children: [

      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
    ],
    errorElement: <ErrorLayout />,
  },
]);

export default function App() {
  return <RouterProvider router={Routes} />;
}
