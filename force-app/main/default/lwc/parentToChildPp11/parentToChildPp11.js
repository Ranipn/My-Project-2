import { LightningElement } from 'lwc';

export default class ParentToChildPp11 extends LightningElement {

    value="I am parent to child component";
    value1=10;
    handleChange(event)
    {
        this.value1=event.target.value;
    }
}