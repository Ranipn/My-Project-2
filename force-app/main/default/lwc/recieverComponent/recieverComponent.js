import { LightningElement, track, wire } from 'lwc';
import {subscribe, MessageContext} from 'lightning/messageService';
import MESSAGE_CHANNEL from '@salesforce/messageChannel/MyMessageChannel__c';

export default class RecieverComponent extends LightningElement {
@track recievedComponent=' ';
subscribtion;
@wire (MessageContext)
messageContext;

connectedCallback()
{
    this.subscribtion=subscribe(this.messageContext,MESSAGE_CHANNEL, (message) => {
        // Handle the received message
        this.handleMessage(message);
    })
}
handleMessage(message) {
    this.receivedMessage = message ? message.message : '';
}

disconnectedCallback() {
    // Unsubscribe from the message channel when the component is destroyed
    unsubscribe(this.subscription);
}

}