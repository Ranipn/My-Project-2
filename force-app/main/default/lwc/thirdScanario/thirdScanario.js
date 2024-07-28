import { LightningElement, track, wire } from 'lwc';
import { getCurrentUser } from 'lightning/uiRecordApi';

export default class ThirdScanario extends LightningElement {
    @track currentUser;
 
@wire (getCurrentUser)
 currUser({data, error})
 {
 if(data)
 {
    this.currentUser=data.fields.Name.value;
 }
else if(error)
{
    console.error('error is', error);
}
}
}