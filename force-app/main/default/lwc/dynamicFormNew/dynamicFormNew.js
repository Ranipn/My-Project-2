import { LightningElement, wire, track } from 'lwc';
import accountCreating from '@salesforce/apex/AccountDataInsertingFromDynamicForm.AccountInserting';
import { ShowToastEvent } from "lightning/platformShowToastEvent";


export default class DynamicFormNew extends LightningElement
 {
@track name;
@track phone;
@track accNumber;



accNameHandleChane(event)
{
    this.name=event.target.value;
}

accPhoneHandleChane(event)
{
    this.phone=event.target.value;
}

accNumberHandleChane(event)
{
    this.accNumber=event.target.value;
}

handleSubmitClick()
{
    accountCreating({
        name:this.name,
        phoneNo:this.phone,
        accNum:this.accNumber
    })

    .then(result=>
        {
            this.resetForms();
            this.dispatchEvent(
                new ShowToastEvent(
                    {
                        title:'Success',
                        message:'Record Created Successfully..!!',
                        variant: 'success'
                    }
                )
            )
        }
    )
    .catch(error=>{
        
        this.dispatchEvent(
            new ShowToastEvent(
                {
                    title:'Error',
                    Message:error.body.message,
                    variant: 'error'
                }
            )
        )
    })
}  
resetForms()
{
    this.name='';
   
    this.phone='';
    this.accNumber='';

    

}





}