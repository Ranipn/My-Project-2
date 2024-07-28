import { LightningElement, wire } from 'lwc';
import accListOne from '@salesforce/apex/WirePropertyExAccount.accList'

export default class WiredWithFunction extends LightningElement {
 account;
 error;

    @wire (accListOne)
    accountList({data, error})
    {
        if(data)
        {
            this.account=data;
            this.error=undefined;
        }
        else if(error)
        {
            this.error=error;
            this.account=undefined;
        }
    }
}