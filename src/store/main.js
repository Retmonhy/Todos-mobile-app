import { makeAutoObservable, runInAction } from 'mobx';
class MainStore {
  todos;
  constructor() {
    makeAutoObservable(this, {
      todos: [],
    });
  }
  addTodo = todo => {
    this.todos.push(todo);
  };
  removeTodo = id => {
    this.todos.filter(todo => todo.id !== id);
  };
  editTodo = (id, editedTodo) => {
    this.todos.map(todo => {
      if (todo.id === id) {
        //   return {
        //       ...todo,
        //       todo.title = editedTodo.title,
        //       todo.description = editedTodo.description
        //   }
      }
      return todo;
    });
  };
}
export default new MainStore();
