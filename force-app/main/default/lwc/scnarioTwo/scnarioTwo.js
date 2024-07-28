import { LightningElement } from 'lwc';

export default class ScnarioTwo extends LightningElement {
    comboValue='';
    showNameField=false;
    showEmailField=false;


    statusOptions=[
        {label:'Select Form type', value:''},
        {label:'Name', value:'name'},
        {label:'Email', value:'email'}

    ];

    handleChange(event)
    {
        this.comboValue=event.target.value;
        this.showNameField=this.comboValue==='name';
        this.showEmailField=this.comboValue==='email';

    }


    DistricValue;
    hassanDistic;
    chikmagalurDistic;

    HassanDistic=[
        {
            name:"Belur",
        },
        {
            name:"Alur",
        },

        {
            name:"Arasikere",
        },

        {
            name:"CRP",
        },

        {
            name:"HNP",
        },
    ];

    ChickmagalurDistic=[
        {
            name:"Kadur",
        },
        {
            name:"Koppa",
        },

        {
            name:"N R Pura",
        },

        {
            name:"Tarikere",
        },

        {
            name:"Sringeri",
        },
    ];

    TalukOptions=[
        {label:'Select Distic', value:''},
        { label:'Hassan', value:'hassan'},
        { label:'Chikmagalur', value:'chikmagalur'},
    ]

    handleDistricChange(event)
    {
        this.DistricValue=event.target.value;
        this.hassanDistic=this.DistricValue==='hassan';
        this.chikmagalurDistic=this.DistricValue==='chikmagalur';
    }

}