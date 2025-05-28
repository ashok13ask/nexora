import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import {
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

const RFM = () => {
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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
      <h3>RFM</h3>
      <FormGroup>
        <Label for="date">Filter by Date</Label>
        <div
          style={{ position: "relative", maxWidth: 300, borderRadius: "10px" }}
          ref={pickerRef}
        >
          <Input
            type="text"
            value={formattedRange}
            readOnly
            onClick={() => setShowPicker(!showPicker)}
            className="date-range-input"
            style={{ cursor: "pointer", color: "inherit" }}
          />
          {showPicker && (
            <div style={{ position: "absolute", zIndex: 1000 }}>
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
      <Row>
        <Col sm="8">
          <Card className="card-tasks">
            {" "}
            <CardHeader>
              <h6 className="title d-inline">Select Event</h6>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <h5>Select event for recencey & frequency analysis</h5>
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
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2 (default)</option>
                    <option value="option3">Option 3</option>
                  </Input>
                </FormGroup>
                <a className="link">
                  <i className="fa fa-plus" style={{ marginRight: "6px" }}></i>{" "}
                  Filter By
                </a>
              </div>
              <FormGroup check className="text-left gap-2 d-flex flex-column">
                <Label check style={{ marginTop: "20px" }}>
                  <Input type="checkbox" />
                  <span className="form-check-sign" />
                  <a href="#" style={{ fontSize: "10px" }}>
                    Add Mondary Event
                  </a>
                </Label>
                <Label style={{ marginTop: "20px" }}>Choose Option</Label>
                <Input
                  type="select"
                  className="custom-select"
                  // value={selected}
                  // onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2 (default)</option>
                  <option value="option3">Option 3</option>
                </Input>
                <Label style={{ marginTop: "20px" }}>Choose Option</Label>
                <Input
                  type="select"
                  className="custom-select"
                  // value={selected}
                  // onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2 (default)</option>
                  <option value="option3">Option 3</option>
                </Input>
              </FormGroup>
            </CardBody>
          </Card>
        </Col>{" "}
        <Col sm="4">
          <Card className="card-tasks p-3">
            <h2 className="text-center">RFM</h2>
            <p className="text-center" style={{ marginTop: "-20px" }}>
              between <b>Apr 18</b> and <b>May 17</b>
            </p>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <h6 className="mt-3">Recency and frequency event</h6>
            <p>App Launched</p>
            <h6 className="mt-3">Monetary Event</h6>
            <p>Charged</p>{" "}
            <h6 className="mt-3">Aggregate by</h6>
            <p>Amount</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RFM;
