import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceservice';


// example stop time on time 
//  Observable 


  myobs=new Observable(
    (listner)=>{
      listner.next(1)
      listner.next(2)
      setTimeout(()=>listner.next(3),1000)
      setTimeout(()=>listner.next(4),1000)
      setTimeout(()=>listner.next(6),1000);
      setTimeout(()=>listner.error("some error"),1000)
      setTimeout(()=>listner.complete(),1000)
    }
  )
  subref:any;
  test(){
    this.subref=this.myobs.subscribe(
      data=>{console.log(data)},
      err=>{console.log(err)},
      ()=>{console.log("completed")}
    )
  }

  unscible(){
    this.subref.unsubscribe()
  }



}
