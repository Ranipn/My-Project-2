import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHanlerLooping.accountHandleMethod';
export default class ForEachExAccountLoopong extends LightningElement
 {

    @wire(getAccountList)  accountList;
    
   }