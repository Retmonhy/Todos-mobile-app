import { makeAutoObservable, observable, runInAction } from 'mobx';
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
    makeAutoObservable(this, false, { deep: true });
  }
  addTodo = (title: string, color: string) =>
    runInAction(() => this.todos.push(new TodoConstructor(title, color)));

  removeTodo = (id: string) => {
    this.todos.filter((todo: Todo) => todo.id !== id);
  };
  editTodo = (todo: Todo, editedTodo: Todo) => {
    console.log('\n');
    console.log('todos = ', this.todos);

    todo.title = editedTodo.title;
    console.log('todos after change= ', this.todos);
    console.log('\n');

    // this.todos.map((todo: Todo) => {
    //   if (todo.id === id) {
    //     return Object.assign(todo, {
    //       title: editedTodo.title || todo.title,
    //       color: editedTodo.color || todo.color,
    //       pinned: editedTodo.pinned || todo.pinned,
    //     });
    //   }
    // return todo;
    // });
  };
  getTodos() {
    return this.todos;
  }
  onCheckboxPress = (task: Task) => (task.done = !task.done);
  addTask = (todo: Todo, taskTitle: string) =>
    todo.tasks.push(new TaskConstructor(taskTitle));
}

export default new MainStore();
