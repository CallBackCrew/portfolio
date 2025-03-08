import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneBoxed from "./components/HomeOneBoxed/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoBoxed from "./components/HomeTwoBoxed/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeThreeBoxed from "./components/HomeThreeBoxed/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFourBoxed from "./components/HomeFourBoxed/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeFiveBoxed from "./components/HomeFiveBoxed/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Services from "./components/ServicesPages/index.jsx";
import Projects from "./components/ProjectsPages/index.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import ProjectsDetails from "./components/ProjectsPages/ProjectsDetails.jsx";
import ServicesDetails from "./components/ServicesPages/ServicesDetails.jsx";
import Pricing from "./components/PricingPages/Pricing.jsx";
import PricingSwitcher from "./components/PricingPages/PricingSwitcher.jsx";
import Team from "./components/TeamPages/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Error from "./components/ErrorPages/Error.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
     
      {
        path: "/home-one-boxed",
        element: <HomeOneBoxed />
      },
     
      {
        path: "/home-two",
        element: <HomeTwo />
      },
      {
        path: "/home-two-boxed",
        element: <HomeTwoBoxed />
      },
      {
        path: "/home-three",
        element: <HomeThree />
      },
      {
        path: "/home-three-boxed",
        element: <HomeThreeBoxed />
      },
      {
        path: "/home-four",
        element: <HomeFour />
      },
      {
        path: "/home-four-boxed",
        element: <HomeFourBoxed />
      },
      {
        path: "/home-five",
        element: <HomeFive />
      },
      {
        path: "/home-five-boxed",
        element: <HomeFiveBoxed />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/products-details",
        element: <ProductsDetails />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/contact-pages",
        element: <Contact Pages />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/team-details",
        element: <TeamDetails />
      },
      {
        path: "/testimonial",
        element: <Testimonial />
      },
      {
        path: "/projects-details",
        element: <ProjectsDetails />
      },
      {
        path: "/Faq",
        element: <Faq />
      },
      {
        path: "/service-details",
        element: <ServicesDetails />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/pricing-switcher",
        element: <PricingSwitcher />
      },
     
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
