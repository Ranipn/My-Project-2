import { LightningElement, track } from 'lwc';
import gecKushalCollege from '@salesforce/apex/GecKushalnagarCollege.kushalnagarCollege';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class GeckCollege extends LightningElement {

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
    gecKushalCollege(
        {
            studentName:this.name1,
            age:this.age1,
            phone:this.phone1,
            email:this.email1,
            pucMarks:this.marks1
        }
    )
    .then(result=>
        {
        this.resetForm();
        this.dispatchEvent(
            new ShowToastEvent(
                {
                    title:'success',
                    message: 'Record Created Successfully...!!',
                    variant: 'success'
                }
            )
        )
    }
    )
    .catch(error=>
        {
            this.dispatchEvent(
                new ShowToastEvent(
                    {
                        title:'Error',
                        Message:error.body.message,
                        variant: 'error'
                    }
                )
            )
        }
    )
}
resetForm()
{
    this.name1='';
    this.age1='';
    this.email1='';
    this.phone1='';
    this.marks1='';

}
}