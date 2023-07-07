import { z } from "zod";

export type tTasks = {
  title: string;
  content: string;
  category: string;
  isDone: boolean;
};

export interface iTasksWithId extends tTasks {
  id: string;
}

export interface iTaskProps {
  task: iTasksWithId;
  removeTaskList: any;
  setIsModalViewActive: boolean;
  isModalViewActive: boolean;
  viewTask: any;
  taskData: iTasksWithId;
}
export interface iTaskListProps {
  taskList: Array<iTasksWithId>;
  removeTaskList: any;
  setIsModalViewActive: boolean;
  isModalViewActive: boolean;
  viewTask: any;
  taskData: iTasksWithId;
}

export const createTaskSchema = z.object({
  title: z
    .string()
    .nonempty("Título obrigatório")
    .min(5, "Valor mínimo permitido: 5 caracterea")
    .max(20, "Valor máximo permitido: 20 caracteters"),
  content: z
    .string()
    .nonempty("Descrição obrigatória")
    .min(8, "Valor mínimo permitido: 8 caracterea")
    .max(50, "Valor máximo permitido: 50 caracteters"),
  category: z.string().nonempty("Categoria obrigatória"),
});

export type createTaskFormData = z.infer<typeof createTaskSchema>;
