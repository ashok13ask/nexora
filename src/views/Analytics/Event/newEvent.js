import { useActiveColor } from "context/activeColor";
import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const CreateEvent = () => {
  const { ActiveThemeColor } = useActiveColor();
  return (
    <div className="content">
      <div className="col-12 col-md-4">
        <Label>Filter by date</Label>
        <Input type="select" className="custom-select">
          <option value="option1">In last 7 days</option>
          <option value="option2">In last 30 days</option>
          <option value="option3">In last 90 days</option>
        </Input>
      </div>
      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <CardHeader>
              <CardTitle>Select Event</CardTitle>
            </CardHeader>
            <CardBody>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                <FormGroup>
                  <Label>Choose Option</Label>
                  <Input
                    type="select"
                    className="custom-select"
                    // value={selected}
                    // onChange={(e) => setSelected(e.target.value)}
                  >
                    <option value="option1">Charged</option>
                    <option value="option2">Option 2 (default)</option>
                    <option value="option3">Option 3</option>
                  </Input>
                </FormGroup>
                <FaPlus className="me-2" />
                Filter By
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="d-flex">
                Filter by behavior <p>(optional)</p>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <CardHeader>
              <h2 style={{ mb: 0 }}>Charged</h2>
              <h4>In last 30 days</h4>
              <p>
                Between <b>Apr 17, 2025</b> and <b>Mar 17, 2025</b>{" "}
              </p>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <h1 className="mt-4">70,898</h1>
              <p>Event Found</p>
              <Button color={ActiveThemeColor}>View Details</Button>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <p>Bookmark events</p>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <p>No bookmark events</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreateEvent;
