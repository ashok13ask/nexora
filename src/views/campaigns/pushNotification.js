import React from "react";
import { FaCog, FaPlus, FaSave } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Collapse,
  FormGroup,
  Input,
  Label,
  Progress,
  Row,
} from "reactstrap";
import {
  FiChevronUp,
  FiChevronDown,
  FiInfo,
  FiRefreshCw,
} from "react-icons/fi";

const PushNotification = () => {
  const [isOpen, setIsOpen] = React.useState({ main: false, sub: false });

  const toggleMain = () => {
    setIsOpen((prev) => ({ ...prev, main: !prev.main }));
  };

  const toggleSub = () => {
    setIsOpen((prev) => ({ ...prev, sub: !prev.sub }));
  };

  return (
    <div className="content">
      <Row>
        <Col lg={4} className="d-flex align-items-center gap-2 mb-2 mb-lg-0">
          <Progress value={2} style={{ flex: 1 }} />
          <span className="text-nowrap">2% Complete</span>
        </Col>

        <Col lg={8} className="d-flex justify-content-end gap-2">
          <Button
            size="sm"
            style={{
              padding: "8px 20px",
              fontSize: "0.75rem",
              margin: 0,
            }}
            className="text-nowrap"
          >
            Unsaved
          </Button>
          <Button
            color="info"
            size="sm"
            style={{
              padding: "8px 20px",
              fontSize: "0.75rem",
              margin: 0,
            }}
            className="d-flex align-items-center"
          >
            <FaSave className="me-2" />
            <span className="text-nowrap">Save Draft</span>
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="col-12 col-md-8">
          <FormGroup>
            <Row>
              <Col xs="12" md="6" className="mb-3">
                <Label htmlFor="campaignName1" className="form-label">
                  Name <i style={{ color: "red" }}>*</i>
                </Label>
                <Input
                  id="campaignName1"
                  type="text"
                  placeholder="Enter Name"
                  defaultValue="Campaigns"
                />
              </Col>

              <Col xs="12" md="6" className="mb-3">
                <Label htmlFor="campaignName2" className="form-label">
                  Label
                </Label>
                <Input type="select" className="custom-select">
                  <option value="option1">Charged</option>
                  <option value="option2">Option 2 (default)</option>
                  <option value="option3">Option 3</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <Card>
        <CardHeader style={{ backgroundColor: "palegoldenrod" }}>
          <CardTitle className="d-flex justify-content-between">
            <div>
              <FaCog size={20} />
              <b className="ml-2 text-gray-700 dark:text-gray-300">
                Start Here
              </b>
            </div>
            {isOpen?.main ? (
              <FiChevronUp
                size={20}
                onClick={toggleMain}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FiChevronDown
                size={20}
                onClick={toggleMain}
                style={{ cursor: "pointer" }}
              />
            )}
          </CardTitle>
        </CardHeader>
        <Collapse isOpen={isOpen?.main}>
          <CardBody className="p-4">
            <div style={{ backgroundColor: "gray" }} className="d-flex justify-content-between p-3">
              <div>
                <FiInfo />
                Integrated platform : FCM, Baidu, Huawei, iOS <FiRefreshCw />{" "}
                Refresh
              </div>
               {isOpen?.sub ? (
              <FiChevronUp
                size={20}
                onClick={toggleSub}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FiChevronDown
                size={20}
                onClick={toggleSub}
                style={{ cursor: "pointer" }}
              />
            )}
            </div>
          </CardBody>
          <Collapse isOpen={isOpen?.sub}>
          <Card>
            
          </Card>
          
          </Collapse>
        </Collapse>
      </Card>
    </div>
  );
};

export default PushNotification;
