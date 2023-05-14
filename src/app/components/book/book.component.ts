import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  closeForm=true;
  projectForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){

  }
 
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      eventDate:['',Validators.required],
      eventAddress:['',Validators.required],
      eventTime:['',Validators.required],
      noOfDays:['',Validators.required],   
    }) 
  }

submitHandler(){
  let body={
    status:"no Status",
    name:this.projectForm.get('name')?.value,
    email:this.projectForm.get('email')?.value,
    phoneNo:this.projectForm.get('phone')?.value,
    eventDate:this.projectForm.get('eventDate')?.value,
    eventAddress:this.projectForm.get('eventAddress')?.value,
    eventTime:this.projectForm.get('eventTime')?.value,
    noOfDays:this.projectForm.get('noOfDays')?.value,
  }


  if(this.projectForm.valid){
    this.http.post('http://localhost:3000/project',body).subscribe(res=>{
    if(res){
      this.router.navigate(['/getproject']);
      this.closeForm=false
    }
    })
  }
  

  
}
get name() {
  return this.projectForm.get('name')!;
}

get phoneNo() {
  return this.projectForm.get('phoneNo')!;
}

get email() {
  return this.projectForm.get('email')!;
}

get eventDate() {
  return this.projectForm.get('eventDate')!;
}
get eventAddress() {
  return this.projectForm.get('eventAddress')!;
}
get eventTime() {
  return this.projectForm.get('eventTime')!;
}
get noOfDays() {
  return this.projectForm.get('noOfDays')!;
}

validate(): void {
  if (this.projectForm?.invalid) {
    for (const control of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[control].markAsTouched();
    }
    return;
  }
}
}
