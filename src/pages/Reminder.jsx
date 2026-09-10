import { Button, Checkbox, Dropdown, Input } from "antd";
import Title from "../components/Title";
import { HiTrash } from "react-icons/hi2";

const { TextArea } = Input;

const items = [
  {
    id: 1,
    name: "Clean the office",
    priority: "High priority",
    createdAt: "10/Sep/2026 17:45",
  },
  {
    id: 1,
    name: "Clean the office",
    priority: "High priority",
    createdAt: "10/Sep/2026 17:45",
  },
];

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
  const priorityOptions = [
    {
      value: "low-priority",
      label: "Low priority",
    },
    { value: "medium-priority", label: "Medium priority" },
    { value: "high-priority", label: "High Priority" },
  ];

  return (
    <div className="h-fit">
      <div className="bg-surface space-y-10 rounded-lg px-10 py-8 shadow-sm">
        <p className="text-center text-[2rem] font-semibold">Add Reminders</p>
        <div className="grid grid-cols-[10rem_1fr] gap-y-8 text-[1.4rem]">
          <p>Reminder</p>
          <TextArea rows={4} placeholder="Add reminder" />
          <p>Priority</p>
          <Dropdown trigger={"click"} menu={{ items: priorityOptions }}>
            <Button>Choose priority</Button>
          </Dropdown>
        </div>
        <Button
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
  return (
    <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
      <Title>Reminder</Title>
      <ReminderList items={items} />
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
          <ReminderItem item={item} />
        ))}
      </ul>
    </div>
  );
}

function ReminderItem({ item }) {
  const { id, name, createdAt, priority } = item;

  function onChange() {}

  return (
    <li className="grid grid-cols-[repeat(2,5rem)_repeat(3,1fr)_5rem] items-center justify-center border-b border-b-gray-200 p-5 text-[1.4rem]">
      <Checkbox onChange={onChange}></Checkbox>
      <p>{id}</p>
      <p>{name}</p>
      <p>{priority}</p>
      <p>{createdAt}</p>
      <div>
        <Button color="danger" variant="solid">
          <HiTrash className="text-white" />
        </Button>
      </div>
    </li>
  );
}
