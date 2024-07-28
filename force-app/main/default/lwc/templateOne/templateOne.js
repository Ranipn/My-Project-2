import { LightningElement, track } from 'lwc';

export default class TemplateOne extends LightningElement {
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

}