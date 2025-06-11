import React from "react";
import {
  Label,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import {
  FaSmile,
  FaSync,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import UserDetails from "./userDetails";
import UserActivity from "./userActivity";
import UserEngagement from "./userEngagement";

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = React.useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log("actiive", activeTab);
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

            <Col className="d-flex justify-content-end align-items-center">
              <Row>
                <Col className="col-8">
                  <Input
                    type="text"
                    placeholder="Email/ Identity/ Nexora ID"
                    // className="w-100"
                  />
                </Col>
                <Col>
                  <Button
                    size="sm"
                    color="info"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Reset Profile"
                  >
                    <FaSync />
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Delete Profile"
                  >
                    <FaTrash />
                  </Button>
                </Col>
              </Row>
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
        <hr id="hrLine" />
        <CardFooter>
          <div className="d-flex align-items-center gap-2">
            <FaUser size={20} color="#ccc"/>
            <h4 className="mb-0 ml-2">Male</h4>
          </div>
        </CardFooter>
      </Card>

      <ButtonGroup className="d-flex" size="md">
        {["profile", "activity", "engagement"].map((tab) => (
          <Button
            key={tab}
            color={tab === activeTab ? "info" : "secondary"}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
      {activeTab === "profile" ? (
        <UserDetails />
      ) : activeTab === "activity" ? (
        <UserActivity />
      ) : activeTab === "engagement" ? (
        <UserEngagement />
      ) : null}
    </div>
  );
};

export default CustomerProfile;
