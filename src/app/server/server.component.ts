import { Component } from "@angular/core";

@Component({
    selector:'server-root',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `],
})
export class ServerComponent{
serverId=10;
serverStatus="offline";
servers=['test1','test2']
    constructor(){
        this.serverStatus=Math.random() >0.5 ? "online" : "offline";

    }
    getColor(){
        return this.serverStatus==="offline" ?'red' : 'green';
    }


}