import { LightningElement } from 'lwc';
import findacc from '@salesforce/apex/WirePropertyExAccount.findaccount';


export default class ImperativeWithPassingParam extends LightningElement 
{
    accounts;
    error;
    searchValue='';
    handleChange(event)
    {
        this.searchValue=event.target.value;

    }

    handleClick()
    {
        findacc({keyword:this.searchValue})
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