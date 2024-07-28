import { LightningElement, wire, track } from 'lwc';
import getapplication from '@salesforce/apex/CollegeVerification.getcollegeApplication';

const PAGE_SIZE=5;


export default class CollegeVerification extends LightningElement {

    @track currentPage=1;
    @track totalRecords=0;
    @track pages=[];
   @track allData=[];
    @track displayedData=[];

    inputApplication;
    serialNumber = 1;
    @wire (getapplication)
    studentAppliction({data, error})
       { 
        if(data)
            {
                this.inputApplication=data.map((record, index) => ({ ...record, serialNumber: index + 1 }));;
    }
            else if(error)
                {
                    console.error('Error retrieving student Application', error);
                }
        }
    
       //this.allData=inputApplication;
}