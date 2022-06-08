/* eslint-disable consistent-this */
import { makeAutoObservable, runInAction } from 'mobx';
import { Task, Todo } from './interfaces';

function TodoConstructor(this: any, title: string, color: string): Todo {
  const todo = this;
  todo.title = title;
  todo.color = color;
  todo.id = Date.now().toString();
  todo.tasks = [];
  todo.pinned = false;
  return todo;
}
function TaskConstructor(this: any, title: string) {
  const task = this;
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
    makeAutoObservable(this);
  }
  addTodo = (title: string, color: string) =>
    runInAction(() => {
      this.todos.push(new (TodoConstructor as any)(title, color));
    });

  removeTodo = (id: string) => {
    this.todos.filter((todo: Todo) => todo.id !== id);
  };
  editTodo = (todo: Todo, title: string) => {
    todo.title = title;
  };

  onCheckboxPress = (task: Task) => (task.done = !task.done);

  addTask = (todo: Todo, taskTitle: string) => {
    todo.tasks.push(new (TaskConstructor as any)(taskTitle));
  };
}

export default new MainStore();
