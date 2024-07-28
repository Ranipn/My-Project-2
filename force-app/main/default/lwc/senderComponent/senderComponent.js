import { LightningElement, track, wire} from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';
export default class SenderComponent extends LightningElement {

    @track message = '';
   
    handleChange(event) {
        this.message = event.target.value;
    }
 
    sendMessage() {
        // Publish the message to the Lightning Message Service
        const payload = { message: this.message };
        publish(this.messageContext, MESSAGE_CHANNEL, payload);
    }
 
    // Get the message context for the Lightning Message Service
   // messageContext = MessageContext;
   @wire (MessageContext)
   messageContext;

}