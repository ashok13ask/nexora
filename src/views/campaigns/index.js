import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  NavItem,
  NavLink,
  Row,
  Table,
  UncontrolledDropdown,
} from "reactstrap";

const Campaigns = () => {
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
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
      <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
        <h4 className="mb-3">All Campaigns</h4>
      </div>
      <FormGroup>
        <div
          style={{
            borderRadius: "10px",
          }}
          className="col-md-4 col-lg-3"
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
      <div className="mt-4">
        <Nav>
          <NavItem>
            <NavLink active href="#">
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Draft</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Running</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Scheduled
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Approval pending</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Completed</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              Stopped
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Rejected</NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Saved Items
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
      <Row className="mt-2">
        <Col xs="12">
          <Card className="card-stats">
            <CardHeader className="d-flex flex-column flex-md-row justify-content-between">
              {/* Search bar row - stays on top */}
              <div className="d-flex mb-2 mb-md-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" placeholder="Search" />
                </InputGroup>
                <div
                  className="d-flex align-items-center justify-content-center border border-secondary rounded"
                  style={{ width: "35px", height: "35px" }}
                >
                  <i className="fa fa-bars"></i>
                </div>
              </div>

              {/* Button group - moves below on small screens */}
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 ">
                <ButtonGroup className="col-md-12">
                  <Button
                    color="info"
                    onClick={() => navigate("/admin/segment/insight")}
                  >
                    <i className="tim-icons icon-simple-add" />
                    Subscribe to Reports
                  </Button>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>Campaigns</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Messaging Channel</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={() => navigate("/admin/campaigns/new/push")}
                      >
                        Push Notifications
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/admin/campaigns/new/sms")}
                      >
                        SMS
                      </DropdownItem>
                      <DropdownItem>In-App Messages</DropdownItem>
                      <DropdownItem>App Inbox</DropdownItem>
                      <DropdownItem>Native Display</DropdownItem>
                      <DropdownItem>Email</DropdownItem>
                      <DropdownItem>WhatsApp</DropdownItem>
                      <DropdownItem>Web Inbox</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ButtonGroup>
              </div>
            </CardHeader>
            <hr style={{ borderTop: "1px solid #ccc" }} />
            <CardBody>
              <Table responsive striped>
                <thead className="text-primary">
                  <tr>
                    <th>Campaigns details</th>
                    <th>Start Time</th>
                    <th>Sent</th>
                    <th>Engage</th>
                    <th>Rate</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">
                            <div className="text-start">
                              <h5 className="mb-1 ">Welcome SMS with RCS</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Apr 27, 2025</td>
                    <td>4,447</td>
                    <td>34,908</td>
                    <td>5%</td>
                    <td>Running</td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">
                            <div className="text-start">
                              <h5 className="mb-1 ">Welcome SMS with RCS</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Apr 27, 2025</td>
                    <td>4,447</td>
                    <td>34,908</td>
                    <td>5%</td>
                    <td>Running</td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">
                            <div className="text-start">
                              <h5 className="mb-1 ">Welcome SMS with RCS</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Apr 27, 2025</td>
                    <td>4,447</td>
                    <td>34,908</td>
                    <td>5%</td>
                    <td>Running</td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">
                            <div className="text-start">
                              <h5 className="mb-1 ">Welcome SMS with RCS</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Apr 27, 2025</td>
                    <td>4,447</td>
                    <td>34,908</td>
                    <td>5%</td>
                    <td>Running</td>
                  </tr>
                  <tr>
                    <td>
                      <FormGroup check>
                        <div className="d-flex justify-content-between align-items-start w-100">
                          <div className="d-flex align-items-start gap-2">
                            <div className="text-start">
                              <h5 className="mb-1 ">Welcome SMS with RCS</h5>
                              <p className="mb-1">ID: 1234567</p>
                              <p className="mb-0">Created by ak@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </FormGroup>
                    </td>
                    <td>Apr 27, 2025</td>
                    <td>4,447</td>
                    <td>34,908</td>
                    <td>5%</td>
                    <td>Running</td>
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

export default Campaigns;
