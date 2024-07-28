import { LightningElement } from 'lwc';

export default class BasicPractice extends LightningElement {

    showDetails=false;
    handleChange(event)
    {
        this.showDetails=event.target.checked;
    }
    showButton=true;
    handleClick()
    {
        this.showButton=false;
    }
}