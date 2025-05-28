import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Row,
} from "reactstrap";

const Insight = () => {
  return (
    <div className="content">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h4>Create Segment</h4>
        </div>
        <div className="d-flex">
          <Input
            type="text"
            className="mr-3"
            placeholder="Type something...."
          />
          <Button
            color="info"
            disabled
            style={{ width: "200px", fontSize: "10px", padding: "10px" }}
          >
            Save segment
          </Button>
        </div>
      </div>
      <Row className="mt-4">
        <Col xs="12">
          <Card className="card-stats">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="12">
                  <CardTitle>
                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <h3 className="mb-1">Past Behavior Segment</h3>
                        <h5 className="mb-0">
                          Segment users try property, past behavior and interest
                        </h5>
                      </div>

                      <h6 className="mb-0 align-self-center">
                        Change Segment Type
                      </h6>
                    </div>
                  </CardTitle>
                  <hr />
                  <CardBody>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "30px",
                        borderRadius: "5px",
                      }}
                    >
                      <p>Add Rule</p>
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card className="card-stats">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h2" className="fs-1">
                    Insights
                  </CardTitle>
                  <h5>
                    Users added so far to the segment, how to reach them, and
                    few sample users
                  </h5>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <h4>User Reachability</h4>
      <Row>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="3">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="9">
                  <div className="numbers">
                    <p className="card-category">Segment Users</p>
                    <CardTitle tag="h4">4,241</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="5">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Mobile Push</p>
                    <CardTitle tag="h4">3683</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="5">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Email</p>
                    <CardTitle tag="h4">4240</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="5">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">SMS</p>
                    <CardTitle tag="h4">3553</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="5">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">WhatsApp</p>
                    <CardTitle tag="h4">3110</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="2" md="6" className="mb-3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col xs="5">
                  <div className="info-icon text-center icon-warning">
                    <i className="tim-icons icon-chat-33" />
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Web Push</p>
                    <CardTitle tag="h4">0</CardTitle>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <h3>Sample User</h3>
    </div>
  );
};

export default Insight;
