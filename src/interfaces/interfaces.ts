import { z } from "zod";

export type tTasks = {
  title: string;
  description: string;
  category: string;
};

export interface iTasksWithId extends tTasks {
  id: string;
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
