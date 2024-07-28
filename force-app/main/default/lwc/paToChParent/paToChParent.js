import { LightningElement } from 'lwc';

export default class PaToChParent extends LightningElement {
    GreetingFromparent='Have a nice evening';
    valueFromParentToChild='Rani P N';

    handleChange(event)
    {
      this.valueFromParentToChild=event.target.value;  
    }
}