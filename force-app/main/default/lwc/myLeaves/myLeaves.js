import { LightningElement, wire } from 'lwc';
import getMyLeaves from '@salesforce/apex/LeaveRequestController.getMyLeaves';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Id from '@salesforce/user/Id';
import {refreshApex} from '@salesforce/apex';
 const COLOUMNS=[
    {label:'Request Id', fieldName:'Name', cellAttributes: {class: {fieldName:'cellClass'}}},
    {label:'From Date', fieldName:'From_Date__c', cellAttributes: {class: {fieldName:'cellClass'}}},
    {label:'To Date', fieldName:'To_Date__c', cellAttributes: {class: {fieldName:'cellClass'}}},
    {label:'Reason', fieldName:'Reason__c', cellAttributes: {class: {fieldName:'cellClass'}}},
    {label:'Status', fieldName:'Status__c', cellAttributes: {class: {fieldName:'cellClass'}}},
    {label:'Manager Comment', fieldName:'Manager_Comment__c', cellAttributes: {class: {fieldName:'cellClass'}}},
    {
        type:"button", typeAttributes:
        {
            label:'Edit',
            name:'Edit',
            title:'Edit',
            value:'edit',
            disabled: { fieldName:'isEditDisabled'}
        },cellAttributes: {class: {fieldName:'cellClass'}}
    }

 ];
export default class MyLeaves extends LightningElement
 {
    columns=COLOUMNS;
    myLeaves=[];
    myLeavesWireResult;
    showModalPopUp=false;
    objectApiName='LeaveTracker__c';
    recordId='';
    currentUserId=Id;

@wire (getMyLeaves)
wiredMyLeaves(result)
{
this.myLeavesWireResult=result;
if(result.data)
{
    this.myLeaves=result.data.map(a=>
        ({
            ...a,
            cellClass:a.Status__c=='Approved' ? 'slds-theme_success':a.Status__c=='Rejected'?'slds-theme_warning':'',
            isEditDisabled:a.Status__c!='Pending'
        }));
}
if(result.error)
{
    console.log('error occured', result.error);
}

}
get noRecordsFound()
{
    return this.myLeaves.length==0;
}

newRequestClickHandler()
{
    this.showModalPopUp=true;
    this.recordId='';

}
popUpCloseHandler()
{
    this.showModalPopUp=false;
}
rowActionHandler(event)
{
    this.showModalPopUp=true;
    this.recordId=event.detail.row.Id;
}

successHandler(event)
{
this.showModalPopUp=false;
this.showToast('Data seved Successfullly');
refreshApex(this.myLeavesWireResult);

const refreshEvent=new CustomEvent('refreshleaverequest');
this.dispatchEvent(refreshEvent);

}

submitHandler(event)
{
    event.preventDefault();
    const fields={ ...event.detail.fields};
    fields.Status__c='Pending';
    if(new Date(fields.From_Date__c)>new Date(fields.To_Date__c))
    {
        this.showToast('From Date should be greater than ToDate', 'Error', 'error');
    }
    else if(new Date()>new Date(fields.From_Date__c))
    {
        this.showToast('From date should be future date', 'Error', 'error');  

    }
    else{
        this.refs.leaveRequestForm.submit(fields);
    }
}

showToast(message, title='Success', variant='success')
{
    const event=new ShowToastEvent(
        {
            title,
            message,
            variant
        }
    );
    this.dispatchEvent(event);
}
}