import { LightningElement, track } from 'lwc';

export default class ChildToParentCompChild extends LightningElement {
    @track childValue;
    handleChange(event)
    {
    this.childValue=event.target.value;
    

    var selectedEvent = new CustomEvent('inputvaluechange',{detail:this.childValue} );
    this.dispatchEvent(selectedEvent);
}
}