import { LightningElement, wire } from 'lwc';
import accountRecords from '@salesforce/apex/AccountRecordsConditionalRendering.accRec';

export default class ConditionalRenderingNewOne extends LightningElement {
    conditionTrue=true;
    conditionfalse=false;
    conditionTrueOne=false;
    conditionFalseOne=true;

    flipTheSwitch()
    {
        this.conditionTrueOne=true; 
    }

    handleChane(event)
    {
     this.conditionFalseOne=event.target.checked;
    }

@wire (accountRecords)
accRecords;

}