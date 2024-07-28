import { LightningElement,api } from 'lwc';

export default class AccountButton extends LightningElement {
    isButtonVisible=true
     @api objectApiName;
     @api recordId;
    ShowDetails=false;
    handleClick()
    {
        this.ShowDetails=true;
        this.isButtonVisible=false;
        //this.isButtonVisible=true;
    }

   

   
    popUpCloseHandler()
    
        {
            this.ShowDetails=false;
            this.isButtonVisible =true;
            console.log('GIt changing');
        }
    

}