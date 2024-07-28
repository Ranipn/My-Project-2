import { LightningElement, wire } from 'lwc';
import accList from '@salesforce/apex/WirePropertyExAccount.accList'

export default class WirePropertyExample extends LightningElement {

    @wire(accList) account;
}