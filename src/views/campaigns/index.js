import CustomPagination from "components/CustomPagination/CustomPagination";
import React from "react";
import {
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import {
  Button,
  Card,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { campaignData } from "variables/campaignData";
import { CampaignsCard } from "views/components/Cards";

const Campaigns = () => {
  return (
    <div className="content">
      <Row className="d-flex flex-row justify-content-between align-items-center">
        <Col className="col-12 col-md-8">
          <h2 style={{ fontWeight: 800 }} className="mb-1">
            All Campaigns
          </h2>
          <p className="text-muted" style={{ fontSize: "18px" }}>
            Manage and monitor all your marketing campaigns in one place
          </p>
        </Col>
        <Col className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0">
          <Button color="info">
            <FaPlus className="mr-2" /> Create Campaigns
          </Button>
        </Col>
      </Row>
      <Card className="mt-4 p-3">
        <Row>
          <Col className="col-12 col-lg-8"></Col>

          <Col className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search campaigns" />
            </InputGroup>
          </Col>
        </Row>
      </Card>

      <Row className="d-flex justify-content-between p-3 g-3">
        {campaignData.map((data, index) => (
          <CampaignsCard data={data} index={index} />
        ))}
      </Row>
      <Row className="d-flex justify-content-between">
        <Col>
          <p>
            Showing <b>1-9</b> of <b>24</b> campaign
          </p>
        </Col>
        <Col>
          <CustomPagination
            totalPages={3}
            currentPage={1}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Campaigns;
