import { LightningElement, track, wire } from 'lwc';
import geccCollege from '@salesforce/apex/GecChickmagalurCollege.submitGeccApplication';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class GeccCollege extends LightningElement {

@track name1;
@track age1;
@track email1;
@track phone1;
@track marks1;

namehandleChange(event)
{
    this.name1=event.target.value;
}

agehandleChange(event)
{
    this.age1=event.target.value;
}

emailhandleChange(event)
{
    this.email1=event.target.value;
}
phonehandleChange(event)
{
    this.phone1=event.target.value;
}
markshandleChange(event)
{
    this.marks1=event.target.value;
}

submitTempOneForm()
{
    geccCollege({
        studentName:this.name1,
        age: this.age1,
        email:this.email1,
        phone:this.phone1,
        pucMarks:this.marks1
    })
    .then(result=>
        {
            this.resetForms();
            this.dispatchEvent(
                new ShowToastEvent(
                    {
                        title:'Success',
                        message:'Record Created Successfully..!!',
                        variant: 'success'
                    }
                )
            )
        }
    )
    .catch(error=>{
        
        this.dispatchEvent(
            new ShowToastEvent(
                {
                    title:'Error',
                    Message:error.body.message,
                    variant: 'error'
                }
            )
        )
    })
}

resetForms()
{
    this.name1='';
    this.age1='';
    this.email1='';
    this.phone1='';
    this.marks1='';

    

}



}