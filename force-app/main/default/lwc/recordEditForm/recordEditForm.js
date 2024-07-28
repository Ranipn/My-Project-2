import { LightningElement, api } from 'lwc';

export default class RecordEditForm extends LightningElement {
    @api objectApiName;
    @api recordId;
}