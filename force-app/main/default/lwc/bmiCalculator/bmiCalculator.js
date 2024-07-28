import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    result;
    height;
    weight;


    handleWeight(event)
    {
        this.height=parseFloat(event.target.value);
    }
 
    handleheight(event)
    {
        this.weight=parseFloat(event.target.value);
    }

    handleClick()
    {
        this.result=this.weight/(this.height*this.height);
    }
    
}