import { LightningElement } from 'lwc';

export default class ChTpPaParentComp extends LightningElement {

    valueFromChild(event)
    {
        this.gettingValueFromChild=event.detail;
    }
}