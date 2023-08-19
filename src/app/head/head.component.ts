import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  constructor(public ts:TestService){
    
  }

  // Elements=this.ts.mobiles


  // addTask(){
  //   this.ts.mobiles.push("newItems")
  // }




}
