import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class FirstScenario extends LightningElement 
{

    @track accountName = '';
    @track industry = '';
    // Add more custom fields here
 
    @track error = '';
 
    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }
 
    async handleSave() {
        // Validate input data before saving
        if (!this.accountName || !this.industry) {
            this.error = 'Account Name and Industry are required fields.';
            return;
        }
 
        const fields = {};
        fields.Name = this.accountName;
        fields.Industry = this.industry;
        // Add more custom field assignments here
 
        try {
            const record = await createRecord({ apiName: ACCOUNT_OBJECT.objectApiName, fields });
            this.resetForm();
            // Optionally, you can handle the success message or navigate to the newly created account record page.
        } catch (error) {
            this.error = 'Error creating account: ' + error.body.message;
        }
    }
 
    resetForm() {
        // Clear form fields and error message
        this.accountName = '';
        this.industry = '';
        this.error = '';
    }
}