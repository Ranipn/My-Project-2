import { LightningElement, track, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
//import Email_Field from '@salesforce/schema/CertificateApplication__c.Email__c';
import verifyCertificateApp from '@salesforce/apex/VendorClass.verifyCertificateApp';
import getCertificationApplication from '@salesforce/apex/VendorClass.getCertificateApplications';
import getCertificationApplicationOne from '@salesforce/apex/VendorClass.verifyCertificateAppTwo';
import getCertificationApplicationThree from '@salesforce/apex/VendorClass.verifyCertificateAppThree';
import getCertificationApplicationFour from '@salesforce/apex/VendorClass.verifyCertificateAppFour';
import sendMailtoapplicant from '@salesforce/apex/VendorClass.sendmaaill';
import sendRejectMailtoapplicant from '@salesforce/apex/VendorClass.sendmaaillforreject';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from 'lightning/refresh';

const FIELDS = ['CertificateApplication__c.Applicant_Name__c',
                'CertificateApplication__c.Father_Name__c',
                'CertificateApplication__c.Date_of_Birth__c',
                'CertificateApplication__c.Age__c',
                'CertificateApplication__c.Address__c',
                'CertificateApplication__c.Phone__c',
                'CertificateApplication__c.Email__c',
                'CertificateApplication__c.Certificate_Type__c'
                ];


                const columns = [
                    { label: 'Applicant Name', fieldName: 'Applicant_Name__c', type: 'text' },
                    { label: 'Father Name', fieldName: 'Father_Name__c', type: 'text' },
                    { label: 'DOB', fieldName: 'Date_of_Birth__c', type: 'Date' },
                    { label: 'Age', fieldName: 'Age__c', type: 'Number'},
                    { label: 'Phone', fieldName: 'Phone__c', type: 'phone'},
                    { label: 'Email', fieldName: 'Email__c', type: 'email' },
                    { label: 'Address', fieldName: 'Address__c', type: 'text'},
                   { label: 'Certificate Type', fieldName: 'Certificate_Type__c', type: 'text' },
                ];
                

export default class VendorForm extends LightningElement 
{

    columns=columns;
    
     @api recordId;
      myEmail;
     @track selectedApplicant=[];
     @track emailApplicant=[];
     @track rejectemailApplicant=[];
    certificateApplication;
    @track addres;
     @track promiseResult;
     @track rejectpromiseResult;
    @track newEmail='';
    @track rejectnewEmail='';

    isModalOpen = false;

  /*  @wire(getRecord, {recordId:'$recordId', fields:FIELDS })
    record({error, data})
    {
        if(data)
        {
            this.myEmail=data.fields.Email__c.value;
           
        }
       
        else if(error)
        {
            console.error('error loadingrecord', error);
        }

    }

*/




@api Status
   @track clickRecordId 
    handleReview(event){
         this.clickRecordId= event.target.dataset.id;
     
        getCertificationApplicationOne({certId: this.clickRecordId})
        .then((result)=>{
          
           this.selectedApplicant=result;
            console.log('Data retr111',this.selectedApplicant);
        })
        .catch(error =>{
            
        });

       // this.newEmail=selectedApplicant.Email__c;
      //  console.log('1st Email is', this.newEmail);
        console.log('DATa tetriveing', event.target.dataset.id);
       // console.log('Email is', this.myEmail);

        this.isModalOpen = true;
        
    }
    closeApplicant()
    {
        this.isModalOpen = false;   
    }
    
    
    approveApplicant()
     {
       
      
       
        verifyCertificateApp({certId: this.clickRecordId, Status:'Approved'})
        
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Applicant Certificate has been Approved',
                    variant: 'success'
                })
            );
            this.dispatchEvent(new RefreshEvent());
            //console.log('approve status is', Status);
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
       
        this.closeApplicant();

        
        getCertificationApplicationThree({certId: this.clickRecordId})
        .then((result)=>{
          
           this.emailApplicant=result;
           console.log('new mailll is',  this.emailApplicant )
           this.newEmail=this.emailApplicant.Email__c;
           console.log('new mailll is', this.newEmail )
        })
        .catch(error =>{
            
        });
       
     
        sendMailtoapplicant({address:this.newEmail})
        
        .then(result => { 
           this.promiseResult = result;
            console.log('result of email',result); // The value I want! 
        })
        .catch(error => {
            console.log('error: ', JSON.stringify(error)); 
        });
        
        this.closeApplicant();

    }
 
    rejectApplicant(){
        
        
       
        verifyCertificateApp({certId:this.clickRecordId, Status:'Rejected'})
        .then(()=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Rejected',
                    message: 'Applicant Certificate has been Rejected',
                    variant: 'Error'
                })
            );
            this.dispatchEvent(new RefreshEvent());
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
        
        getCertificationApplicationFour({certId: this.clickRecordId})
        .then((result)=>{
          
           this.rejectemailApplicant=result;
           console.log('reject mailll is',  this.rejectemailApplicant )
           this.rejectnewEmail=this.rejectemailApplicant.Email__c;
           console.log('reject mailll is', this.rejectnewEmail )
        })
        .catch(error =>{
            
        });
       
     
        sendRejectMailtoapplicant({addres:this.rejectnewEmail})
        
        .then(result => { 
           this.rejectpromiseResult = result;
            console.log('result of email',result); // The value I want! 
        })
        .catch(error => {
            console.log('error: ', JSON.stringify(error)); 
        });
        this.closeApplicant();

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
    
    

  /*  get isVerifyDisabled(){
        return this.Status === 'Verified';
    }
    */
}