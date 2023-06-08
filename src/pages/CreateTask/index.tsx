// import { useState } from "react";
import { CreateTaskStyled } from "./style";
// import { tTasks } from "../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { createTaskSchema } from "../../interfaces/interfaces";
import { createTaskFormData } from "../../interfaces/interfaces";

export const CreateTask = ({ openTaskModal }: any) => {
  // const [dataTask, setDataTask] = useState({
  //   title: "",
  //   description: "",
  //   category: "",
  // } as tTasks);

  // const submit = (e: any): void => {
  //   e.preventDefault();
  //   addTasks(dataTask);
  //   openTaskModal();
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTaskFormData>({
    resolver: zodResolver(createTaskSchema),
  });

  const createTask = (data: any) => {
    console.log(data);
  };

  return (
    <CreateTaskStyled>
      <form action="" onSubmit={handleSubmit(createTask)}>
        <div className="close-btn" onClick={openTaskModal}>
          <span>X</span>
        </div>
        <input
          type="text"
          placeholder="Título da tarefa"
          {...register("title")}
        />
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
        <textarea
          id=""
          placeholder="Descrição da tarefa"
          {...register("content")}
        ></textarea>
        {errors.content && (
          <span className="error-message">{errors.content.message}</span>
        )}
        <select {...register("category")} defaultValue="Lazer" name="" id="">
          {errors.category && (
            <span className="error-message">{errors.category.message}</span>
          )}
          <option value="Lazer">Lazer</option>
          <option value="Produtividade">Produtividade</option>
          <option value="Alimentacao">Alimentacao</option>
          <option value="Financas">Financas</option>
        </select>
        <button className="button-create-task">Criar</button>
        <input className="reset-button" type="reset" />
      </form>
    </CreateTaskStyled>
  );
};
