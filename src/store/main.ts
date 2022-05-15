import { makeAutoObservable, runInAction } from 'mobx';
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
function TodoConstructor(title: string, color: string): object {
  const todo: Todo = this;
  todo.title = title;
  todo.color = color;
  todo.id = Date.now().toString();
  todo.tasks = [];
  todo.pinned = false;
  return todo;
}
function TaskConstructor(title: string): object {
  const task: Task = this;
  task.title = title;
  task.id = Date.now().toString();
  task.done = false;
  task.note = '';
  task.subtasks = [];
  return task;
}

class MainStore {
  todos: Todo[] = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  addTodo = (title: string, color: string) => {
    // const newTodo: Todo = {
    //   title: title,
    //   id: Date.now().toString(),
    //   tasks: [],
    //   pinned: false,
    //   color: color || 'transparent',
    // };
    runInAction(() => this.todos.push(new TodoConstructor(title, color)));
  };
  removeTodo = (id: string) => {
    this.todos.filter((todo: Todo) => todo.id !== id);
  };
  editTodo = (id: String, editedTodo: Todo) => {
    this.todos.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: editedTodo.title,
          color: editedTodo.color,
          pinned: editedTodo.pinned,
        };
      }
      return todo;
    });
  };
  onCheckboxPress = (task: Task) => (task.done = !task.done);
  addTask = (todo: Todo, taskTitle: string) => {
    // const addedTask = {
    //   title: taskTitle,
    //   id: Date.now().toString(),
    //   done: false,
    //   note: '',
    //   subtasks: [],
    // };
    todo.tasks.push(new TaskConstructor(taskTitle));
  };
}
export default new MainStore();
