import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPagination = ({
  totalPages = 3,
  currentPage = 1,
  onPageChange = () => {},
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      const newPage = activePage - 1;
      setActivePage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      const newPage = activePage + 1;
      setActivePage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination className="mb-0">
        {/* Previous Button */}
        <PaginationItem disabled={activePage === 1}>
          <PaginationLink
            previous
            onClick={handlePrevious}
            style={{
              borderColor: "#dee2e6",
              color: "#6c757d",
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginRight: "4px",
              border: "1px solid #dee2e6",
              padding: "8px 12px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaChevronLeft />
          </PaginationLink>
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <PaginationItem key={page} active={page === activePage}>
              <PaginationLink
                onClick={() => handlePageClick(page)}
                style={{
                  borderColor: page === activePage ? "#007bff" : "#dee2e6",
                  color: page === activePage ? "#fff" : "#212529",
                  backgroundColor: page === activePage ? "#007bff" : "#fff",
                  borderRadius: "8px",
                  marginRight: "4px",
                  border: "1px solid",
                  padding: "8px 12px",
                  minWidth: "40px",
                  height: "40px", // optional for height alignment
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        <PaginationItem disabled={activePage === totalPages}>
          <PaginationLink
            next
            onClick={handleNext}
            style={{
              borderColor: "#dee2e6",
              color: "#6c757d",
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginRight: "4px",
              border: "1px solid #dee2e6",
              padding: "8px 12px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaChevronRight />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

CustomPagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default CustomPagination;
