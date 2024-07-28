import { LightningElement } from 'lwc';
import accListTwo from '@salesforce/apex/WirePropertyExAccount.accList';

export default class ImperativeMethod extends LightningElement {
    accounts;
    error;


    handleClick()
    {
        accListTwo()
        .then((result)=>
        {
        this.accounts=result;
        this.error=undefined;
    }) 
    .catch((error)=>
    {
        this.error=error;
        this.accounts=undefined;
    })
}


}