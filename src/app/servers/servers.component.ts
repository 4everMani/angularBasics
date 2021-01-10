import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,//teplate or templateUrl must be present
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCeationStatus : string='No server was created';
  allowServer : boolean=false;
  serverName:string = "";
  serverCreated : boolean = false;
  servers :string[] = ['Test Server', 'TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCeationStatus='Server was created : '+ this.serverName;
    
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
