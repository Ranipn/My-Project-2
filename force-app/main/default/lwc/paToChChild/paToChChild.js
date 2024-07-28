import { LightningElement, api } from 'lwc';

export default class PaToChChild extends LightningElement {
    @api greeting;
    @api parentToChild;
}