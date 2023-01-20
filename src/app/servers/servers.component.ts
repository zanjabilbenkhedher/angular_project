import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  createServiceStatus="No service created!";
  inputName="username";
  constructor(){
    setTimeout(() => {
      this.allowNewServer=true
    },2000)

  }

  onCreateService(){
    this.createServiceStatus="Service created"+this.inputName;
  }

  onCreateName(event:Event){
    //console.log(event);
    this.inputName=(<HTMLInputElement>event.target).value
  }
 ngOnInit(){

 }
}
