import { LightningElement } from 'lwc';

export default class ChildCompToParentCc11 extends LightningElement {
    value1=' ';
    handleChange(event)
    {
        this.value1=event.target.value;
    }

    handleClick(event)
    {
      const searchEvent=new CustomEvent('getsearchevent', {detail:this.value1});
      this.dispatchEvent(searchEvent);
    }
}