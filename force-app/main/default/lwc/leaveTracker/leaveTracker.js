import { LightningElement } from 'lwc';

export default class LeaveTracker extends LightningElement {

    refreshLeavesRequestHandler(event)
    {
        this.refs.myLeavesComp.refreshGrid();
    }
}