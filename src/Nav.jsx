import React from "react";

function Nav() {
  return (
    <nav className="container nav py-4">
      <h1 className="me-5">
        Travel <span className="script-font text-warning">Blog</span>
      </h1>
      <a className="link-secondary nav-link mt-2" href="#">
        About
      </a>
      <a className="link-secondary nav-link mt-2" href="#">
        Popular posts
      </a>
    </nav>
  );
}

export default Nav;
