import { LightningElement, track ,wire, api} from 'lwc';
import submitApplication from '@salesforce/apex/CertificateController.submitApplication';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CreateApp extends LightningElement {
    @api applicantName;
    @api email;
    @api dob;
    @api address;
    @api selectCertificateType;

    certificateOptions = [
        {label: 'Residential Proof', value: 'Residential Proof'},
        {label: 'Personal Information Verification', value : 'Personal Information Verification'},
        {label: 'Character Certificate', value: 'Character Certificate'}
    ];

    handleApplicantNameChange(event)
    {
        this.applicantName = event.target.value;
    }

    handleDobChange(event)
    {
        this.dob = event.target.value;
    }

    handleEmailChange(event)
    {
        this.email = event.target.value;
    }

    handleAddressChange(event)
    {
        this.address = event.target.value;
    }

    handleCertificateTypeChange(event)
    {
        this.selectCertificateType = event.detail.value;
    }

    submitApplicationBtn(){

        //call apex method to submit applicatin
        submitApplication({
            applicantName: this.applicantName,
            dob: this.dob,
            email: this.email,
            address: this.address,
            certificateType: this.selectCertificateType
        })
        .then(result =>{
            const event = new ShowToastEvent({
                title: 'Success',
                message: 'Application created successfully',
                variant: 'success',
            });
            this.dispatchEvent(event);

            this.resetFormFields();
        })
        .catch(error =>{
            console.log('Error submitting Application:', error);
        });
    }

    resetFormFields()
    {
        this.applicantName = '';
        this.dob = '';
        this.address = '';
        this.email = '';
        this.selectCertificateType = '';
    }

}