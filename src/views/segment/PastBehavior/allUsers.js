import { useActiveColor } from "context/activeColor";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { Line } from "react-chartjs-2";
import { DateRange } from "react-date-range";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  FormGroup,
  Input,
} from "reactstrap";

const AllUsers = () => {
  const { ActiveThemeColor } = useActiveColor();
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpen, setIsOpen] = React.useState({ main: false, sub: false });
  const toggleMain = () => {
    setIsOpen((prev) => ({ ...prev, main: !prev.main }));
  };

  // const toggleSub = () => {
  //   setIsOpen((prev) => ({ ...prev, sub: !prev.sub }));
  // };

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

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "All Users",
        data: [181900, 182500, 182800, 183000, 185000, 187431],
        fill: false,
        borderColor: "#007bff",
        tension: 0.3,
        pointBackgroundColor: "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Users",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="content">
      <div className="row align-items-start">
        {/* First Div - Heading */}
        <div className="col-12 col-md-8 d-flex align-items-center mb-2 mb-md-0">
          <span
            className="border rounded p-1 me-2 d-inline-flex align-items-center justify-content-center"
            style={{ width: 32, height: 32 }}
          >
            <FaArrowLeft size={16} color="#ccc" />
          </span>
          <>
            {/* h2 visible on md and above */}
            <h2 className="mb-0 me-3 ms-md-4 d-none d-md-block ml-4">
              All Users
            </h2>

            {/* h5 visible below md */}
            <h4 className="mb-0 me-3 ms-3 d-block d-md-none ml-4">All Users</h4>
          </>

          <Badge
            color={ActiveThemeColor}
            className="align-items-center ml-2 mt-2"
          >
            PAST BEHAVIOR
          </Badge>
        </div>

        {/* Second Div - Buttons */}
        <div className="col-12 col-md-4 d-flex justify-content-end">
          <Button size="sm" color="secondary" className="me-2">
            Precompute Segment
          </Button>
          <Button size="sm" color={ActiveThemeColor}>
            Engage
          </Button>
        </div>
      </div>
      <Card className="mt-3">
        <CardHeader>
          <CardTitle className="d-flex justify-content-between mb-0">
            <div>
              <h3 className="mb-0">Segment Definition</h3>
              <p>Criteria that adds users to the segment</p>
            </div>
            {isOpen?.main ? (
              <FiChevronUp
                size={20}
                onClick={toggleMain}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FiChevronDown
                size={20}
                onClick={toggleMain}
                style={{ cursor: "pointer" }}
              />
            )}
          </CardTitle>
        </CardHeader>
        <hr color="#ccc" />
        <CardBody>
          <h4>Past Behavior Segment</h4>
        </CardBody>
      </Card>
      <Card className="mt-3">
        <CardHeader>
          <CardTitle className="d-flex flex-column flex-md-row justify-content-between gap-2 mb-0">
            {/* Left side: Title and subtitle */}
            <div>
              <h4 className="mb-0">Segment Trend</h4>
              <p className="mb-0">Data-wise trend of users added to segment</p>
            </div>

            {/* Right side: Date picker and download icon */}
            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-end">
              <FormGroup className="mb-0">
                <div
                  className="col-auto"
                  ref={pickerRef}
                  style={{ borderRadius: "10px" }}
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
              <FaDownload size={20} style={{ cursor: "pointer" }} />
            </div>
          </CardTitle>
        </CardHeader>
        <hr color="#ccc" />
        <Line data={data} options={options} />
      </Card>
    </div>
  );
};

export default AllUsers;
