import { useState } from "react";
import { Button, Modal } from "antd";

export default function ButtonModal({ title, okText, content, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to handle opening and closing the modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#6366f1", color: "white" }}
        onClick={showModal}
      >
        {children}
      </Button>
      <Modal
        closeIcon={false}
        footer={false}
        title={<p className="mb-5 text-center text-[1.8rem]">{title}</p>}
        okText={okText}
        open={isModalOpen}
      >
        {typeof content === "function" &&
          content({ onCancel: handleCancel, isOpen: isModalOpen })}
      </Modal>
    </div>
  );
}
