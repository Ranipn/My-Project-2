import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {

    time='4 PM';
    greeting='Good Afternoon';
   @track todos=[];

connectedCallback()
{
    this.getTime();
    this.populateTodos();


setInterval(() => {
    this.getTime();
}, 1000);}

    getTime()

    {
        const date=new Date();
        const hour=date.getHours();
        const min=date.getMinutes();

        this.time=`${this.getHour(hour)}:${this.getDoubleDigit(min)}${this.getMidDay(hour)}`;
        this.setGreetings(hour);
    }

    getHour(hour)
    {
     return hour=== 0 ? 12 : hour>12 ?(hour-12): hour;
    }
     
    getMidDay(hour)
    {
        return hour>=12 ? 'PM':'AM';
    }

    getDoubleDigit(digit)
    {
        return digit<10 ? "0"+digit :digit;
    }

    setGreetings(hour)
    {
    if(hour<12)
    {
        this.greeting='Good Morning All';
    }
    else if(hour>=12 && hour<=17)
    {
        this.greeting='Good Afternoon All';
    }
    else 
    {
        this.greeting='Good Evening All';
    }
    }

    addToDoList()
    {
        const inputBox=this.template.querySelector("lightning-input");
       
        const todo={
            todoId:this.todos.length,
            todoName:inputBox.value,
            done:false,
            todoDate:new Date()

        }
        this.todos.push(todo);
        inputBox.value= "";
            
    }

    get UpcomingTask()
    {
    return this.todos && this.todos.length ? this.todos.filter(todo =>!todo.done) :[];
    }

    get CompletedTask()
    {

        return this.todos && this.todos.length ? this.todos.filter(todo=>todo.done) : [];
    }

    populateTodos()
    {
        const todos=[
            {
            todoId:0,
            todoName:'wash car',
            done:false,
            todoDate:new Date()
        },

        {
            todoId:1,
            todoName:'Feed to Cat',
            done:false,
            todoDate:new Date()
        },
        {
            todoId:3,
            todoName:'Going to office',
            done:true,
            todoDate:new Date()
        }
        ];
        this.todos=todos;
    }
}