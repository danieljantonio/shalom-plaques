import { Route } from "react-router-dom";
import AboutUsPage from "./Components/pages/AboutUs/aboutus.page";
import ContactUsPage from "./Components/pages/ContactUs/contactus.page";
import HomePage from "./Components/pages/Home/home.page";
import ProductsPage from "./Components/pages/Products/products.page";

const publicRoutes = [
  { component: HomePage, path: "/", exact: true },
  { component: ProductsPage, path: "/products", exact: true },
  { component: AboutUsPage, path: "/about", exact: true },
  { component: ContactUsPage, path: "/contact", exact: true },
];

const renderComponent = (Component) => {
  return <Component />;
};

export const renderRoutes = () => {
  return publicRoutes.map(({ path, component, exact }, index) => {
    return (
      <Route
        path={path}
        key={index}
        exact={exact}
        component={() => renderComponent(component)}
      />
    );
  });
};
