import NavigationBar from "components/Navbars/CustomNavigation";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import CustomeEvents from "./CustomeEvents";

const SchemaEvents = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const navItems = [
    { id: 1, label: "System Event" },
    { id: 2, label: "Custom Event" },
    { id: 3, label: "Conversion Event" },
    { id: 4, label: "Qualifying Event" },
    { id: 5, label: "Alies Event Property" },
  ];

  return (
    <div className="content">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-6 fw-bold text-dark mb-2">Event</h1>
              <p className="text-muted">
                Blueprint your user actions with Event Schemas.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <NavigationBar
        activeTab={activeTab}
        onTabChange={toggleTab}
        navItems={navItems}
      />

      <Card>
        <CustomeEvents/>
      </Card>
    </div>
  );
};

export default SchemaEvents;
