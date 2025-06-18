/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {
  AnalyticsCard,
  AudienceSegmentCard,
  DashboardCampaignCard,
  QuickActionCard,
  TodayCard,
} from "./components/Cards";
import { todayCard } from "variables/dashboardCardData";
import { monthData } from "variables/dashboardCardData";
import { dashboardGraphOptions } from "variables/dashboardCardData";
import { dashboardGraphData } from "variables/dashboardCardData";
import { campaignsCard } from "variables/dashboardCardData";

// ChartConfig.js or inside your page file
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { dashboardArcData } from "variables/dashboardCardData";
import { dashboardArcOption } from "variables/dashboardCardData";
import { dashboardArcSegments } from "variables/dashboardCardData";
import { quickActionData } from "variables/dashboardCardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const Dashboard = () => {
  return (
    <>
      <div className="content">
        <Card
          className="card-chart p-3"
          style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
        >
          {/* <div className="d-flex align-items-center p-3"> */}

          <h4 className="mb-1" style={{ fontWeight: 800 }}>
            Today
          </h4>
          {/* <h6>- Jun 17, 2025</h6>
            </div> */}
          <Row className="d-flex justify-content-between p-3 g-3">
            {todayCard.map((data, index) => (
              <TodayCard data={data} index={index} />
            ))}
          </Row>
        </Card>

        <Card
          className="card-chart p-3"
          style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
        >
          {/* <div className="d-flex align-items-center p-3"> */}

          <h4 className="mb-1" style={{ fontWeight: 800 }}>
            This Month
          </h4>
          {/* <h6>- Jun 17, 2025</h6>
            </div> */}
          <Row className="d-flex justify-content-between p-3 g-3">
            {monthData.map((data, index) => (
              <AnalyticsCard data={data} index={index} />
            ))}
          </Row>
        </Card>
        <Card className="mb-4">
          <CardBody>
            <div style={{ height: "400px" }}>
              <Line options={dashboardGraphOptions} data={dashboardGraphData} />
            </div>
          </CardBody>
        </Card>
        <Row>
          <Col className="col-12 col-lg-6">
            <Card className="h-100">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0 fw-bold text-dark">Recent Campaign</h5>
                  <a
                    href="#"
                    className="text-info fw-medium text-decoration-none"
                  >
                    View All
                  </a>
                </div>
                {campaignsCard.map((data, index) => (
                  <DashboardCampaignCard data={data} index={index} />
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-lg-6">
            <AudienceSegmentCard
              data={dashboardArcData}
              options={dashboardArcOption}
              segments={dashboardArcSegments}
            />
          </Col>
        </Row>
        <Card
          className="card-chart p-3 mt-2"
          style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
        >
          {/* <div className="d-flex align-items-center p-3"> */}

          <h4 className="mb-1" style={{ fontWeight: 800 }}>
            Quick Action
          </h4>
          {/* <h6>- Jun 17, 2025</h6>
            </div> */}
          <Row className="d-flex justify-content-between p-3 g-3">
            {quickActionData.map((data, index) => (
              <QuickActionCard data={data} index={index} />
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
