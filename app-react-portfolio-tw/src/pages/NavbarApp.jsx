import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, DarkThemeToggle } from "flowbite-react";

function NavbarApp() {
  const location = useLocation();

  return (
    <Navbar fluid className="dark:bg-slate-800 px-6" style={{ backgroundColor: '#0f172a' }}>
      <Navbar.Brand>
        <Link to="/">
          <img
            src="images/Logo_base.png"
            className="mr-3 h-6 sm:h-9"
            alt="Sample website logo"
          />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Button className="bg-white text-black" style={{background: 'white'}}>
          <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}>
            Contact
          </Link>
        </Button>
        <Navbar.Toggle />
      </div>


      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" style={{ color: "#fff" }}>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/portfolio" style={{ color: "#fff" }}>
            Portfolio
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
