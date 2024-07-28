import { LightningElement, track } from 'lwc';
import collegeDetails from '@salesforce/apex/SelectCollege.selectCollegeEngg';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class SelectCollege extends LightningElement {
@track studentname1;
@track fathername;
@track email1;
@track phone1;
@track marks1;
@track dateofBirth;
@track address1;
@track coll;

get options()
{
    return [
        { label:'Govt Engineering College Kushalnagar', value:'GECK'},
        { label:'Govt Engineering College Hassan', value:'GECH'},
        { label:'Govt Engineering College Chikmagalur', value:'GECC'}

    ];
}


namehandleChange(event)
{
    this.studentname1=event.target.value;
}

fathernamehandleChange(event)
{
    this.fathername=event.target.value;
}

dateOfbirthhandleChange(event)
{
    this.dateofBirth=event.target.value;
}

emailhandleChange(event)
{
    this.email1=event.target.value;
}
phonehandleChange(event)
{
    this.phone1=event.target.value;
}

addresshandleChange(event)
{
    this.address1=event.target.value;
}

markshandleChange(event)
{
    this.marks1=event.target.value;
}
handleChange(event)
{
    this.coll=event.target.value;
}
submitTempOneForm()
{
    collegeDetails(
        {
            studentName:this.studentname1,
            dob:this.dateofBirth,
            email:this.email1,
            phone:this.phone1,
            fatherName:this.fathername,
            pucMarks:this.marks1,
            addressone:this.address1,
            collegeName:this.coll 
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
   this.studentname1='';
    this.dateofBirth='';
    this.email1='';
    this.phone1='';
    this.fathername='';
   this.marks1='';
    this.address1='';
    this.coll='';
}
}