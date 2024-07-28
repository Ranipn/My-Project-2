import { LightningElement } from 'lwc';

export default class ParentToChildParentComp extends LightningElement {
    showChild=false;
    parentValue="I am from Parent to Child";
    handleclick()
    {
        this.showChild=!this.showChild;
    }
}