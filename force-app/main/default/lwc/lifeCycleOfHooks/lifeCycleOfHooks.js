import { LightningElement } from 'lwc';

export default class LifeCycleOfHooks extends LightningElement {

    constructor()
    {
        super();
        console.log('I am inside the constructor');
    }

    connectedCallback()
    {
        console.log('I am in connectedCallback');
    }
     disconnectedCallback()
     {
    console.log('I am in disconnectedCallback');
    }

}