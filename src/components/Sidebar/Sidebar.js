/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, Collapse } from "reactstrap";
import clientLogo from "../../assets/img/en_full_logo.png";

var ps;

const Sidebar = (props) => {
  const [state, setState] = React.useState({});

  const sidebarRef = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    setState(getCollapseStates(props.routes));
  }, []);
  React.useEffect(() => {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      // we need to destroy the false scrollbar when we navigate
      // to a page that doesn't have this component rendered
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  // this creates the intial state of this component based on the collapse routes
  // that it gets through props.routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { rtlActive } = props;

    return routes.map((prop, key) => {
      if (prop.redirect || prop.invisible) return null;

      if (prop.collapse) {
        const isOpen = state[prop.state];
        const newState = {};
        newState[prop.state] = !isOpen;

        return (
          <li
            className={getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={isOpen}
              onClick={(e) => {
                e.preventDefault();
                setState({ ...state, ...newState });
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p style={{ fontSize: "13px", fontWeight: 400 }}>
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">
                    {rtlActive ? prop.rtlMini : prop.mini}
                  </span>
                  <span
                    className="sidebar-normal"
                    style={{ fontSize: "13px", fontWeight: 400 }}
                  >
                    {rtlActive ? prop.rtlName : prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>

            <Collapse isOpen={isOpen}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }

      return (
        <li className={activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} onClick={props.closeSidebar}>
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p style={{ fontSize: "13px", fontWeight: 400 }}>
                  {rtlActive ? prop.rtlName : prop.name}
                </p>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
                <span
                  className="sidebar-normal"
                  style={{ fontSize: "13px", fontWeight: 400 }}
                >
                  {rtlActive ? prop.rtlName : prop.name}
                </span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    // if (!routes || !routes.length) return "Default";
    // console.log('rout',window.location.href.indexOf(routeName) > -1 ? "active" : "")
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };

  const { activeColor, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.closeSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.closeSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <NavLink
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.closeSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </NavLink>
      );
      logoText = (
        <NavLink
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.closeSidebar}
        >
          {logo.text}
        </NavLink>
      );
    }
  }
  console.log(logoImg);
  return (
    <div
      className="sidebar"
      data={activeColor}
      style={{ textTransform: "capitalize" }}
    >
      {/* <div className="sidebar-wrapper" ref={sidebarRef}>
        {/* {logoImg !== null || logoText !== null ? (
          <div className="logo">
            {logoImg}
            {/* {logoText} 
          </div>
        ) : null} 
        <img src={clientLogo} alt="Nexora" style={{width:'150px'}}/>
        <Nav>{createLinks(props.routes)}</Nav>
      </div> */}
      <div className="sidebar-wrapper" ref={sidebarRef}>
        <div
          style={{ textAlign: "center", padding: "10px 0", marginTop: "20px" }}
        >
          <img src={clientLogo} alt="Nexora" style={{ width: "150px" }} />
        </div>
        <hr
          style={{ height: "0.3px", backgroundColor: "#ccc", border: "none" }}
        />

        <Nav>{createLinks(props.routes)}</Nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  activeColor: PropTypes.oneOf(["primary", "blue", "green", "orange", "red"]),
  rtlActive: PropTypes.bool,
  routes: PropTypes.array.isRequired,
  logo: PropTypes.oneOfType([
    PropTypes.shape({
      innerLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      outterLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ]),
  // this is used on responsive to close the sidebar on route navigation
  closeSidebar: PropTypes.func,
};

export default Sidebar;
