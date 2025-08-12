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
  const { mode, setMode } = useContext(ThemedContext);

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
        gap: 3,
        padding: 10,
        borderRadius: 6,
        background: mode === "dark" ? "#555" : "#def", marginBottom: 16,
      }}
    >
      {/* <Controller */}
      {/*   control={control} */}
      {/*   name="content" */}
      {/*   render={({ field }) => ( */}
      {/*     <input */}
      {/*       {...field} */}
      {/*       type="text" */}
      {/*       placeholder="Content" */}
      {/*       style={{ */}
      {/*         padding: 10, */}
      {/*       }} */}
      {/*     /> */}
      {/*   )} */}
      {/* /> */}
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
      {/*   name="name" */}
      {/*   render={({ field }) => ( */}
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
