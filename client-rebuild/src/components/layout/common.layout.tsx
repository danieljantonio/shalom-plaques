import { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "flowbite-react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar fluid={true}>
        <Navbar.Brand href="/">
          <img
            src="icons/favicon.png"
            className="mr-3 h-6 sm:h-9"
            alt="Shalom Plaques Logo"
          />

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
      <Footer container={true} className="border-t-2">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="/"
                src="icons/favicon.png"
                alt="Shalom Plaques Logo"
                name="Shalom Plaques"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/about">Shalom Plaques</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://www.instagram.com/maranathahandicraft/">
                    Instagram
                  </Footer.Link>
                  <Footer.Link href="https://www.tokopedia.com/maranathahc">
                    Tokopedia
                  </Footer.Link>
                  <Footer.Link href="https://shopee.co.id/maranatha.handicraft">
                    Shopee
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact Us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/contact">Mail</Footer.Link>
                  <Footer.Link href="https://api.whatsapp.com/send/?phone=62089675659317">
                    Whatsapp
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Shalom Plaques. All Rights Reserved."
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Layout;
