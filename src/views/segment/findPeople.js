import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Nav,
  Navbar,
  NavItem,
  Row,
  Table,
} from "reactstrap";
import {
  FaBell,
  FaGlobe,
  FaSmile,
  FaSyncAlt,
  FaTag,
  FaTrashAlt,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FindPeople = () => {
  const [activeTab, setActiveTab] = React.useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="content">
      <Card>
        <CardBody>
          <Row className="py-2">
            <Col md={6}>
              <FormGroup check className="text-left mb-3">
                <Label check>
                  <Input type="checkbox" />
                  <span className="form-check-sign" />
                  <h4 className="d-inline ms-2">Mark as test profile</h4>
                </Label>
              </FormGroup>
            </Col>

            <Col md={6}>
              {/* Parent wrapper controls layout */}
              <div className="d-flex flex-column gap-2">
                {/* Button group: stacked on sm, side by side on md+ */}
                <div className="d-flex flex-column flex-md-row gap-2">
                  <Button
                    color="info"
                    type="button"
                    className="px-1"
                    style={{ flex: 1 }}
                  >
                    {/* <FaSyncAlt /> */}
                    {/* <span className="d-md-none d-lg-inline"> */}
                    Reset Identities
                    {/* </span> */}
                  </Button>

                  <Button
                    color="info"
                    type="button"
                    className="px-1"
                    style={{ flex: 1 }}
                  >
                    {/* <FaTrashAlt /> */}
                    {/* <span className="d-md-none d-lg-inline"> */}
                    Delete Profile
                    {/* </span> */}
                  </Button>
                </div>

                {/* Input always full width and placed below buttons */}
                <Input
                  type="text"
                  placeholder="Email/ Identity/ Nexora ID"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "#097CF7",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff", // Icon color
                fontSize: "30px", // Icon size
              }}
            >
              <FaSmile />
            </div>
            <div className="ml-3">
              <h2 className="mb-0">Jhon Turner</h2>
            </div>
          </div>
        </CardHeader>
        <hr />
        <CardBody>
          <Row className="text-left align-items-stretch">
            <Col
              md={12}
              lg
              className="d-flex flex-column border-end border-secondary-subtle mb-3 mb-lg-0"
            >
              <div className="flex-grow-1">
                <p>Phone: 8565856958</p>
                <p>ID: 856595688888</p>
              </div>
            </Col>

            <Col
              md={12}
              lg
              className="d-flex flex-column border-end border-secondary-subtle mb-3 mb-lg-0"
            >
              <div className="flex-grow-1">
                <p>Location: Chicago, Illinois, United States</p>
                <p>Lat: 47.256336</p>
                <p>Long: 487.8565555</p>
              </div>
            </Col>

            <Col md={12} lg className="d-flex flex-column">
              <div className="flex-grow-1">
                <p>Email: jhon@gmail.com</p>
                <p>Telephone: 9656585658</p>
              </div>
            </Col>
          </Row>
        </CardBody>
        <hr style={{ borderTop: "1px solid #ccc" }} />
        <CardFooter>
          <div className="d-flex align-items-center gap-2">
            <FaUser size={20} />
            <h4 className="mb-0 ml-2">Male</h4>
          </div>
        </CardFooter>
      </Card>

      <ButtonGroup className="d-none d-md-flex" size="sm">
        <Button
          outline={activeTab === "profile"}
          onClick={() => handleTabClick("profile")}
        >
          Profile
        </Button>

        <Button
          outline={activeTab !== "activity"}
          onClick={() => handleTabClick("activity")}
        >
          Activity
        </Button>
        <Button
          outline={activeTab !== "engagement"}
          onClick={() => handleTabClick("engagement")}
        >
          Engagement
        </Button>
      </ButtonGroup>

      <Row className="p-3 d-flex align-items-stretch">
        <Col className="d-flex flex-column">
          <Card className="flex-grow-1">
            <CardBody>
              <h5>Initially acquired from</h5>
              <h4>First seen : Thu, Feb 22, 2024</h4>
              <h5>Last session</h5>
              <h4>Last seen : Fri, May 16, 2025</h4>
            </CardBody>
          </Card>
        </Col>
        <Col className="d-flex flex-column">
          <Card className="flex-grow-1">
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <p className="mb-0">Communication Preference</p>
                <Button className="ms-3">User Properties</Button>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>32 years 4 months</td>
                  </tr>
                  <tr>
                    <td>Birthday</td>
                    <td>May 03, 2003</td>
                  </tr>
                  <tr>
                    <td>Customer Type</td>
                    <td>Silver</td>
                  </tr>
                  <tr>
                    <td>Customer ID</td>
                    <td>85659865855</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>English</td>
                  </tr>
                  <tr>
                    <td>Timezone</td>
                    <td>Central standard time</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <h4>Devices used</h4>
      <Table responsive>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Push Notifications</th>
            <th>Type</th>
            <th>OS Version</th>
            <th>Application version</th>
            <th>Nexora SDK verison</th>
            <th>Device make</th>
            <th>Device Model</th>
            <th>Browser</th>
            <th>Operation System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FaGlobe size={20} />
            </td>
            <td>
              <div>
                <FaTag /> Firefox
              </div>
              <div>
                <FaBell /> Firefox
              </div>
            </td>
            <td>Desktop</td>
            <td>13.0</td>
            <td>2.4.1</td>
            <td>1.0.5</td>
            <td>Samsung</td>
            <td>Galaxy S21</td>
            <td>Chrome 120</td>
            <td>Android</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FindPeople;
