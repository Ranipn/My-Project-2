import { LightningElement } from 'lwc';

export default class ScenarioOne extends LightningElement {
    FirstName;
    LastName;
    PhoneNumber;
    Email;

    FirstNameChange(event)
    {
        this.FirstName=event.target.value;

    }

    LastNameChange(event)
    {
        this.LastName=event.target.value;

    }

    PhoneNoChange(event)
    {
        this.PhoneNumber=event.target.value;

    }

    EmailChange(event)
    {
        this.Email=event.target.value;

    }
}