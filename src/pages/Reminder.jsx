import { Button, Checkbox, Dropdown, Input, Space } from "antd";
import Title from "../components/Title";
import { HiTrash } from "react-icons/hi2";
import { useReminders } from "../features/reminder/useReminders";
import Spinner from "../components/Spinner";
import { FormattedDateAndTime } from "../helper/format";
import { useState } from "react";
import { useAddReminder } from "../features/reminder/useAddReminder";
import { useDeleteReminder } from "../features/reminder/useDeleteReminder";

const { TextArea } = Input;

function Reminder() {
  return (
    <div className="bg-surface-darker grid grid-cols-[80rem_1fr] gap-5 p-8">
      <MainReminder />
      <AddReminder />
    </div>
  );
}

export default Reminder;

function AddReminder() {
  const { isAdding, addReminder } = useAddReminder();

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const priorityOptions = [
    {
      key: "low-priority",
      label: "Low priority",
    },
    { key: "medium-priority", label: "Medium priority" },
    { key: "high-priority", label: "High Priority" },
  ];

  function handleMenuClick({ key }) {
    setPriority(key);
  }

  function handleAddItem() {
    addReminder({ name, priority });
    setName("");
    setPriority("");
  }

  if (isAdding) return <Spinner />;

  return (
    <div className="h-fit">
      <div className="bg-surface space-y-10 rounded-lg px-10 py-8 shadow-sm">
        <p className="text-center text-[2rem] font-semibold">Add Reminders</p>
        <div className="grid grid-cols-[10rem_1fr] gap-y-8 text-[1.4rem]">
          <p>Reminder</p>
          <TextArea
            rows={4}
            placeholder="Add reminder"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Priority</p>
          <Dropdown
            trigger={"click"}
            menu={{ items: priorityOptions, onClick: handleMenuClick }}
          >
            <Button>
              <Space>{priority ? priority : "Choose priority"}</Space>
            </Button>
          </Dropdown>
        </div>
        <Button
          onClick={handleAddItem}
          variant="solid"
          style={{ backgroundColor: "#6366f1", width: "100%" }}
        >
          Add reminder
        </Button>
      </div>
    </div>
  );
}

function MainReminder() {
  const { isLoading, reminders } = useReminders();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
      <Title>Reminder</Title>
      <ReminderList items={reminders} />
    </div>
  );
}

function ReminderList({ items }) {
  return (
    <div>
      <div className="grid grid-cols-[repeat(2,5rem)_repeat(3,1fr)_5rem] bg-blue-100 px-5 py-3 font-medium">
        <p></p>
        <p>Id</p>
        <p>Name</p>
        <p>Priority</p>
        <p>Created at</p>
        <p>Actions</p>
      </div>
      <ul>
        {items.map((item) => (
          <ReminderItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function ReminderItem({ item }) {
  const { id, name, created_at, priority } = item;
  const { isDeleting, deleteReminder } = useDeleteReminder();

  function handleDeleteReminder() {
    deleteReminder({ id });
  }

  if (isDeleting) return <Spinner />;

  return (
    <li className="grid grid-cols-[repeat(2,5rem)_repeat(3,1fr)_5rem] items-center justify-center border-b border-b-gray-200 p-5 text-[1.4rem]">
      <Checkbox onChange={() => {}}></Checkbox>
      <p>{id}</p>
      <p>{name}</p>
      <p>{priority}</p>
      <p>{FormattedDateAndTime(created_at)}</p>
      <div>
        <Button onClick={handleDeleteReminder} color="danger" variant="solid">
          <HiTrash className="text-white" />
        </Button>
      </div>
    </li>
  );
}
