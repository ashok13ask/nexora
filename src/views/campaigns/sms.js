import { useActiveColor } from "context/activeColor";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import { BiStopCircle } from "react-icons/bi";
import { FaEdit, FaRegCopy } from "react-icons/fa";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const SMS = () => {
  const { ActiveThemeColor } = useActiveColor();
  const buttonStyle = {
    padding: "8px 20px",
    fontSize: "0.75rem",
    margin: 0,
  };
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
      <Row className="g-3">
        {/* Button Section */}
        <Col xs="12" md="8">
          <div className="d-block d-md-flex align-items-start">
            <ButtonGroup className="d-md-flex flex-wrap" size="sm">
              <Button style={buttonStyle} type="button">
                Overview
              </Button>
              <Button style={buttonStyle} type="button">
                Stats
              </Button>
            </ButtonGroup>
          </div>
        </Col>

        {/* Status Section */}
        <Col
          xs="12"
          md="4"
          className="ms-md-auto d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-end gap-3 mt-3 mt-md-0"
        >
          <div className="d-flex justify-content-between col-12">
            <Badge color={ActiveThemeColor}>Running</Badge>

            <div className="d-flex align-items-center gap-2">
              <BiStopCircle size={20} />
              <span>Stop</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaEdit size={20} />
              <span>Edit</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaRegCopy size={20} />
              <span>Copy</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="col-12 col-md-6">
          <FormGroup>
            <div
              style={{
                borderRadius: "10px",
              }}
              className="col-lg-6"
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
          className={`d-flex justify-content-start justify-content-md-end align-items-start text-${ActiveThemeColor} col-12 col-md-6`}
        >
          <div>
            <b>Conversion event : Charged</b> in <b>5 days</b> <FaEdit />
          </div>
        </Col>
      </Row>
      <Card className="p-4 mt-3">
        <Row>
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p>Sent</p>
            <h3>102,589</h3>
          </Col>
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p className="mb-1">Delivered</p>
            <h3 className="mb-0">69.09%</h3>
            <h6 style={{ color: "#777" }}>109,999</h6>

            <div className="w-100 d-flex justify-content-between mt-4 px-2">
              <p className="mb-0">RCS</p>
              <h6 className="mb-0">69.09% 109,999</h6>
            </div>

            <div className="w-100 d-flex justify-content-between px-2 mt-2">
              {/* You can put more rows or stats here */}
              <p className="mb-0">SMS</p>
              <h6 className="mb-0">0% 0</h6>
            </div>
          </Col>
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p className="mb-1">Viewed</p>
            <h3 className="mb-0">48.90%</h3>
            <h6 style={{ color: "#777" }}>89,909</h6>

            <div className="w-100 d-flex justify-content-between mt-4 px-2">
              <p className="mb-0">RCS</p>
              <h6 className="mb-0">73.90% 82,999</h6>
            </div>

            <div className="w-100 d-flex justify-content-between px-2 mt-2">
              {/* You can put more rows or stats here */}
              <p className="mb-0">SMS</p>
              <h6 className="mb-0">Not Applicable</h6>
            </div>
          </Col>{" "}
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p className="mb-1">Clicks</p>
            <h3 className="mb-0">70.78%</h3>
            <h6 style={{ color: "#777" }}>124,908</h6>

            <div className="w-100 d-flex justify-content-between mt-4 px-2">
              <p className="mb-0">RCS</p>
              <h6 className="mb-0">0% 65,999</h6>
            </div>

            <div className="w-100 d-flex justify-content-between px-2 mt-2">
              {/* You can put more rows or stats here */}
              <p className="mb-0">SMS</p>
              <h6 className="mb-0">0% 78,098</h6>
            </div>
          </Col>{" "}
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p className="mb-1">CTR</p>
            <h3 className="mb-0">56.9%</h3>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center d-flex flex-column justify-content-start align-items-center p-3 mt-4"
            style={{ border: "1px solid #ccc" }}
          >
            <p>Converted User</p>
            <h3 className="mb-1">11.11%</h3>
            <h6 style={{ color: "#777" }}>124,908</h6>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <Badge color="danger">Errors: 1,789</Badge>
            <Badge color="warning">Control Group: 8,789</Badge>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SMS;
