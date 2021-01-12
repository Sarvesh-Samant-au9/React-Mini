import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary shadow navbar-expand-sm">
      <section className="container">
        <Link to="/" className="navbar-brand">
          CONTACT REDUX
        </Link>
        <section>
          <Link to="/addContact" className="btn btn-light ml-auto">
            CREATE CONTACT
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
