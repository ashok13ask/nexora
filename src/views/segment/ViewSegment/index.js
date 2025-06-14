import { useActiveColor } from "context/activeColor";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import RuleBuilder from "./RuleBuilder";

const ViewSegment = () => {
  const { ActiveThemeColor } = useActiveColor();
  // const initialRules = [
  //   {
  //     type: "User property",
  //     field: "Email",
  //     operator: "equals",
  //     values: ["ashok@gmail.com", "anish@gmail.com"],
  //   },
  //   { type: "User Bucket", operator: "equals", values: ["12"] },
  //   { type: "Demographics", field: "Gender", values: ["Male"] },
  //   {
  //     type: "Geography",
  //     operator: "contains",
  //     values: ["India", "Tamil Nadu", "Chennai"],
  //   },
  // ];
  return (
    <div className="content">
      <Row>
        <Col>
          <h2>Segment</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            size="md"
            color={ActiveThemeColor}
            className="btn btn-simple"
            style={{ maxHeight: "40px" }}
          >
            <FaSearch />
            Fine User
          </Button>
        </Col>
      </Row>
      <Card>
        <CardHeader>
          <h3 className="mb-1">Past behavior segment</h3>
          <p>Segment users by property, past behavior and interest</p>
        </CardHeader>
        <hr id="hrLine" />
        <CardBody>
          <RuleBuilder />
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewSegment;
