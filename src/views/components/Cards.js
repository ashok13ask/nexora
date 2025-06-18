import { Doughnut } from "react-chartjs-2";
import { FaCircle, FaEllipsisV } from "react-icons/fa";
import { Badge, Card, CardBody, Col, Progress, Row } from "reactstrap";
import { generateRandomLightAndDarkColor } from "utils/GenerateColor";

export const TodayCard = ({ data, index }) => {
  return (
    <Col key={index} className="col-12 col-md-6 col-lg-3">
      <Card className="p-3" id="card-hover">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-muted mb-0">{data.name}</h6>
          <div
            style={{
              backgroundColor: data.bgColor,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <data.icon color={data.iconColor} size={20} />
          </div>
        </div>
        <h1 className="mb-0 mt-4" style={{ fontWeight: 800 }}>
          {data.value}
        </h1>
      </Card>
    </Col>
  );
};

export const AnalyticsCard = ({ data, index }) => {
  return (
    <Col key={index} className="col-12 col-md-6 col-lg-3">
      <Card className="p-3" id="card-hover">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-muted mb-0">{data.title}</h6>
          <div
            style={{
              backgroundColor: data.bgColor,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <data.icon color={data.iconColor} size={20} />
          </div>
        </div>
        <h1 className="mb-0 mt-2" style={{ fontWeight: 800 }}>
          {data.value}
        </h1>
        <h6
          className="text-muted mt-3"
          style={{ fontSize: "11px", textTransform: "lowercase" }}
        >
          <Badge color={data.badegColor}>{data.change} %</Badge> from last month
        </h6>
      </Card>
    </Col>
  );
};

export const DashboardCampaignCard = ({ data }) => {
  return (
    <Card className="px-3">
      <Row
        style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
        className="py-2"
      >
        <Col className="p-2 col-8">
          <div className="d-flex align-items-center">
            <div
              style={{
                backgroundColor: data.bgColor,
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <data.icon color={data.iconColor} size={25} />
            </div>
            <div className="d-flex flex-column ml-2">
              <h6
                style={{ fontSize: "18px", textTransform: "capitalize" }}
                className="mb-1"
              >
                {data.title}
              </h6>
              <div className="d-flex">
                <p className="mr-1 text-muted">{data.channel}</p>|
                <p className="ml-1 text-muted">{data.schedule}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-4 d-flex justify-content-between align-items-center">
          <Badge
            className="px-3 py-1 text-center"
            style={{
              backgroundColor: data.badegColor,
              textTransform: "capitalize",
              fontSize: "0.875rem", // ~14px
              color: data.badgeTextColor,
              minWidth: "80px", // optional: keep a base width
              whiteSpace: "nowrap",
            }}
          >
            {data.status}
          </Badge>

          <FaEllipsisV />
        </Col>
      </Row>
    </Card>
  );
};

export const AudienceSegmentCard = ({ data, options, segments }) => {
  return (
    <Card className="h-100">
      <CardBody>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0 fw-bold text-dark">
            Top Audience Segments - RFM
          </h5>
          <a href="#" className="text-info fw-medium text-decoration-none">
            View All
          </a>
        </div>

        {/* Doughnut Chart */}
        <div className="d-flex justify-content-center mb-4">
          <div style={{ width: "280px", height: "280px" }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>

        {/* Custom Legend */}
        <div className="mt-4">
          {segments.map((segment, index) => (
            <Row className="align-items-center mb-3" key={index}>
              <Col xs="auto">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: segment.color,
                  }}
                ></div>
              </Col>
              <Col>
                <span className="text-muted">{segment.name}</span>
              </Col>
              <Col xs="auto">
                <span className="fw-bold text-dark">{segment.percentage}%</span>
              </Col>
            </Row>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export const QuickActionCard = ({ data, index }) => {
  return (
    <Col key={index} className="col-12 col-md-6 col-lg-3 ">
      <Card
        className="p-3 d-flex flex-column justify-content-center align-items-center"
        id="card-hover"
      >
        <div
          style={{
            backgroundColor: data.bgColor,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <data.icon color={data.iconColor} size={20} />
        </div>
        <h4 className="mb-0 mt-4 text-muted" style={{ fontWeight: 800 }}>
          {data.title}
        </h4>
      </Card>
    </Col>
  );
};

export const CampaignsCard = ({ data, index }) => {
  const { lightColor, darkColor } = generateRandomLightAndDarkColor();

  console.log("Light:", lightColor);
  console.log("Dark:", darkColor);
  return (
    <Col className="col-12 col-md-6 col-xl-4 mb-4" key={index}>
      <Card className="h-100" id="card-hover">
        <CardBody className="p-4">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "48px",
                  height: "48px",
                  border:'1px solid #e0e0e0'
                }}
              >
                {data.Icon}
              </div>
              <div className="ml-2">
                <h6
                  style={{ fontSize: "15px", textTransform: "capitalize" }}
                  className="mb-1"
                >
                  {data.title}
                </h6>
                <div className="d-flex">
                  {/* <Badge color="light" className="text-muted px-2 py-1"> */}
                  {data.channel} | {/* </Badge> */}
                  <Badge color="success" className="px-2 py-1 ml-2">
                    {data.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="text-muted" style={{ cursor: "pointer" }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="5" r="1" fill="currentColor" />
                <circle cx="12" cy="19" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Dates */}
          <div className="mb-4 d-flex justify-content-between mt-4">
            <div>
              <div className="text-muted mb-1">
                {data.scheduledFor
                  ? "Schedule for"
                  : data.started
                  ? " Started"
                  : data.createdOn
                  ? "Created On"
                  : null}
              </div>
              <div className="text-muted mb-1">
                {data.targetAudience
                  ? "Target Audiency"
                  : data.ends
                  ? "Ends"
                  : data.lastEdited
                  ? "Last Edited"
                  : data.type
                  ? "Type"
                  : data.ended
                  ? "End"
                  : data.pausedOn
                  ? "Paused On"
                  : null}
              </div>
            </div>
            <div className="text-right">
              <div className="text-muted" style={{ fontWeight: 600 }}>
                {data.scheduledFor
                  ? data.scheduledFor
                  : data.started
                  ? data.started
                  : data.createdOn
                  ? data.createdOn
                  : null}
              </div>
              <div className="text-muted" style={{ fontWeight: 600 }}>
                {data.targetAudience
                  ? data.targetAudience
                  : data.ends
                  ? data.ends
                  : data.lastEdited
                  ? data.lastEdited
                  : data.type
                  ? data.type
                  : data.ended
                  ? data.ended
                  : data.pausedOn
                  ? data.pausedOn
                  : null}
              </div>
            </div>
          </div>

          {/* Progress */}
          {data.progress || data.performance ? (
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted">
                  {data.progress
                    ? "Progress"
                    : data.performance
                    ? "Performance"
                    : null}
                </span>
                <span className="fw-bold">
                  {" "}
                  {data.progress
                    ? `${data.progress}%`
                    : data.performance
                    ? data.performance
                    : null}
                </span>
              </div>
              <Progress
                value={
                  data.progress
                    ? data.progress
                    : data.performanceValue
                    ? data.performanceValue
                    : null
                }
                id="custom-progress"
                className="mb-1"
              />
            </div>
          ) : null}

          {/* Stats */}
          <Row className="g-0">
            <Col xs="4" className="text-center">
              <div className="text-muted small mb-1">
                {data.reach ? "Reach" : "Sent"}
              </div>
              <div className="fw-bold text-dark fs-5">
                {data.reach ? data.reach : data.sent ? data.sent : "-"}
              </div>
            </Col>
            <Col xs="4" className="text-center border-start border-end">
              <div className="text-muted small mb-1">
                {data.engagement
                  ? "Engagement"
                  : data.delivery
                  ? "Delivery"
                  : "Opens"}
              </div>
              <div className="fw-bold text-dark fs-5">
                {data.engagement
                  ? data.engagement
                  : data.delivery
                  ? data.delivery
                  : data.opens
                  ? data.opens
                  : "-"}
              </div>
            </Col>
            <Col xs="4" className="text-center">
              <div className="text-muted small mb-1">Conversions</div>
              <div className="fw-bold text-dark fs-5">426</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
