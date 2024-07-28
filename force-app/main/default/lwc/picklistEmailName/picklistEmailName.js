import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";


export default class PicklistEmailName extends LightningElement {
@track selectInputType;
@track handleValue;

@track nameValue=false;
@track emailValue=false;

formTypeOptions = [
    { label: 'Select Form Type', value: '' },
    { label: 'Name', value: 'name' },
    { label: 'Email', value: 'email' },
    // Add options for other fields
];

handleFormTypeChange(event)
{
    this.selectedFormType=event.target.value;
     this.nameValue= this.selectedFormType==='name';
     this.emailValue= this.selectedFormType ==='email';

}

handleClick()
{
    
        const evt = new ShowToastEvent({
          title: 'Rec creation',
          message: 'Rec creation Successfully',
          variant: 'success'
        });
        this.dispatchEvent(evt);
     
}


handleChange1(event)
{
this.handleValue=event.target.value;
}

handleClick1()
{
    if(this.handleValue)
    {
    this.successRecord();
    }

    else{
        this.failureRecord();
    }
}

successRecord()
{
    
        const evt = new ShowToastEvent({
          title: 'Success',
          message: 'Rec created Successfully',
          variant: 'success'
        });
        this.dispatchEvent(evt);
     
}


failureRecord()
{
    
        const evt = new ShowToastEvent({
          title: 'Error',
          message: 'Enter the valid name here',
          variant: 'error'
        });
        this.dispatchEvent(evt);
     
}
}