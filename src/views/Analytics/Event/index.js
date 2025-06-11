import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4>Event</h4>
        <Button
          color="info"
          onClick={() => navigate("/admin/analytics/event/create")}
        >
          <FaPlus className="me-2" />
          <span className="d-none d-md-inline">New Event</span>
        </Button>
      </div>
      <div className="d-flex col-12 col-md-6 ">
        <div className="col-6 ">
          <Input
            type="select"
            className="custom-select"
            // value={selected}
            // onChange={(e) => setSelected(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2 (default)</option>
            <option value="option3">Option 3</option>
          </Input>
        </div>
        <div className="col-6">
          <Input
            type="select"
            className="custom-select"
            // value={selected}
            // onChange={(e) => setSelected(e.target.value)}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2 (default)</option>
            <option value="option3">Option 3</option>
          </Input>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #ccc", mb: 4 }} />
      <h4>Charged</h4>
      <p>In the last 30 days</p>
      <ul>
        <li>
          In the last <b>30</b> day(s)
        </li>
      </ul>
      <div className="d-block d-md-flex my-2">
        <UncontrolledDropdown className="d-md-none mb-2 mb-md-0">
          <DropdownToggle caret>Select Type</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Quick views</DropdownItem>
            <DropdownItem>Trend & Properties</DropdownItem>
            <DropdownItem>Session</DropdownItem>
            <DropdownItem>Geography</DropdownItem>
            <DropdownItem>Technographics</DropdownItem>
            <DropdownItem>People</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <ButtonGroup className="d-none d-md-flex" size="sm">
          <Button outline>Quick view</Button>
          <Button outline>Trend & Properties</Button>
          <Button outline>Session</Button>
          <Button outline>Geography</Button>
          <Button outline>Technographics</Button>
          <Button outline>People</Button>
        </ButtonGroup>
      </div>
      {/* Show only on md and up */}
      <Row
        className="text-center align-items-center d-none d-md-flex"
        style={{ border: "1px solid #ccc", padding: "30px" }}
      >
        <Col md={2} style={{ borderRight: "1px solid #ccc" }}>
          <h4>Total Events</h4>
          <h5>70,700</h5>
        </Col>
        <Col md={2} style={{ borderRight: "1px solid #ccc" }}>
          <h4>Users</h4>
          <h5>49,098</h5>
        </Col>
        <Col md={2}>
          <h4>Mobile</h4>
          <h5>24,890</h5>
          <p>51%</p>
        </Col>
        <Col md={2}>
          <h4>Tablet</h4>
          <h5>0</h5>
          <p>0%</p>
        </Col>
        <Col md={2}>
          <h4>Desktop</h4>
          <h5>21,345</h5>
          <p>49%</p>
        </Col>
        <Col md={2}>
          <h4>TV</h4>
          <h5>0</h5>
          <p>0%</p>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center d-block d-md-none text-center align-items-center">
        {[
          { title: "Total Events", value: "70,700" },
          { title: "Users", value: "49,098" },
          {
            title: "Mobile",
            value: "24,890",
            percent: "51%",
            badge: "primary",
          },
          { title: "Tablet", value: "0", percent: "0%", badge: "secondary" },
          { title: "Desktop", value: "21,345", percent: "49%", badge: "info" },
          { title: "TV", value: "0", percent: "0%", badge: "secondary" },
        ].map((item, i) => (
          <Col key={i} xs={12} md={6}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title text-muted">{item.title}</h4>
                <h3 className="card-text">{item.value}</h3>
                {item.percent && <div>{item.percent}</div>}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="d-flex text-center align-items-center mt-4">
        <Col sm={12} md={6}>
          <Card>
            <CardBody>
              <h3>5%</h3>
              <p>Users did 'Charged' between</p>
              <h5>22:00 to 23:00</h5>
              <button className="btn btn-info">
                View time of the day details
              </button>
              <p>For the seelected time period and event query</p>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <CardBody>
              <h3>30%</h3>
              <p>Users did 'Charged'</p>
              <h5>More the one time</h5>
              <button className="btn btn-info">View frequency details</button>
              <p>For the seelected time period and event query</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card>
        <CardHeader
          style={{ borderBottom: "1px solid #ccc", padding: "20px 10px" }}
        >
          Demographics
        </CardHeader>
        <CardBody>
          <Row className="d-flex text-center align-items-center">
            <Col style={{ borderRight: "1px solid #ccc" }}>
              <p>Female</p>
              <h2>48%</h2>
            </Col>
            <Col>
              <p>Male</p>
              <h2>52%</h2>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Events;
