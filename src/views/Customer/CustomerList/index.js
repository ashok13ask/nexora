import React from "react";
import { FaEye, FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

const CustomerList = () => {
  const wrapperRef = React.useRef(null);

  const navigate = useNavigate();
  const handleFocus = () => {
    wrapperRef.current.classList.add("input-group-focus");
  };

  const handleBlur = () => {
    wrapperRef.current.classList.remove("input-group-focus");
  };

  const users = [
    {
      name: "John Doe",
      role: "Admin",
      email: "john@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      name: "Jane Smith",
      role: "Admin",
      email: "jane@example.com",
      status: "Active",
      lastAccessed: "Aug 23, 2023, 03:28 PM",
      passcode: "Inactive",
    },
    {
      name: "Alice Johnson",
      role: "Admin",
      email: "alice@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      name: "Bob Thomas",
      role: "Admin",
      email: "bob@example.com",
      status: "Active",
      lastAccessed: "Jun 28, 2023, 02:04 AM",
      passcode: "Inactive",
    },
    {
      name: "Charlie Brown",
      role: "Admin",
      email: "charlie@example.com",
      status: "Invited",
      lastAccessed: "Never Logged In",
      passcode: "Inactive",
    },
    {
      name: "Eve Watson",
      role: "Admin",
      email: "eve@example.com",
      status: "Active",
      lastAccessed: "Aug 24, 2023, 01:36 PM",
      passcode: "Inactive",
    },
    {
      name: "Mike Lee",
      role: "Admin",
      email: "mike@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
  ];
  return (
    <div className="content">
      <Row className="mt-3">
        <Col className="col-md-3" md="3">
          <div ref={wrapperRef}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Search by Name or ID"
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </InputGroup>
          </div>
        </Col>
        <Col className="col-md-3 ml-auto d-flex justify-content-end" md="3">
          <Button size="md" color="info">
            <FaPlus /> User
          </Button>
        </Col>
      </Row>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>
            <Row className="d-flex justify-content-between">
              <Col md="auto">Showing 7 of 7 Users</Col>
              <Col md="auto">
                <Button color="info" className="btn-link">
                  Download CSV
                </Button>
              </Col>
            </Row>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <FormGroup check>
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                    </Label>
                  </FormGroup>
                </th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Status</th>
                <th>Last Accessed</th>
                <th>Passcode Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <FormGroup check>
                      <Label check>
                        <Input defaultChecked type="checkbox" />
                        <span className="form-check-sign" />
                      </Label>
                    </FormGroup>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge
                      color={user.status === "Active" ? "primary" : "secondary"}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td>{user.lastAccessed}</td>
                  <td>{user.passcode}</td>
                  <td>
                    <FaEye
                      style={{ cursor: "pointer" }}
                      id={`view${index}`}
                      onClick={() => navigate("/admin/customer-detail")}
                    />
                  </td>
                  <UncontrolledTooltip
                    delay={1}
                    placement="bottom"
                    target={`view${index}`}
                  >
                    View
                  </UncontrolledTooltip>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomerList;
