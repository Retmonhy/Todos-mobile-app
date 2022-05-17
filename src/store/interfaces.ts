export interface Subtask {
  title: string;
  id: string;
  done: boolean;
}
export interface Task {
  title: string;
  done: boolean;
  id: string;
  note: string;
  subtasks: Subtask[];
}
export interface Todo {
  title: string;
  id: string;
  color: string;
  pinned: boolean;
  tasks: Task[];
}
