import React from "react";
import { FaBell, FaGlobe, FaTag } from "react-icons/fa";
import { Badge, Card, CardBody, Col, Row, Table } from "reactstrap";

const UserDetails = () => {
  return (
    <>
      <Row className="mt-3 d-flex align-items-stretch">
        <Col className="col-12 col-md-6 d-flex flex-column">
          <Card className="flex-grow-1">
            <CardBody>
              <h5>Initially acquired from</h5>
              <h4>First seen : Thu, Feb 22, 2024</h4>
              <h5>Last session</h5>
              <h4>Last seen : Fri, May 16, 2025</h4>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-12 col-md-6 d-flex flex-column">
          <Card className="flex-grow-1">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <p className="mb-0">Communication Preference</p>
                <Badge className="ms-3" color="info">
                  User Properties
                </Badge>
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
    </>
  );
};

export default UserDetails;
