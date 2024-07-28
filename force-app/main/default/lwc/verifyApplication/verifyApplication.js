import { LightningElement,track ,wire, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import verifyCertificateApp from '@salesforce/apex/CertificateController.verifyCertificateApp';
import getCertificationApplication from '@salesforce/apex/CertificateController.getCertificateApplications';
import deleteApplicant from '@salesforce/apex/CertificateController.deleteRecord';
import getCertificateApplicationsDetails from '@salesforce/apex/CertificateController.getCertificateApplicationsDetails';

export default class VerifyApplication extends LightningElement {

    @api recordId;
    @track certAppId;
    selectedApplicant ={};
    modalApplicant ={};
    isModalOpen = false;
    certificateApplication;
    error;


    // @wire(btndisable)
    // wiredStatus({error , data})
    // {
    //     if(data)
    //     {
    //         this.statusVerify = data;
    //         this.isReviewDisableBtn = this.statusVerify === 'Verified';
    //     }
    //     else if(error)
    //     {
    //         console.error('Error fetching status', error);
    //     }
    // }

    handleDetele()
    {
        if(confirm('Are you sure want to delete?'))
        {
            deleteApplicant({recId: this.certAppId})
            .then(()=>{
                this.showToast('Deleted','Application Deleted succesfully', 'error');
            })
            .catch(error =>{
                this.showToast('Warning','Error in deleting applicant', 'warning');
            })
        }
    }

    closeApplicant()
    {
        this.isModalOpen = false;   
    }

    approveApplicant(){
        verifyCertificateApp({certId: this.certAppId, status: 'Verified'})
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
            this.closeApplicant();
        });
    }

    rejectApplicant(){
        verifyCertificateApp({certId: this.certAppId, status: 'Not Verified'})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Rejected',
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

    showToast(title,message,variant)
    {
        const evnt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evnt);
    }
    
    handleReview(event)
    {
        this.certAppId = event.target.dataset.id;
        getCertificateApplicationsDetails({AppId: this.certAppId})
        .then(result =>{
            this.modalApplicant = result;
        })
        .catch(error =>{
            console.error('Error verifying certificate applicant:',error);
        });
        this.isModalOpen = true;
    }


}