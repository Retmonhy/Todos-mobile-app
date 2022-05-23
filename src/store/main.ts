import { makeAutoObservable, runInAction } from 'mobx';
import { Task, Todo } from './interfaces';

function TodoConstructor(title: string, color: string): object {
  const todo: Todo = this;
  todo.title = title;
  todo.color = color;
  todo.id = Date.now().toString();
  todo.tasks = [];
  todo.pinned = false;
  return todo;
}
function TaskConstructor(title: string) {
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
    runInAction(() =>
      this.todos.push(new (TodoConstructor as any)(title, color)),
    );

  removeTodo = (id: string) => {
    this.todos.filter((todo: Todo) => todo.id !== id);
  };
  editTodo = (todo: Todo, editedTodo: Todo) => {
    console.log('\n');
    console.log('todos = ', this.todos);

    todo.title = editedTodo.title;
    console.log('todos after change= ', this.todos);
    console.log('\n');
  };
  onCheckboxPress = (task: Task) => (task.done = !task.done);
  addTask = (todo: Todo, taskTitle: string) =>
    todo.tasks.push(new (TaskConstructor as any)(taskTitle));
}

export default new MainStore();
