import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const Insight = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);
  const ruleCategories = [
    {
      title: "USER PROPERTY",
      color: "#007bff",
      rules: [
        "User property",
        "User Bucket",
        "Demographics",
        "Geography",
        "Geography Radius",
        "Technographics",
        "Reachability",
        "App Fields",
        "Segments",
        "Subscription Groups",
      ],
    },
    {
      title: "USER BEHAVIOR",
      color: "#007bff",
      rules: [
        "Event (Did)",
        "Event (Have Not Done)",
        "Event Combination (Did Any Of)",
      ],
    },
    {
      title: "USER INTERESTS",
      color: "#007bff",
      rules: ["Event property", "Time of the day", "Day of the week"],
    },
  ];
  const args = {
    className: "my-custom-modal",
    backdrop: "static",
    size: "xl",
  };
  return (
    <div className="content">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
        {/* Title - full width on mobile, left-aligned on desktop */}
        <div className="col-12 col-md-auto mb-2 mb-md-0 text-center text-md-start">
          <h4 className="mb-0">Create Segment</h4>
        </div>

        <div className="d-flex col-md-12 col-lg-6 align-items-center">
          <Input type="text" placeholder="Type something..." />
          <Button className="btn btn-info w-50">
            <span className="d-none d-md-inline">save segment</span>
            <span className="d-inline d-md-none">save</span>
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
                    <div className="d-flex flex-column flex-md-row justify-content-between w-100 gap-2">
                      <div className="text-center text-md-start">
                        <h3 className="mb-1">Past Behavior Segment</h3>
                        <h5 className="mb-0 text-muted">
                          Segment users by property, past behavior and interest
                        </h5>
                      </div>

                      <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                        <h6 className="mb-0 text-primary cursor-pointer">
                          Change Segment Type
                        </h6>
                      </div>
                    </div>
                  </CardTitle>
                  <hr />
                  <CardBody>
                    {/* <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "30px",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        onClick={() => setModal(true)}
                        className="text-primary mb-0"
                        style={{ cursor: "pointer" }}
                      >
                        Add Rule
                      </p>
                    </div> */}
                    <Badge
                      color="info"
                      className="p-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setModal(true)}
                    >
                      Add Rule
                    </Badge>
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

      <Modal isOpen={modal} toggle={toggle} size="lg" {...args}>
        <ModalHeader toggle={toggle}>
          <h4 className="mb-0">Choose a rule</h4>
        </ModalHeader>
        <ModalBody>
          <Row>
            {ruleCategories.map((cat, i) => (
              <Col md="4" key={i}>
                <span
                  className="h6"
                  style={{ color: cat.color, fontWeight: "bold" }}
                >
                  {cat.title}
                </span>
                <ul className="list-unstyled mt-2 ">
                  {cat.rules.map((rule, j) => (
                    <li
                      key={j}
                      className="mb-2 text-dark"
                      style={{ cursor: "pointer" }}
                    >
                      {rule}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Insight;
