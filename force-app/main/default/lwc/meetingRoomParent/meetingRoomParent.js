import { LightningElement } from 'lwc';

export default class MeetingRoomParent extends LightningElement {

    meetingRoomInfo=[
        {
            roomName:'A-01', roomCapacity:'10'
        },
        {
            roomName:'A-02', roomCapacity:'11'
        },
        {
            roomName:'A-01', roomCapacity:'13'
        },
        {
            roomName:'B-01', roomCapacity:'21'
        },
        {
            roomName:'B-02', roomCapacity:'22'
        },
        {
            roomName:'B-03', roomCapacity:'23'
        }

    ]
}