import { LightningElement, track } from 'lwc';

export default class SecondScenario extends LightningElement {
    @track currenyDateTime;

connectedCallback()
{
   this.updateCurrentDate();
   this.refreshInterval=setInterval(()=>this.updateCurrentDate(),100);
}

disconnectedCallback()
{
   clearInterval(this.refreshInterval);
}


  updateCurrentDate()
  {
    const now=new Date();
    this.currenyDateTime=now.toLocaleString();

  }

}