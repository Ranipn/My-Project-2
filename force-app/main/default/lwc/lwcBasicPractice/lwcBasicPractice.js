import { LightningElement } from 'lwc';

export default class LwcBasicPractice extends LightningElement {
   defaultMessage='Hi SF';
    greeting='World';

    greeting1='Rani';
    handleChange(event)
    {
        this.greeting=event.target.value;
    }

    

handleChange1(event)
{
    this.greeting1=event.target.value;
}
get upperCase1()
    {
    return `${this.greeting1}`.toUpperCase;
   }
}