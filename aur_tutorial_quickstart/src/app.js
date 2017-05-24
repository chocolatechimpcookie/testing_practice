import {Todo} from './todo';

export class App
{
  constructor()
  {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
  }


  addTodo()
  {
    if(this.todoDescription)
    {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
    }
  }
  // this.todos is the array made in the above
  // todo is a constructor string
  //**it pushes whatever is in todoDescription
      // but how is it getting the description from todo if there's
      // no passing to the constructor
  //then it clears it

  removeTodo(todo)
  {
    let index = this.todos.indexOf(todo);
    if (index!== -1)
    {
      this.todos.splice(index, 1);
    }
  }



}
