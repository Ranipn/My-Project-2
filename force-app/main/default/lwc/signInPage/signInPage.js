import { LightningElement } from 'lwc';

export default class SignInPage extends LightningElement {
name;
password;
    handleChange(event)
    {
this.name=event.target.value;
    }
    handlePassword(event)
    {
        this.password=event.target.value;
    }

    handleClick()
    {
        console.log("Sign in successfully");
    }
}