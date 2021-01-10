import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`  
  h1 {
    color: red;
  }
  
  app-servers {
    color: blue;
  }
  `]
})
export class AppComponent {
  
}
