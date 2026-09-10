import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import {Footer, Header} from "./components";
import Error from './pages/Error';
import Projects from './pages/Projects';

export default function App() {
  function PageOutlet() {
    return (
      <>
        <Header />
        <div className="pt-16 sm:pt-[72px]">
          <Outlet />
        </div>
        <Footer />
      </>
    )
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
    errorElement: (
      <>
        <Header />
        <div className="pt-16 sm:pt-[72px]">
          <Error />
        </div>
        <Footer />
      </>
    ),
  },
]);

return (
  <div>
    <RouterProvider router={Routes}></RouterProvider>
  </div>
)
}
