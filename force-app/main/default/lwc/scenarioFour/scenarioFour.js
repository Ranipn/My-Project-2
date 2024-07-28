import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/ScenarioFour.ScenarioFourmethod';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';
import AccountNo_Field from '@salesforce/schema/Account.AccountNumber';
import Description_field from '@salesforce/schema/Account.Description';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ScenarioFour extends LightningElement
 {

   @track name=Name_Field;
   @track description=Description_field;
   @track phoneno=Phone_Field;
   @track accountNo=AccountNo_Field;

   rec={
    Name:this.name,
    AccountNumber:this.accountNo,
    Phone:this.phoneno,
    Description:this.description
   }

    FirstNameChange(event)
    {
        this.rec.Name=event.target.value;

    }

    DescriptionChange(event)
    {
        this.rec.Description=event.target.value;

    }

    PhoneNoChange(event)
    {
        this.rec.Phone=event.target.value;

    }

    EmailChange(event)
    {
        this.rec.AccountNumber=event.target.value;

    }


    handleClick()
    {
        createAccount({acc:this.rec})
        .then(result=>{
            this.message=result;
            this.error=undefined;
            if(this.message!==undefined)
            {
                this.rec.Name= ' ';
                this.rec.Phone= ' ';
                this.rec.Description= ' ';
                this.rec.AccountNumber= ' ';
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            }
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
    }
    }