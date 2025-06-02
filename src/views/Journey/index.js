import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const Journey = () => {
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const buttonStyle = {
    padding: "8px 20px",
    fontSize: "0.75rem",
    margin: 0,
  };
  const pickerRef = React.useRef(null);

  const [showPicker, setShowPicker] = React.useState(false);

  const formattedRange = `${format(
    range[0].startDate,
    "MMM dd, yyyy"
  )} - ${format(range[0].endDate, "MMM dd, yyyy")}`;

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        !event.target.classList.contains("date-range-input")
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);
  return (
    <div className="content">
      <Row className="gap-3">
        {/* Button Section */}
        <Col xs="12" md="6">
          <div className="d-block d-md-flex align-items-start">
            {/* Dropdown for mobile */}
            <UncontrolledDropdown className="d-md-none mb-2 mb-md-0">
              <DropdownToggle caret>Select Type</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Overview</DropdownItem>
                <DropdownItem>Node Stats</DropdownItem>
                <DropdownItem>Engagement</DropdownItem>
                <DropdownItem>Journey Stats</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Button group for desktop */}
            <ButtonGroup className="d-none d-md-flex flex-wrap" size="sm">
              <Button style={buttonStyle} type="button">
                Overview
              </Button>
              <Button style={buttonStyle} type="button">
                Node Stats
              </Button>
              <Button style={buttonStyle} type="button">
                Engagement
              </Button>
              <Button style={buttonStyle} type="button">
                Journey Stats
              </Button>
            </ButtonGroup>
          </div>
        </Col>

        {/* Status Section */}
        <Col
          xs="12"
          md="6"
          className="d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-md-end gap-2"
        >
          <p className="mb-0 me-md-3">Last saved Jan-15</p>
          <p className="mb-0 me-md-3">Running since Aug 29, 11:45 AM</p>
          <Badge color="success">Running</Badge>
        </Col>
      </Row>

      {/* Date Range Picker Section */}
      <Row className="mt-4">
        <Col xs="12" lg="4">
          <FormGroup>
            <div
              style={{ borderRadius: "10px" }}
              ref={pickerRef}
              className="w-100"
            >
              <Input
                type="text"
                value={formattedRange}
                readOnly
                onClick={() => setShowPicker(!showPicker)}
                className="date-range-input w-100 w-md-50"
                style={{ cursor: "pointer", color: "inherit" }}
              />
              {showPicker && (
                <div>
                  <DateRange
                    ranges={range}
                    onChange={handleSelect}
                    locale={enUS}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                  />
                </div>
              )}
            </div>
          </FormGroup>
        </Col>

        <Col
          xs="12"
          lg="8"
          className="d-flex justify-content-md-end align-items-center mt-2 mt-lg-0"
        >
          <b>User in Journey: </b>&nbsp;0
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} lg={4}>
          <Card className="p-5" style={{ borderTop: "3px solid gray" }}>
            <Row>
              <Col>
                <p>Entered Journey</p>
                <p>789,098</p>
              </Col>
              <Col>
                <div className="d-flex justify-content-between">
                  <p>Qualified</p>
                  <p>1,528,545</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Control Group</p>
                  <p>328,545</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="p-5" style={{ borderTop: "3px solid green" }}>
            <Row>
              <Col>
                <p>Goal Met</p>
                <p>26,098</p>
              </Col>
              <Col>
                <p>Complete</p>
                <p>128,545</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="p-5" style={{ borderTop: "3px solid red" }}>
            <Row>
              <Col>
                <p>Time Out</p>
                <p>26,856</p>
              </Col>
              <Col>
                <p>Force Exits</p>
                <p>0</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <CardHeader>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                <h3 className="mb-0">Goal Conversion Rate</h3>

                <div className="d-flex align-items-center gap-2">
                  <label className="fw-bold mb-0 mr-3 fs-sm">
                    Control group
                  </label>
                  <select
                    className="form-select"
                    style={{
                      backgroundColor: "#f0f0f8", // soft grayish blue
                      border: "none",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      color: "#3c3c58",
                      fontWeight: 500,
                      minWidth: "200px",
                      appearance: "none", // removes native arrow for custom look
                      backgroundImage:
                        "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg fill='%233c3c58' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 10px center",
                      backgroundSize: "16px 16px",
                    }}
                  >
                    <option value="system">System</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <Row>
                {/* Left Column */}
                <Col xs="12" md="6">
                  <h5>Goal Performance</h5>
                </Col>

                {/* Right Column */}
                <Col xs="12" md="6">
                  <p>Boost with this Journey</p>
                  <h3 className="text-success">57.90%</h3>
                  <hr />

                  <div className="d-flex justify-content-between flex-column flex-sm-row">
                    <div>
                      <h4>Target Group</h4>
                      <p>Goal Conversion</p>
                    </div>
                    <div>
                      <h4>13.99%</h4>
                      <p>104,785</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between flex-column flex-sm-row mt-4">
                    <div>
                      <h4>System Control Group</h4>
                      <p>Goal Conversion</p>
                    </div>
                    <div>
                      <h4>8.09%</h4>
                      <p>1785</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Journey;
