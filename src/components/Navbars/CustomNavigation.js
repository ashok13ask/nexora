import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavigationBar = ({ activeTab, onTabChange, navItems }) => {
  const [currentActiveTab, setCurrentActiveTab] = useState(activeTab);

  const handleTabClick = (tabId) => {
    setCurrentActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div id="navigation-bar-container" className="mt-4 p-2">
      <Nav id="custom-nav-tabs">
        {navItems.map((item) => (
          <NavItem key={item.id}>
            <NavLink
              id={`custom-nav-link ${
                currentActiveTab === item.id ? "active fw-bold" : ""
              }`}
              onClick={() => handleTabClick(item.id)}
              style={{
                cursor: "pointer",
                fontWeight: currentActiveTab === item.id ? 800 : 400,
              }}
            >
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default NavigationBar;
