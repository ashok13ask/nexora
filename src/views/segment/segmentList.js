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
  Col,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";

const SegmentList = () => {
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);
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
  const args = {
    className: "my-custom-modal",
    backdrop: "static",
    size: "xl",
  };

  const segmentOptions = [
    {
      title: "Past Behavior Segment",
      desc: "Segment users by property, past behavior, and interest",
      icon: "📘", // replace with actual icon or SVG
      color: "#E0F2FF",
      onclick:()=>{navigate('/admin/segment/insight')}
    },
    {
      title: "Live - User Actions",
      desc: "Add users to segment when they do one or many events",
      icon: "🔧",
      color: "#E7FFF3",
    },
    {
      title: "Live - Inaction in Time Frame",
      desc: "Add users who do only one of two events in set time frame",
      icon: "🛑",
      color: "#E7FFF3",
    },
    {
      title: "Live - On a Date or Time",
      desc: "Add users to segment based on date or time",
      icon: "📅",
      color: "#E7FFF3",
    },
    {
      title: "Live - Page Visit",
      desc: "Add users to segment when they visit a specific page",
      icon: "🌐",
      color: "#F0E7FF",
    },
    {
      title: "Live - Referrer Entry",
      desc: "Add users to segment when referred by a website or campaign",
      icon: "🔗",
      color: "#E7FFF3",
    },
    {
      title: "Live - Page Count",
      desc: "Add users to segment based on count of pages visited",
      icon: "📄",
      color: "#E7FFF3",
    },
    {
      title: "Custom - List Based",
      desc: "Upload custom user list to create segment",
      icon: "📁",
      color: "#F3E6FF",
    },
  ];
  return (
    <div className="content">
      <h2>Segment</h2>
      <FormGroup>
        <div
          style={{
            borderRadius: "10px",
          }}
          className="col-lg-4"
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
      <Row>
        <Col sm="12">
          <Card className="card-tasks" style={{ height: "auto" }}>
            {" "}
            <CardHeader className="d-flex flex-column flex-md-row justify-content-between">
              {/* Search bar row - stays on top */}
              <div className="d-flex mb-2 mb-md-0">
                <Input
                  type="text"
                  style={{ width: "250px" }}
                  placeholder="Search by ID / Name"
                  className="me-2"
                />
                <div
                  className="d-flex align-items-center justify-content-center border border-secondary rounded"
                  style={{ width: "35px", height: "35px" }}
                >
                  <i className="fa fa-bars"></i>
                </div>
              </div>

              {/* Button group - moves below on small screens */}
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
                <p className="mr-3 mb-0">Running Goals : 0/5</p>
                <Button color="info" onClick={() => setModal(true)}>
                  <i className="tim-icons icon-simple-add" />
                  <span className="d-none d-md-inline"> Segment</span>
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
                    <td>NA</td>
                    <td className="text-center">Na</td>
                  </tr>
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
                    <td>NA</td>
                    <td className="text-center">Na</td>
                  </tr>
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
                    <td>NA</td>
                    <td className="text-center">Na</td>
                  </tr>
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
                    <td>NA</td>
                    <td className="text-center">Na</td>
                  </tr>
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
                    <td>NA</td>
                    <td className="text-center">Na</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>
          <span className="h3 mb-0">Create Segment</span>
        </ModalHeader>
        <ModalBody>
          <Row>
            {segmentOptions.map((option, idx) => (
              <Col md="4" className="mb-1" key={idx}>
                <Card
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    backgroundColor: "#F9FAFB",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  }}
                  onClick={option?.onclick}
                >
                  <CardBody className="d-flex align-items-start gap-3">
                    <div
                      style={{
                        backgroundColor: option.color,
                        padding: "10px",
                        borderRadius: "8px",
                        fontSize: "20px",
                      }}
                    >
                      {option.icon}
                    </div>
                    <div>
                      <span className="h4 mb-1">{option.title}</span>
                      <p className="text-muted small mb-0">{option.desc}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SegmentList;
