import { LightningElement, wire } from 'lwc';
import accountList from '@salesforce/apex/ScenarioThree.ScenarioThreeMethod';

export default class ScenarioThree extends LightningElement 
{
@wire(accountList) account;
}