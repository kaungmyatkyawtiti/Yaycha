import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import type { InferType } from 'yup'
import { useContext } from 'react';
import ThemedContext from './ThemedContext';
import { log } from './utils/logger';

interface FormProps {
  onAdd: (content: string, name: string) => void;
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
  const { mode } = useContext(ThemedContext);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<YaychaFormData>({
    defaultValues: {
      content: '',
      name: '',
    },
    resolver: yupResolver(yaychaSchema),
  });

  const onSubmit = (data: YaychaFormData) => {
    log(data);
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
        margin: 15,
        gap: 3,
        padding: 10,
        borderRadius: 6,
        background: mode === "dark" ? "#555" : "#def", marginBottom: 16,
      }}
    >
      <div style={{
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        paddingBottom: 8,
        borderBottom: mode === "dark"
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(0,0,0,0.1)"
      }}>
        Add New Content
      </div>
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
        <small style={{ color: "red" }}>
          {errors.content?.message}
        </small>
      }
      {/* <Controller */}
      {/*   control={control} */}
      {/*   name="name" */} {/*   render={({ field }) => ( */}
      {/*     <input */}
      {/*       {...field} */}
      {/*       type="text" */}
      {/*       placeholder="Name" */}
      {/*       style={{ */}
      {/*         padding: 10, */}
      {/*       }} */}
      {/*     /> */}
      {/*   )} */}
      {/* /> */}
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
        <small style={{ color: "red" }}>
          {errors.name?.message}
        </small>
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
