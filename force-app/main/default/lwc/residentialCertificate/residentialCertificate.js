import { LightningElement, track } from 'lwc';

export default class ResidentialCertificate extends LightningElement {
    @track name;
    @track address;
    @track dateofResidence;
    @track  certificate;


    nameHandle(event)
    {
        this.name=event.target.value;
    }


    addressHandle(event)
    {
        this.address=event.target.value; 
    }
}