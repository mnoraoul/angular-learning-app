import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '[app-servers]',
 //selector: '.app-servers',
 selector : 'app-servers',
 templateUrl: './servers.component.html',
  //  `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus : string = "No server was created";
  serverName : string = "Default name";
  serverCreated : boolean = false;
  servers = ['Testserver', 'Testserver2'];
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event : any){
    this.serverName = event.target.value;
  }
}
