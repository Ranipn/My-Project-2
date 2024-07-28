import { LightningElement } from 'lwc';

export default class ChToPaChildComp extends LightningElement {
    handleClick(){
        this.dispatchEvent(
            new CustomEvent("customfromchild" ,{detail: "Hi Child to parent" })
        );
    }
}
