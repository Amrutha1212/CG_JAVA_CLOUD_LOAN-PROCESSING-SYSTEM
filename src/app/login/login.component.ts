import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message : string;
  constructor(private clientService : ClientService,
    private router : Router) { }

  ngOnInit() {
  }
login(form : NgForm){
  console.log(form.value);
  this.clientService.loginUser(form.value).subscribe(response =>{
    console.log(response);
    if(response.error === true){
      this.message = response.message;
      setTimeout(() =>{
        this.message= null;
      },5000);
    // if(response.error.error ===true){
    //   this.message=response.error.message;
    //   setTimeout(() =>{
    //     this.message= null; 
    //   },5000);
    
    }else{
      localStorage.setItem('userData',JSON.stringify(response));
      if(response.role === 'ROLE_ADMIN'){
        this.router.navigateByUrl('/view-customer');
      }
      else if(response.role === 'ROLE_APPROVAL'){
        this.router.navigateByUrl('/view-applicant-details');
      }
      else if(response.role === 'ROLE_CUSTOMER'){
        this.router.navigateByUrl('/view-loan-programs');
      }
    }

  })
}

}
