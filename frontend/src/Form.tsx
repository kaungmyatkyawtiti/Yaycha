import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import type { InferType } from 'yup'

interface FormProps {
  onAdd: (content, name) => void;
}

const yaychaSchema = yup
  .object({
    content: yup.string().required(),
    name: yup.string().required(),
  })
  .required()

export type YaychaFormData = InferType<typeof yaychaSchema>;

export default function Form({
  onAdd,
}: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<YaychaFormData>({
    resolver: yupResolver(yaychaSchema),
  });

  const onSubmit = (data: YaychaFormData) => {
    console.log(data);
    onAdd(data.content, data.name);
    reset();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 6,
        background: "#def",
        marginBottom: 16,
      }}
    >
      <input
        {...register("content")}
        type="text"
        placeholder="Content"
        style={{
          padding: 10,
        }}
      />
      {
        errors.content &&
        <small style={{ color: "red" }}>{errors.content?.message}</small>
      }
      <input
        {...register("name")}
        type="text"
        placeholder="Name"
        style={{
          padding: 10,
        }}
      />
      {
        errors.name &&
        <small style={{ color: "red" }}>{errors.name?.message}</small>
      }
      <button
        type='submit'
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "0 none",
        }}
      >
        Submit
      </button>
    </form>
  )
}
