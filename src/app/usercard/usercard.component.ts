import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent {
// constructor(private route:ActivatedRoute, private us:TestService){}
// cuser: any;
//  ngOnInit(): void{
//    this.route.paramMap.subscribe(
//     params=>{
//       let userid= +params.get('id');
//       this.cuser=this.us.users.find(u=>u.id==userid)
//     }
//    )
//  }
}
