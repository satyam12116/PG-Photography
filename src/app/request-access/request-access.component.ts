import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent {
  status!:any;
  filteredUsers!:any;
constructor(private ss:SharedService,private http:HttpClient){}

ngOnInit(): void {
  this.ss.sharedSubject.subscribe(res=>{
    if(res){
      this.http.get<any>('http://localhost:3000/project').subscribe(res1=>{
        this.filteredUsers = res1.filter((user:any) => user.email === res.emailId);
      })
    }
  })
   
}
}
