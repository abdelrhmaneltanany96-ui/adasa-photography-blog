import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


/*
 * React Router Concepts
 *
 * BrowserRouter:
 * - Enables client-side routing using the browser's URL.
 * - Provides routing functionality to child components.
 *
 * Routes:
 * - Selects the best matching Route for the current URL.
 *
 * Route:
 * - Defines a URL path and the component to render.
 *
 * Dynamic Route:
 * - Uses parameters like :id to represent dynamic URL values.
 *
 * Wildcard Route (*):
 * - Matches URLs that don't match other defined routes.
 * - Commonly used to display a 404 Not Found page.
 */

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        // dynamic routing
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

 
// | RouterProvider                                                | Routes |
// | بيشغّل Router جاهز |                                       بيجمع الـ Routes ويختار المناسب |
// | بيستخدم `createBrowserRouter`                                | بيستخدم `Route` |
// | بيدعم Data APIs زي `loader` و`action`                        | مش بيشغّل Data APIs الخاصة بالـ Data Router |
// | مناسب للمشاريع اللي محتاجة إمكانيات  متقدمة                | Routing البسيط 




// BrowserRouter + Routes → بتعرّف الصفحات باستخدام JSX.
// createBrowserRouter + RouterProvider → بتعرّف الصفحات في Array of Objects وبتشغّلها عن طريق الـ Provider.




// import {createBrowserRouter,RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//   {path: "/",element: <Home />, },
//   { path: "/about",element: <About />,},
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }








// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }