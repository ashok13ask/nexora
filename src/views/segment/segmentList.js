import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Progress,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";

const SegmentList = () => {
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
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
      <h2>Segment</h2>
      <FormGroup>
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
        <Col sm="12">
          <Card className="card-tasks" style={{height:"auto"}}>
            {" "}
            <CardHeader className="d-flex justify-content-between">
              <div className="d-flex">
                <Input
                  type="text"
                  style={{ width: "250px" }}
                  placeholder="Search by ID / Name"
                />
                <div
                  class="d-flex align-items-center justify-content-center border border-secondary rounded"
                  style={{ width: "35px", height: "35px", marginLeft: "10px" }}
                >
                  <i class="fa fa-bars"></i>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <p className="mr-3">Running Goals : 0/5</p>
                <Button
                  color="info"
                  onClick={() => navigate("/admin/segment/insight")}
                >
                  <i className="tim-icons icon-simple-add" /> Segment
                </Button>
              </div>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <h5>Showing 1-5 of 5 segments</h5>
              <Table responsive striped>
                <thead className="text-primary">
                  <tr>
                    <th>Segment details</th>
                    <th>Type</th>
                    <th>Created On</th>
                    <th>Updated On</th>
                    <th className="text-center">Updated By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">

                            <div className="text-start">
                            {/* <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label> */}
                              <h5 className="mb-1 ">Last ABC (30 days)</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Past Behavior</td>
                    <td>Apr 27, 2025</td>
                    <td>NA
                    </td>
                    <td className="text-center">Na</td>
                  </tr><tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">

                            <div className="text-start">
                            {/* <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label> */}
                              <h5 className="mb-1 ">Last ABC (30 days)</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Past Behavior</td>
                    <td>Apr 27, 2025</td>
                    <td>NA
                    </td>
                    <td className="text-center">Na</td>
                  </tr><tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">

                            <div className="text-start">
                            {/* <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label> */}
                              <h5 className="mb-1 ">Last ABC (30 days)</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Past Behavior</td>
                    <td>Apr 27, 2025</td>
                    <td>NA
                    </td>
                    <td className="text-center">Na</td>
                  </tr><tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">

                            <div className="text-start">
                            {/* <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label> */}
                              <h5 className="mb-1 ">Last ABC (30 days)</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Past Behavior</td>
                    <td>Apr 27, 2025</td>
                    <td>NA
                    </td>
                    <td className="text-center">Na</td>
                  </tr><tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">

                            <div className="text-start">
                            {/* <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label> */}
                              <h5 className="mb-1 ">Last ABC (30 days)</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Past Behavior</td>
                    <td>Apr 27, 2025</td>
                    <td>NA
                    </td>
                    <td className="text-center">Na</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SegmentList;
