import { LightningElement , track} from 'lwc';

export default class CerificateApplication extends LightningElement {


    @track certificateValue;
    @track characterCertificate1 = false;
    @track  residentialCertificate1=false;

    get options() {
        return [
            { label: 'Residence Certificate', value: 'resideneceCertificate' },
            { label: 'Character Certificate', value: 'characterCertificate' },
           
        ];
    }


    handleChange(event)
    {
   this.certificateValue=event.detail.value;

   if (this.certificateValue==='characterCertificate') {
    this.characterCertificate1=true;
    this.residentialCertificate1=false;
   }
   else if(this.certificateValue==='resideneceCertificate')
   {
    this.residentialCertificate1=true;
    this.characterCertificate1=false;
   }
   }
   
    }