import { LightningElement, track, api } from 'lwc';
import submitApplication from '@salesforce/apex/CharacterCerificateHandler.submitApplication';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SecondCertificate extends LightningElement

{
    @track applicantName;
    @track email;
    @track dob;
    @track address;
    @track selectCertificateType;
    @track fatherName;
    @track age;
    @track phone;
    @track emailError = '';
    @track myImage;
    @track showSuccessMessage = false;
 

   

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUploadFinished(event) {
        // Get the list of uploaded files
        this.myImage = event.detail.files;
        alert('No. of files uploaded : ' + myImage.length);
    }



    certificateOptions = [
        {label: 'Residential Proof Certificate', value: 'Residential Proof'},
        {label: 'Personal Information Verification', value : 'Personal Information Verification'},
        {label: 'Character Certificate', value: 'Character Certificate'}
    ];
 
    handleApplicantNameChange(event)
    {
        this.applicantName = event.target.value;
    }

    handleFatherNameChange(event)
    {
        this.fatherName=event.target.value;
    }

    handleageChange(event)
    {
        this.age=event.target.value;
    }

    handlePhoneChange(event)
    {
        this.phone=event.target.value;
    }
 
    handleDobChange(event)
    {
        this.dob = event.target.value;
    }
 
    handleEmailChange(event)
    {
        this.email = event.target.value;
    }
 
   /* if (this.email.isEmpty) {
        this.emailError = 'Email is required.';
    }
*/
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
            certificateType: this.selectCertificateType,
            myImage:this.myImage,
            phone:this.phone,
            age:this.age,
            fatherName:this.fatherName

        })
        .then(result =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record created successfully',
                    variant: 'success',
                }),
            );
 
            this.resetFormFields();
        })
        .catch(error =>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
 
    resetFormFields()
    {
        this.applicantName = '';
        this.dob = '';
        this.address = '';
        this.email = '';
        this.selectCertificateType = '';
        this.myImage='';
        this.fatherName='';
        this.phone='';
           this.age='';

    }
}