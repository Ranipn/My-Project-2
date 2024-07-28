import { LightningElement, track } from 'lwc';

export default class ChildToParentCompParent extends LightningElement {
    @track inputValueChange;
    handleinputValueChange(event)
    {
        this.inputValueChange=event.detail;
    }
}