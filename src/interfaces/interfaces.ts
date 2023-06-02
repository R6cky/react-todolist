export type tTasks = {
  title: string;
  description: string;
  category: string;
};

export interface iTasksWithId extends tTasks {
  id: string;
}
