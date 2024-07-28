import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHanlerLooping.accountHandleMethod';


const COLUMN=[
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name'},
    {label:'Phone', fieldName:'Phone'},
    {label:'Type', fieldName:'Type'},
    {label:'Amount', fieldName:'Amount__c', cellAttributes:{
        class:{fieldName:'amountColor'}}}
   ];

export default class TableFormat extends LightningElement
{

    @track accData;
    @track errorAccData;     
@track columns=COLUMN;
  
  
    

    @wire(getAccountList) 
 
    dataTableAcc({data, error}){
         if(data){
           this.accData = data.map(item=>
            {
            let amountColor = item.Amount__c <1000 ? "slds-text-color_error":"slds-text-color_success";
            return {...item, 
                "amountColor":amountColor
                
               
        } })}
        else if(error){
          this.errorAccData = error;  
        }
 
    }
 }