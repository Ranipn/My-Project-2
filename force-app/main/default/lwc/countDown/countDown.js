import { LightningElement,track} from 'lwc';

const timerStartFrom=10;
export default class CountDown extends LightningElement {
@track timeValue=timerStartFrom;
timerInterval;

handdleClick()
{
    clearInterval(this.timerInterval);
    this.timeValue=timerStartFrom;

this.timerInterval=setInterval(()=>{
    this.timeValue--;

    if(this.timeValue<=0)
        {
            clearInterval(this.timerInterval);
            this.showAlert();
        }
}, 1000
)}
showAlert()
{
    alert('Times up');

}


}