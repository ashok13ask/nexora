import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Row,
} from "reactstrap";

const FindPeople = () => {
  return (
    <div className="content">
      <Row className="mt-3">
        <Col md="8" className="p-0">
          <Card>
            <CardHeader>
              <h3 className="mb-0">Segment </h3>
            </CardHeader>
            <hr id="hrLine" />
            <CardBody className="px-4 mb-0">
              <div className="mb-3">
                <p>By interest</p>
                <div id="hrLine" className="p-4">
                  <h4>Users Who like</h4>
                  <Button size="sm" className="btn-simple" color="twitter">
                    <FaPlus /> Interest
                  </Button>
                </div>
              </div>
              <div className="mb-3">
                <p>AND by behavior</p>
                <div id="hrLine" className="p-4">
                  <h4>Users Who did</h4>
                  <Button size="sm" className="btn-simple" color="twitter">
                    <FaPlus /> Event
                  </Button>
                </div>
              </div>
              <div className="mb-3">
                <p>AND</p>
                <div id="hrLine" className="p-4">
                  <h4>Did not do</h4>
                  <Button size="sm" className="btn-simple" color="twitter">
                    <FaPlus /> Event
                  </Button>
                </div>
              </div>
              <div>
                <p>AND</p>
                <div id="hrLine" className="p-4">
                  <h4>Display common property such as</h4>
                  <Button size="sm" className="btn-simple" color="twitter">
                    <FaPlus /> Property
                  </Button>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button size="sm" color="info">
                View details
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="4">
          <Card className="text-center">
            <CardHeader>By Identity</CardHeader>
            <hr id="hrLine" />
            <CardBody>
              <Input type="text" placeholder="_linuxoft@login3344" />
              <Button
                size="sm"
                color="info"
                className="d-flex mt-3 align-items-center"
              >
                <FaSearch />
                <span className="ml-2">Find</span>
              </Button>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardHeader className="mb-0">Bookmarked Segments</CardHeader>
            <hr id="hrLine" />
            <CardBody>No Bookmarked Segments</CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FindPeople;
