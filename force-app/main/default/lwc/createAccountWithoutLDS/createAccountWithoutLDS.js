import { LightningElement, track } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Description_field from '@salesforce/schema/Account.Description';
import createAccount from '@salesforce/apex/CreateAccountWithOutLDS.createdAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateAccountWithoutLDS extends LightningElement 
{
@track name=Name_Field;
@track phone=Phone_Field;
@track description=Description_field;

rec={
    Name : this.name,
    Phone : this.phone,
    Description : this.description

}
handleName(event)
{
    this.rec.Name=event.target.value;
}
handlePhone(event)
{
    this.rec.Phone=event.target.value;

}
handleDescription(event)
{
    this.rec.Description=event.target.value;
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