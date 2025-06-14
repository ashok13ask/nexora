import { useSegmentContext } from "context/SegementContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const SegmentTypeModal = () => {
  const { setSegmentModal, segmentModal } = useSegmentContext();
  console.log(segmentModal);
  const segmentOptions = [
    {
      title: "Past Behavior Segment",
      desc: "Segment users by property, past behavior, and interest",
      icon: "📘", // replace with actual icon or SVG
      color: "#E0F2FF",
      onclick: () => {
        navigate("/admin/segment/insight");
        setSegmentModal(false);
      },
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
  const toggle = () => setSegmentModal(!segmentModal);
  const navigate = useNavigate();

  const args = {
    className: "my-custom-modal",
    backdrop: "static",
    size: "xl",
  };
  return (
    <Modal isOpen={segmentModal} toggle={toggle} {...args}>
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
  );
};

export default SegmentTypeModal;
