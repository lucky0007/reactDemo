import React, { Component } from "react";
import { useLocation, Link, Route, useHistory, NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";
import fire from '../../auth/FireBaseAuth';


function Sidebar({ sidebarOpen, closeSidebar, routes }) {

  let history = useHistory();

  const Logout = () => {

    fire.auth().signOut()

    alert("Successfully logout");
    history.push("/");

  }

  return (

    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>React Learning</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        {routes.map((prop, key) => {
          if (!prop.redirect)
            return (
              <>
                <div className="sidebar__link" key={key}>
                  <Link
                    to={prop.layout + prop.path}
                    className="sidebar__link"
                    activeClassName="active">
                    <i className={prop.icon} />
                    {prop.name}
                  </Link>
                </div>

              </>

            );
          return null;
        })}
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#" onClick={Logout}>Log out</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
