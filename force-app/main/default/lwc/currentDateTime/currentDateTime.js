import { LightningElement, track } from 'lwc';

export default class CurrentDateTime extends LightningElement {
@track currentDateTime;

updateCurrentDate()
{
    const now=new Date();
    this.currentDateTime=now.toLocaleString();
}
connectedCallback()
{
    this.updateCurrentDate();
    this.refreshInterval=setInterval(()=>this.updateCurrentDate(), 1000);
}
disconnectedCallback()
{
    clearInterval(this.refreshInterval);
}
}