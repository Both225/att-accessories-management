import { Button } from "antd";
import FormRow from "../components/FormRow";
import Input from "../components/Input";
import Title from "../components/Title";

function AddAccessories() {
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Add accessory</Title>
        <form className="h-full w-full space-y-6">
          <FormRow label={"Name"} id={"name"} error={""}>
            <Input id="name" />
          </FormRow>
          <FormRow label={"Model"} id={"model"} error={""}>
            <Input id="name" />
          </FormRow>
          <FormRow label={"Category"} id={"category"} error={""}>
            <Input id="name" />
          </FormRow>
          <FormRow label={"Price"} id={"price"} error={""}>
            <Input id="name" />
          </FormRow>
          <FormRow label={"Amount"} id={"amount"} error={""}>
            <Input id="name" />
          </FormRow>
          <FormRow label={"Image"} id={"image"} error={""}>
            <Input id="name" />
          </FormRow>
          <div className="ml-76 space-x-4">
            <Button
              variant="solid"
              color="danger"
              style={{ fontSize: "12px", fontWeight: "semibold" }}
            >
              Clear
            </Button>
            <Button
              variant="solid"
              className="bg-primary"
              style={{ fontSize: "12px", fontWeight: "semibold" }}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAccessories;
