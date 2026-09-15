import { useState } from "react";
import { Dropdown, Button, Modal, Space } from "antd";
import {
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const ActionDropdownModal = ({ editForm, handleDelete }) => {
  // State to manage modal visibility and type
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'edit' or 'delete'

  // Handle menu option clicks
  const handleMenuClick = (e) => {
    if (e.key === "edit") {
      setModalType("edit");
      setIsModalOpen(true);
    } else if (e.key === "delete") {
      setModalType("delete");
      setIsModalOpen(true);
    }
  };

  // Close modal and reset state
  const handleCancel = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  // Handle Edit Submit
  const handleEditSubmit = (values) => {
    setIsModalOpen(false);
  };

  // Handle Delete Confirm
  const handleDeleteConfirm = () => {
    handleDelete();
    setIsModalOpen(false);
  };

  // Define dropdown menu items
  const menuItems = [
    {
      key: "edit",
      label: "Edit",
      icon: <EditOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "delete",
      label: "Delete",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];

  return (
    <div>
      <div
        style={{
          borderRadius: "100%",
          display: "inline-block",
        }}
      >
        {/* Action Dropdown */}
        <Dropdown
          menu={{ items: menuItems, onClick: handleMenuClick }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button icon={<MoreOutlined />} type="text" shape="circle" />
        </Dropdown>
      </div>

      {/* Action Modal (Centered on Screen) */}
      <Modal
        title={
          modalType === "edit" ? (
            <p className="mb-8 text-center text-[1.8rem]">Edit Item</p>
          ) : (
            <Space>
              <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />
              <span>Confirm Delete</span>
            </Space>
          )
        }
        open={isModalOpen}
        onCancel={handleCancel}
        centered // Keeps the modal centered vertically and horizontally
        destroyOnHidden
        footer={
          modalType === "edit"
            ? null
            : [
                <Button key="cancel" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button
                  key="delete"
                  type="primary"
                  danger
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </Button>,
              ]
        }
      >
        {modalType === "edit" &&
          typeof editForm === "function" &&
          editForm({ onClose: handleCancel, isOpen: isModalOpen })}

        {modalType === "delete" && (
          <p style={{ marginTop: "16px" }}>
            Are you sure you want to delete <strong></strong>? This action
            cannot be undone.
          </p>
        )}
      </Modal>
    </div>
  );
};

export default ActionDropdownModal;
