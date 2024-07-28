import { LightningElement, track } from 'lwc';

export default class TemplateRender extends LightningElement {
    coll="Select College";
    @track geckCollege=false;
    @track gechCollege=false;
    @track geccCollege=false;


get options()
{
    return [
        { label:'Govt Engineering College Kushalnagar', value:'GECK'},
        { label:'Govt Engineering College Hassan', value:'GECH'},
        { label:'Govt Engineering College Chikmagalur', value:'GECC'}

    ];
}

handleChange(event)
{
    this.coll=event.target.value;

    if(this.coll==='GECH')
        {
           this.geckCollege=false;
            this.gechCollege=true;
            this.geccCollege=false;
        }
        else if(this.coll==='GECK')
            {
                this.geckCollege=true;
            this.gechCollege=false;
            this.geccCollege=false;
            }

            else if(this.coll==='GECC')
                {
                    this.geckCollege=false;
            this.gechCollege=false;
            this.geccCollege=true;
                }
}

closeModal1()
{
    this.geckCollege=false;
}
closeModal2()
{
    this.gechCollege=false;
} 
closeModal3()
{
    this.geccCollege=false;
}
}