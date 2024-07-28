import { LightningElement } from 'lwc';

export default class ChildCompToParentPp11 extends LightningElement {
    value1='';
    handleEvent(event)
    {
    this.value1=event.detail;
    }
}