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
import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import logo from "assets/img/en_full_logo.png";

import Cookies from "js-cookie";
import { useActiveColor } from "context/activeColor";

var ps;

const Admin = (props) => {
  const { activeColor, setActiveColor, ActiveThemeColor } = useActiveColor();
  const [sidebarMini, setSidebarMini] = React.useState(true);
  const [opacity, setOpacity] = React.useState(0);
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const mainPanelRef = React.useRef(null);
  const notificationAlertRef = React.useRef(null);
  const location = useLocation();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  React.useEffect(() => {
    const cookieValue = Cookies.get("fixedPlugin");
    if (cookieValue) {
      const decoded = JSON.parse(atob(cookieValue));
      setActiveColor(decoded);
    } else {
      setActiveColor("blue");
    }
  }, [activeColor]);
  React.useEffect(() => {
    let innerMainPanelRef = mainPanelRef;
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current);
      mainPanelRef.current &&
        mainPanelRef.current.addEventListener("ps-scroll-y", showNavbarButton);
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener("scroll", showNavbarButton);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
        innerMainPanelRef.current &&
          innerMainPanelRef.current.removeEventListener(
            "ps-scroll-y",
            showNavbarButton
          );
      }
      window.removeEventListener("scroll", showNavbarButton);
    };
  }, []);
  const showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop > 50)
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop <= 50)
    ) {
      setOpacity(0);
    }
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const handleActiveClick = (color) => {
    const encodedData = btoa(JSON.stringify(color)); // ✅ Encode the string
    Cookies.set("fixedPlugin", encodedData); // No need to wrap in JSON.stringify again
    setActiveColor(color);
  };

  const handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    const isMini = document.body.classList.contains("sidebar-mini");
    if (isMini) {
      setSidebarMini(false);
      notifyMessage += "deactivated...";
    } else {
      setSidebarMini(true);
      notifyMessage += "activated...";
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: ActiveThemeColor,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 2,
    };
    notificationAlertRef.current.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
    // const encodedData = btoa(JSON.stringify(isMini));
    // Cookies.set("isMiniSideBar", encodedData);
  };
  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };
  const closeSidebar = () => {
    setSidebarOpened(false);
    document.documentElement.classList.remove("nav-open");
  };
  React.useEffect(() => {
    document.body.classList.add("white-content"); // Remove dark mode class on load  
    document.body.classList.remove("sidebar-mini"); // ✅ Ensure sidebar is open
  }, []);
  return (
    <div className="wrapper">
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <div className="navbar-minimize-fixed" style={{ opacity: opacity }}>
        <button
          className="minimize-sidebar btn btn-link btn-just-icon"
          onClick={handleMiniClick}
        >
          <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
          <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
        </button>
      </div>
      <Sidebar
        {...props}
        routes={routes}
        activeColor={activeColor}
        logo={{
          text: "Nexora",
          imgSrc: logo,
        }}
        closeSidebar={closeSidebar}
      />
      <div className="main-panel" ref={mainPanelRef} data={activeColor}>
        <AdminNavbar
          {...props}
          handleMiniClick={handleMiniClick}
          brandText={getActiveRoute(routes)}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
        <Routes>
          {getRoutes(routes)}
          <Route
            // path="/"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
        {/* {
          // we don't want the Footer to be rendered on full screen maps page
          props?.location?.pathname?.indexOf("full-screen-map") !==
            -1 ? null : (
            <Footer fluid />
          )
        } */}
      </div>
      <FixedPlugin
        activeColor={activeColor}
        sidebarMini={sidebarMini}
        handleActiveClick={handleActiveClick}
        handleMiniClick={handleMiniClick}
      />
    </div>
  );
};

export default Admin;
