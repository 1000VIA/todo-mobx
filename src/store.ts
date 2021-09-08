import axios from "axios";
import { makeAutoObservable } from "mobx";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));


const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Mobx implementation
class Store{
  todos: Todo[] = []
  newTodo: string = ""

  constructor(){
    makeAutoObservable(this)
  }

  load(url: string){
    axios.get(url)
      .then((data) => (store.todos = data.data))
  }

  updateTodo(todos: Todo[], id:number, text:string){
    this.todos = updateTodo(todos, id, text)

  }

  addTodo(){
    this.todos = addTodo(this.todos, this.newTodo)
    this.newTodo = ""
  }

  removeTodo(id: number){
    this.todos = removeTodo(this.todos, id)
  }
}

const store = new Store()
export default store