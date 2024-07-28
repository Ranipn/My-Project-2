import { LightningElement, api } from 'lwc';

export default class ParentToChildCc11 extends LightningElement {

    @api childCompFromParent;
    @api progressiveValue;
}