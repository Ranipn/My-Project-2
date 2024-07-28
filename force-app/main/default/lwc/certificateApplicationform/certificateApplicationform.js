import { LightningElement, track ,wire, api} from 'lwc';
import submitApplication from '@salesforce/apex/CertificateController.submitApplication';
import verifyCertificateApp from '@salesforce/apex/CertificateController.verifyCertificateApp';
import getCertificationApplication from '@salesforce/apex/CertificateController.getCertificateApplications';
import { refreshApex } from '@salesforce/apex';

export default class CertificateApplicationform extends LightningElement {
    @api applicantName;
    @api email;
    @api dob;
    @api address;
    @api selectCertificateType;
    @api status;
    @track showSuccessMessage = false;

    certificateApplication;

    isModalOpen = false;

    handleReview(){
        this.isModalOpen = true;
    }
    closeApplicant()
    {
        this.isModalOpen = false;   
    }

    approveApplicant(){
        verifyCertificateApp({certId: certAppId, status: 'Verified'})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    Message: 'Applicant Certificate has been Approved',
                    variant: 'success'
                })
            );
            this.closeApplicant();
        })
        .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }

    rejectApplicant(){
        verifyCertificateApp({certId: certAppId, status: 'Not Verified'})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    Message: 'Applicant Certificate has been Rejected',
                    variant: 'Error'
                })
            );
            this.closeApplicant();
        })
        .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }

    certificateOptions = [
        {label: 'Residential Proof', value: 'Residential Proof'},
        {label: 'Personal Information Verification', value : 'Personal Information Verification'},
        {label: 'Character Certificate', value: 'Character Certificate'}
    ];

    @wire(getCertificationApplication)
    wireCertificateApp({error, data})
    {
        if(data)
        {
            this.certificateApplication = data;
        }else if(error)
        {
            console.error('Error retrieving certificate app:', error);
        }
    }
    handleReview(event)
    {
        const certAppId = event.target.dataset.id;

        verifyCertificateApp({certId: certAppId})
        .then(result =>{
            return refreshApex(this.certificateApplication);
        })
        .catch(error =>{
            console.error('Error verifying certificate applicant:',error);
        });
    }

    get isVerifyDisabled(){
        return this.status === 'Verified';
    }
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
            this.showSuccessMessage = true;

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