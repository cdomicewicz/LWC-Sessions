import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {
    showRoomInfo;
    meetingRooms = [
        {roomName : 'A-01', roomCapacity : '1'},
        {roomName : 'A-02', roomCapacity : '2'},
        {roomName : 'A-03', roomCapacity : '3'},
        {roomName : 'B-01', roomCapacity : '4'},
        {roomName : 'B-02', roomCapacity : '5'},
        {roomName : 'B-03', roomCapacity : '6'},
        {roomName : 'C-01', roomCapacity : '7'}
    ];
    showRoomInfoToggle(event) {
        this.showRoomInfo = event.target.checked;
    }
}