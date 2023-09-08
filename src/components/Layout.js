import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';

class Layout extends React.Component {
  render() {
    return  <>
    <nav>
      <ul className = "list-unstyled">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/RecipePage"></Link>
        </li>
        <li>
          <Link to="/ContributorPage"></Link>
        </li>
        <li>
          <Link to="/Registration_page"></Link>
        </li>
        <li>
          <Link to="/Reg_thankspage"></Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  }
}

export default Layout;
