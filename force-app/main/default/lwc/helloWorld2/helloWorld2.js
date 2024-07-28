import { LightningElement } from 'lwc';

export default class HelloWorld2 extends LightningElement {
    name="Rani";

    name1="chubbi";
    nameHandle(event)
    {
        this.name1=event.target.value;
    }

    one="Hello";
}