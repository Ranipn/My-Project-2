import { LightningElement, track } from 'lwc';

export default class NewCalculator extends LightningElement {
  result;
  @track previousResult=[];

  checktoShowPrevious=false;
  handleChangeOne(event)
    {
        this.numberOne=parseInt(event.target.value);
    }
    handleChangeTwo(event)
    {
        this.numberTwo=parseInt(event.target.value);
    }

    handleAdd()
    {
        this.result=this.numberOne+this.numberTwo;
        this.previousResult.push(this.result);
    }
    handleSub()
    {
        this.result=this.numberOne-this.numberTwo;
        this.previousResult.push(this.result);
    }
    handleMul()
    {
        this.result=this.numberOne*this.numberTwo;
        this.previousResult.push(this.result);
    }
    handleDiv()
    {
        this.result=this.numberOne/this.numberTwo;
        this.previousResult.push(this.result);
    }
    handleClick(event)
    {
       this.checktoShowPrevious=event.target.checked; 
    }

}