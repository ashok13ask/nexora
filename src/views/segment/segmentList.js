import SegmentTypeModal from "components/Modals/segmentTypeModal";
import { useActiveColor } from "context/activeColor";
import { useSegmentContext } from "context/SegementContext";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import { FaEllipsisV, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Button,
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
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

const SegmentList = () => {
  const { ActiveThemeColor } = useActiveColor();
  const { setSegmentModal } = useSegmentContext();
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const pickerRef = React.useRef(null);
  const navigate = useNavigate()

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
          style={{
            borderRadius: "10px",
          }}
          className="col-lg-4 p-0"
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
                <Button
                  color={ActiveThemeColor}
                  onClick={() => setSegmentModal(true)}
                >
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td className="w-25">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mb-1">Last ABC (30 days)</h5>
                            <p className="mb-1">ID: 1234567</p>
                            <p className="mb-0">Created by ak@gmail.com</p>
                          </div>
                          <UncontrolledDropdown>
                            <DropdownToggle tag="span" data-toggle="dropdown">
                              <FaEllipsisV
                                className="ml-2"
                                style={{ cursor: "pointer" }}
                              />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Engage</DropdownItem>
                              <DropdownItem>Clone</DropdownItem>
                              <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </td>
                      <td>Past Behavior</td>
                      <td>Apr 27, 2025</td>
                      <td>NA</td>
                      <td className="text-center">Na</td>
                      <td>
                        <FaEye
                          style={{ cursor: "pointer" }}
                          id={`tooltip${index}`}
                          size={20}
                          onClick={()=>navigate('/admin/segment/view')}
                        />
                        <UncontrolledTooltip
                          delay={0}
                          target={`tooltip${index}`}
                          // placement="down"
                        >
                          view
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <SegmentTypeModal />
    </div>
  );
};

export default SegmentList;
