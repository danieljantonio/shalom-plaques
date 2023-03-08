import { FC, PropsWithChildren } from "react";

import { Navbar } from "flowbite-react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar fluid={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Shalom Plaques
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/products">Products</Navbar.Link>
          <Navbar.Link href="/about">About Us</Navbar.Link>
          <Navbar.Link href="/contact">Contact Us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
