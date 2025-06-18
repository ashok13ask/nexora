// import { useActiveColor } from "context/activeColor";
// import React from "react";
// import { FaPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Input,
//   Row,
//   UncontrolledDropdown,
// } from "reactstrap";

// const Events = () => {
//   const { ActiveThemeColor } = useActiveColor();
//   const navigate = useNavigate();
//   return (
//     <div className="content">
//       <div className="d-flex align-items-center justify-content-between mb-3">
//         <h4>Event</h4>
//         <Button
//           color={ActiveThemeColor}
//           onClick={() => navigate("/admin/analytics/event/create")}
//         >
//           <FaPlus className="me-2" />
//           <span className="d-none d-md-inline">New Event</span>
//         </Button>
//       </div>
//       <div className="d-flex col-12 col-md-6 ">
//         <div className="col-6 ">
//           <Input
//             type="select"
//             className="custom-select"
//             // value={selected}
//             // onChange={(e) => setSelected(e.target.value)}
//           >
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2 (default)</option>
//             <option value="option3">Option 3</option>
//           </Input>
//         </div>
//         <div className="col-6">
//           <Input
//             type="select"
//             className="custom-select"
//             // value={selected}
//             // onChange={(e) => setSelected(e.target.value)}
//           >
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2 (default)</option>
//             <option value="option3">Option 3</option>
//           </Input>
//         </div>
//       </div>
//       <hr style={{ borderTop: "1px solid #ccc", mb: 4 }} />
//       <h4>Charged</h4>
//       <p>In the last 30 days</p>
//       <ul>
//         <li>
//           In the last <b>30</b> day(s)
//         </li>
//       </ul>
//       <div className="d-block d-md-flex my-2">
//         <UncontrolledDropdown className="d-md-none mb-2 mb-md-0">
//           <DropdownToggle caret>Select Type</DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>Quick views</DropdownItem>
//             <DropdownItem>Trend & Properties</DropdownItem>
//             <DropdownItem>Session</DropdownItem>
//             <DropdownItem>Geography</DropdownItem>
//             <DropdownItem>Technographics</DropdownItem>
//             <DropdownItem>People</DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>

//         <ButtonGroup className="d-none d-md-flex" size="sm">
//           <Button outline>Quick view</Button>
//           <Button outline>Trend & Properties</Button>
//           <Button outline>Session</Button>
//           <Button outline>Geography</Button>
//           <Button outline>Technographics</Button>
//           <Button outline>People</Button>
//         </ButtonGroup>
//       </div>
//       {/* Show only on md and up */}
//       <Row
//         className="text-center align-items-center d-none d-md-flex"
//         style={{ border: "1px solid #ccc", padding: "30px" }}
//       >
//         <Col md={2} style={{ borderRight: "1px solid #ccc" }}>
//           <h4>Total Events</h4>
//           <h5>70,700</h5>
//         </Col>
//         <Col md={2} style={{ borderRight: "1px solid #ccc" }}>
//           <h4>Users</h4>
//           <h5>49,098</h5>
//         </Col>
//         <Col md={2}>
//           <h4>Mobile</h4>
//           <h5>24,890</h5>
//           <p>51%</p>
//         </Col>
//         <Col md={2}>
//           <h4>Tablet</h4>
//           <h5>0</h5>
//           <p>0%</p>
//         </Col>
//         <Col md={2}>
//           <h4>Desktop</h4>
//           <h5>21,345</h5>
//           <p>49%</p>
//         </Col>
//         <Col md={2}>
//           <h4>TV</h4>
//           <h5>0</h5>
//           <p>0%</p>
//         </Col>
//       </Row>

//       <Row className="g-3 justify-content-center d-block d-md-none text-center align-items-center">
//         {[
//           { title: "Total Events", value: "70,700" },
//           { title: "Users", value: "49,098" },
//           {
//             title: "Mobile",
//             value: "24,890",
//             percent: "51%",
//             badge: "primary",
//           },
//           { title: "Tablet", value: "0", percent: "0%", badge: "secondary" },
//           { title: "Desktop", value: "21,345", percent: "49%", badge: "info" },
//           { title: "TV", value: "0", percent: "0%", badge: "secondary" },
//         ].map((item, i) => (
//           <Col key={i} xs={12} md={6}>
//             <div className="card h-100 shadow-sm border-0">
//               <div className="card-body">
//                 <h4 className="card-title text-muted">{item.title}</h4>
//                 <h3 className="card-text">{item.value}</h3>
//                 {item.percent && <div>{item.percent}</div>}
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>

//       <Row className="d-flex text-center align-items-center mt-4">
//         <Col sm={12} md={6}>
//           <Card>
//             <CardBody>
//               <h3>5%</h3>
//               <p>Users did 'Charged' between</p>
//               <h5>22:00 to 23:00</h5>
//               <button className={`btn btn-${ActiveThemeColor}`}>
//                 View time of the day details
//               </button>
//               <p>For the seelected time period and event query</p>
//             </CardBody>
//           </Card>
//         </Col>
//         <Col sm={12} md={6}>
//           <Card>
//             <CardBody>
//               <h3>30%</h3>
//               <p>Users did 'Charged'</p>
//               <h5>More the one time</h5>
//               <button className={`btn btn-${ActiveThemeColor}`}>
//                 View frequency details
//               </button>
//               <p>For the seelected time period and event query</p>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <Card>
//         <CardHeader
//           style={{ borderBottom: "1px solid #ccc", padding: "20px 10px" }}
//         >
//           Demographics
//         </CardHeader>
//         <CardBody>
//           <Row className="d-flex text-center align-items-center">
//             <Col style={{ borderRight: "1px solid #ccc" }}>
//               <p>Female</p>
//               <h2>48%</h2>
//             </Col>
//             <Col>
//               <p>Male</p>
//               <h2>52%</h2>
//             </Col>
//           </Row>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Events;
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  FormGroup,
  Input,
  Badge,
} from "reactstrap";

const Events = () => {
  const [activeTab, setActiveTab] = useState("quick-view");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const eventMetrics = [
    {
      title: "Total Events",
      value: "70,700",
      icon: "📊",
      iconClass: "icon-bg-blue",
    },
    {
      title: "Users",
      value: "49,098",
      icon: "👥",
      iconClass: "icon-bg-green",
    },
    {
      title: "Mobile",
      value: "24,890",
      subtitle: "51%",
      icon: "📱",
      iconClass: "icon-bg-purple",
    },
    {
      title: "Tablet",
      value: "0",
      subtitle: "0%",
      icon: "💻",
      iconClass: "icon-bg-orange",
    },
    {
      title: "Desktop",
      value: "21,345",
      subtitle: "49%",
      icon: "🖥️",
      iconClass: "icon-bg-indigo",
    },
    {
      title: "TV",
      value: "0",
      subtitle: "0%",
      icon: "📺",
      iconClass: "icon-bg-gray",
    },
  ];

  const conversionMetrics = [
    {
      title: "Users did 'Charged' between",
      subtitle: "72:00 to 23:00",
      percentage: "5%",
      description: "For the selected time period and event query",
      cardClass: "gradient-blue",
      textClass: "text-blue-custom",
      buttonText: "View time of the day details",
    },
    {
      title: "Users did 'Charged'",
      subtitle: "More than one time",
      percentage: "30%",
      description: "For the selected time period and event query",
      cardClass: "gradient-green",
      textClass: "text-green-custom",
      buttonText: "View frequency details",
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }} className="content">
      <Container fluid className="py-4">
        {/* Header Section */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="display-6 fw-bold text-dark mb-2">Event</h1>
                <p className="text-muted">
                  Analyze user interactions and event patterns
                </p>
              </div>
              <Button color="info" className="d-flex align-items-center">
                <FaPlus/>
                New Event
              </Button>
            </div>
          </Col>
        </Row>

        {/* Filters Section */}
        <Row className="mb-4">
          <Col>
            <Card className="dashboard-card">
              <CardHeader className="border-0 pb-2">
                <Row className="align-items-center">
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Input type="select" className="form-select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Input type="select" className="form-select">
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex gap-2 justify-content-end">
                      <Button outline size="sm">📅 Date Range</Button>
                      <Button outline size="sm">🔽 Filters</Button>
                      <Button outline size="sm">📥 Export</Button>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-medium text-dark">Charged</span>
                    <Badge color="secondary" pill>Active</Badge>
                  </div>
                  <div className="text-muted small">
                    <div>in the last <strong>30 days</strong></div>
                    <div>in the last <strong>30 day(s)</strong></div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Analytics Tabs */}
        <Row className="mb-4">
          <Col>
            <Nav className="mb-3">
              {[
                { id: "quick-view", label: "Quick view" },
                { id: "trend-properties", label: "Trend & Properties" },
                { id: "session", label: "Session" },
                { id: "geography", label: "Geography" },
                { id: "technographics", label: "Technographics" },
              ].map(({ id, label }) => (
                <NavItem key={id}>
                  <NavLink
                    className={activeTab === id ? "active" : ""}
                    onClick={() => toggleTab(id)}
                    style={{ cursor: "pointer" }}
                  >
                    {label}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="quick-view">
                <Row className="mb-4">
                  {eventMetrics.map((metric, index) => (
                    <Col key={index} lg={2} md={4} sm={6} className="mb-3">
                      <Card className="metric-card h-100">
                        <CardBody className="p-3">
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <div
                              className={`metric-icon rounded p-2 ${metric.iconClass}`}
                              style={{ fontSize: "1.25rem" }}
                            >
                              {metric.icon}
                            </div>
                            {metric.subtitle && (
                              <Badge color="light" className="text-dark">
                                {metric.subtitle}
                              </Badge>
                            )}
                          </div>
                          <div>
                            <div className="text-muted small text-uppercase fw-medium mb-1">
                              {metric.title}
                            </div>
                            <div className="h4 fw-bold text-dark mb-0">
                              {metric.value}
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <Row>
                  {conversionMetrics.map((metric, index) => (
                    <Col key={index} lg={6} className="mb-4">
                      <Card className={`conversion-card ${metric.cardClass}`}>
                        <CardBody className="p-4 text-center">
                          <div className={`display-2 fw-bold mb-3 ${metric.textClass}`}>
                            {metric.percentage}
                          </div>
                          <div className="mb-3">
                            <h5 className={`fw-bold ${metric.textClass}`}>
                              {metric.title}
                            </h5>
                            <p className={`fw-medium ${metric.textClass} mb-2`}>
                              {metric.subtitle}
                            </p>
                            <p className="text-muted small mb-0">
                              {metric.description}
                            </p>
                          </div>
                          <Button
                            outline
                            size="sm"
                            className={`border-2 ${metric.textClass}`}
                            style={{
                              borderColor: "currentColor",
                              color: "inherit",
                            }}
                          >
                            {metric.buttonText}
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              {[
                {
                  id: "trend-properties",
                  icon: "📈",
                  title: "Trend & Properties Analytics",
                  desc: "Detailed trend analysis and property insights will be displayed here",
                },
                {
                  id: "session",
                  icon: "🕒",
                  title: "Session Analytics",
                  desc: "User session data and engagement metrics will be shown here",
                },
                {
                  id: "geography",
                  icon: "🌍",
                  title: "Geographic Analytics",
                  desc: "Geographic distribution of users and events",
                },
                {
                  id: "technographics",
                  icon: "🖥️",
                  title: "Technographic Analytics",
                  desc: "Device, browser, and technology usage patterns",
                },
              ].map(({ id, icon, title, desc }) => (
                <TabPane key={id} tabId={id}>
                  <Card className="dashboard-card">
                    <CardBody className="p-5 text-center">
                      <div className="mb-4" style={{ fontSize: "4rem" }}>
                        {icon}
                      </div>
                      <h4 className="fw-bold text-dark mb-3">{title}</h4>
                      <p className="text-muted">{desc}</p>
                    </CardBody>
                  </Card>
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;

