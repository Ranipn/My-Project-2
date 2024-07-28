import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import ProfileName from '@salesforce/schema/User.Profile.Name';

export default class ConditionalRendering2 extends LightningElement {
    showText=false;
    
    handleChange(event)
    {
        this.showText=event.target.checked;
    }

    userId = Id;
isSystemAdministrator = false;

    @wire(getRecord, { recordId: Id, fields: [ProfileName] })
    userDetails({ error, data }) {
        if (error) {
            this.error = error;
        } else if (data) {
            if (data.fields.Profile.value != null && data.fields.Profile.value.fields.Name.value=='System Administrator') {
                this.isSystemAdministrator = true;
            }
        }
    }

    result=false;
    //Timer Ex
    connectedCallback()
    {
        setTimeout(()=>
        {
            this.result=true
        },3000);
    }
 

    Name="Rani PN"  ; 
    Designation="Software Engineer";s
    showDetail=false;
    actionButtonLabel1 = 'Show Details';
    handleClick()
    {
        this.showDetail=!this.showDetail;
        this.actionButtonLabel1=this.showDetail?'Hide Details':'Show Details';
    }
    showText=false;
    actionButtonLabel='Hide1';
    clickHandle()
    {
        this.showText=!this.showText;
        this.actionButtonLabel=this.showText ? 'Show1': 'Hide1';
    }
 
}