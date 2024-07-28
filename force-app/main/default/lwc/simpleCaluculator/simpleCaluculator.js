import { LightningElement, track } from 'lwc';

export default class SimpleCaluculator extends LightningElement {
num1;
num2;
@track result;


    handleFirstNumber(event)
    {
          this.num1=event.target.value;
    }
    handleSecondNumber(event)
    {
        this.num2=event.target.value;
    }
    showSum()
    {
        this.result=parseInt(this.num1+this.num2); 
    }
    showDifference()
    {
       this.result=parseInt(this.num1-this.num2);
    }
    showMultiplication()
    {
        this.result=parseInt(this.num1*this.num2);
    }
    showDivision()
    {
        this.result=parseInt(this.num1/this.num2);
    }
}