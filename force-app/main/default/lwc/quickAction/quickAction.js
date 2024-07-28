import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';


export default class QuickAction extends LightningElement {
    @api objectApiName;
    @api recordId;

    handleClick()
     {
     this.dispatchEvent(new CloseActionScreenEvent());
     }

    handleSuccess(e) {
        // Close the modal window and display a success toast
        this.dispatchEvent(new CloseActionScreenEvent());
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Account Record Updated!',
                variant: 'success'
            })
        );
   }
}