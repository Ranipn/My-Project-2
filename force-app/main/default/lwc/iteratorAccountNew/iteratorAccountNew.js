import { LightningElement, wire } from 'lwc';
import accountRec from '@salesforce/apex/AccountRecordsConditionalRendering.accRec';

export default class IteratorAccountNew extends LightningElement {
    @wire (accountRec) accRecords;

}