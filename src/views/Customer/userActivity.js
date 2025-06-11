import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

const TimelineEvent = ({ time, icon, title, description }) => (
  <Row className="mb-3 align-items-start">
    <Col xs="2" className="text-end text-muted small">
      {time}
    </Col>
    <Col xs="10">
      <div>
        <i className={`tim-icons ${icon} me-2`}></i>
        <strong>{title}</strong>
      </div>
      {description && <div className="text-muted small">{description}</div>}
    </Col>
  </Row>
);

const UserActivity = () => {
  const events = [
    {
      name: "App Launched",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Tue, Jun 9, 2020",
      count: 179,
    },
    {
      name: "App Uninstalled",
      firstOn: "Sun, Jun 30, 2019",
      lastOn: "Sat, May 23, 2020",
      count: 17,
    },
    {
      name: "Charged",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Sat, Jun 6, 2020",
      count: 22,
    },
    {
      name: "Searched",
      firstOn: "Mon, Jun 10, 2019",
      lastOn: "Wed, Jun 10, 2020",
      count: 228,
    },
  ];
  return (
    <Row className="mt-4">
      <Col className="col-12 col-lg-4">
        <Card>
          <CardBody>
            <Row className="mb-3 d-flex justify-content-end px-3">
              <select id="custom-select">
                <option value="system">Filter By Events</option>
                <option value="manual">Filter By Past Behavior</option>
              </select>
            </Row>
            <hr id="hrLine" />
            <Table borderless>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                    <td className="align-middle" width="5%"></td>
                    <td className="align-middle" width="60%">
                      <div>{event.name}</div>
                      <small>
                        <div>First On : {event.firstOn}</div>
                        <div>Last On : {event.lastOn}</div>
                      </small>
                    </td>
                    <td className="align-middle text-end">
                      <strong>{event.count} times</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col className="col-12 col-lg-8">
        <Card>
          <CardHeader>
            <h4 className="mb-2">User activity details</h4>
          </CardHeader>
          <hr id="hrLine" className="p-0" />
          <CardBody>
            <Row style={{ marginTop: "-32px" }}>
              <Col
                className="p-5 d-flex flex-column align-items-center "
                id="hrLine"
              >
                <p>Avg. visit duration is</p>
                <h2>9 minutes</h2>
              </Col>
              <Col
                className="p-5 d-flex flex-column align-items-center "
                id="hrLine"
              >
                <p>Avg. time between visit is</p>
                <h2>2 days</h2>
              </Col>
            </Row>
            <div className="p-3">
              <h5 className="text-muted mb-4">Fri, April 21, 2023</h5>

              <TimelineEvent
                time="06:15:02 pm"
                icon="icon-email-85"
                title="Reachable By"
                description="Push | YNsR2..."
              />
              <TimelineEvent
                time="06:15:02 pm"
                icon="icon-email-85"
                title="Reachable By"
                description="Email | akimggg2221@gmail.com"
              />

              <hr />

              <TimelineEvent
                time="06:45:51 am"
                icon="icon-compass-05"
                title="UTM Visited"
                description="Google | gSrc | gMed | gcCamp"
              />
              <TimelineEvent
                time="06:45:51 am"
                icon="icon-credit-card"
                title="Charged ✅"
                description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
              />
              <TimelineEvent
                time="06:45:02 am"
                icon="icon-single-02"
                title="Identity Set"
                description="akimggg2221@gmail.com | New User | SDK |"
              />
              <TimelineEvent
                time="06:44:58 am"
                icon="icon-compass-05"
                title="UTM Visited"
                description="Google | gSrc | gMed | gcCamp"
              />
              <TimelineEvent
                time="06:44:58 am"
                icon="icon-credit-card"
                title="Charged ✅"
                description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UserActivity;
