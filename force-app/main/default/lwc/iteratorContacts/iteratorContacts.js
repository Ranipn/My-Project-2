import { LightningElement, wire } from 'lwc';
import getContactsRecord from '@salesforce/apex/ContactHandlerIterator.contactMethod';

export default class IteratorContacts extends LightningElement
 {
    @wire (getContactsRecord)
    contactsList;
    
}