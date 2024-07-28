import { LightningElement } from 'lwc';

export default class ForEachEx22 extends LightningElement {
    fruitList=['Apple', 'Orange', 'Banana'];

    studentList=[
        {
            id:1,
            name:"Rani",
            age:25
        },
        {
            id:2,
            name:"pavi",
            age:28
        },
        {
            id:1,
            name:"chama",
            age:22
        }
    ]
}