import { LightningElement, wire } from 'lwc';
import { getCurrentUser } from 'lightning/uiRecordApi';

export default class CurrentUserName extends LightningElement {
    @wire(getCurrentUser)
    currentUser({ error, data }) {
        if (data) {
            // If data is available, update the userName property with the user's name
            this.userName = data.fields.Name.value;
        } else if (error) {
            // Handle error if any
            console.error('Error fetching current user information:', error);
        }
    }
}