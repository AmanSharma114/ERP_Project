// Menu.js

import React, { Component } from "react";
import { Link , Route } from "react-router-dom";
// import OrdersCalendarView from "../Order/OrdersCalendarView"; // Import OrdersCalendarView component

const menus = [
  {
    name: "Home Page",
    to: "/",
    exact: true
  },
  {
    name: "Product Management",
    to: "/product-list",
    exact: false
  },
  {
    name: "Order Management",
    to: "/order-list",
    exact: false
  },
  {
    name: "Orders Calendar View", // New menu item
    to: "/orders-calendar",
    exact: false
  },
  {
    name: "Portfolio",
    to: "https://amansharmamudgal.netlify.app/", // Your portfolio link
    external: true // Flag to indicate an external link
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact, external }) => {
  if (external) {
    return (
      <li>
        <a href={to} target="_blank" rel="noopener noreferrer">{label}</a>
      </li>
    );
  }
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="nav " style={{ margin: 10 }}>
            {this.showMenus(menus)}
          </ul>
        </nav>
      </div>
    );
  }

  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
            external={menu.external}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
