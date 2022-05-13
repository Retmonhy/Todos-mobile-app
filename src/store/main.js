import { makeAutoObservable, runInAction } from 'mobx';
class MainStore {
  todos = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  addTodo = todo => {
    const newTodo = {
      ...todo,
      id: todo.title,
      done: false,
    };

    console.log('todos =,', this.todos);
    this.todos.push(newTodo);
  };
  removeTodo = id => {
    this.todos.filter(todo => todo.id !== id);
  };
  editTodo = (id, editedTodo) => {
    this.todos.map(todo => {
      if (todo.id === id) {
        // return {
        //     todo,
        //     todo.title = editedTodo.title,
        //     todo.description = editedTodo.description
        // }
      }
      return todo;
    });
  };
}
export default new MainStore();
