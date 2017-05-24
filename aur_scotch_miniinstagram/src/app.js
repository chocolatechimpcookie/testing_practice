export class App
{
  constructor()
  {
    this.message = 'Welcome to Aurelia';
    this.firstNum = 0;
    this.secondNum = 0;
  }



  get sum ()
  {
    return parseInt(this.firstNum) + parseInt(this.secondNum);
  }

  submit ()
  {
    alert(`Sum of ${this.firstNum} and ${this.secondNum} is ${this.sum}`);

  }
}
