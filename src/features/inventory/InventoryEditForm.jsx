import { useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useUpdateProduct } from "./useUpdateProduct";
import Spinner from "../../components/Spinner";
import { Button } from "antd";

function InventoryEditForm({ product, onClose, isOpen }) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: product,
  });

  const { isUpdating, updateProduct } = useUpdateProduct();

  const errors = formState;

  function onSubmit(data) {
    updateProduct({ productId: data.id, updateData: data });
    console.log(data, "submit");
  }

  function onError() {
    throw new Error("Can't edit data");
  }

  if (isUpdating) return <Spinner />;

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"Name"} error={errors?.name?.message}>
        <Input {...register("name")} />
      </FormRow>
      <FormRow label={"Model"} error={errors?.model?.message}>
        <Input {...register("model")} />
      </FormRow>
      <FormRow label={"Category"} error={errors?.category?.message}>
        <Input {...register("category")} />
      </FormRow>
      <FormRow label={"Price"} error={errors?.unit_price?.message}>
        <Input {...register("unit_price")} />
      </FormRow>
      <FormRow label={"Quantity"} error={errors?.stock_quantity?.message}>
        <Input {...register("stock_quantity")} />
      </FormRow>
      <FormRow label={"Image"} error={errors?.image?.message}>
        <Input type="file" {...register("image")} />
      </FormRow>
      <div className="ml-[2rem] flex w-full justify-center gap-5">
        <Button size="small" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose} size="small" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default InventoryEditForm;
