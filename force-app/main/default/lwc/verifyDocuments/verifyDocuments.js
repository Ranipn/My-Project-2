import { LightningElement, track } from 'lwc';
import verifyDocuments from '@salesforce/apex/DocumentVerificationController.verifyDocuments';

export default class VerifyDocuments extends LightningElement 
{
    @track documentName;
    @track documentType;
    @track verificationStatus;
 
    handleDocumentNameChange(event) {
        this.documentName = event.target.value;
    }
 
    handleDocumentTypeChange(event) {
        this.documentType = event.target.value;
    }
 
    verifyDocuments() {
        // Call Apex method to verify documents
        verifyDocuments({
            documentName: this.documentName,
            documentType: this.documentType
        })
        .then(result => {
            // Update verification status based on result
            this.verificationStatus = result;
        })
        .catch(error => {
            console.error('Error verifying documents:', error);
        });
    }
}