import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-loan-login',
  templateUrl: './loan-login.component.html',
  styleUrls: ['./loan-login.component.css']
})
export class LoanLoginComponent implements OnInit {

  defaultValue="Requested";
  message:string;
  applicants;
  constructor(private clientService : ClientService) {
    //   this.getLoanDetails();
       
       }
    
 ngOnInit() {
 
 }

postapplication(form: NgForm) {
 console.log(form.value);
 let userData = JSON.parse(localStorage.getItem('userData'));
 let email = userData.email;
 this.clientService.postApplication(email, form.value).subscribe(response => {
   console.log(response.data);
   if(response.error === false){   
     this.message = response.message;
     setTimeout(() => {
       this.message = null;
     }, 5000);
     // this.router.navigate(['/applyloan']);
  //  } else if(response.error === true){
  //    this.message = response.message;
  //    setTimeout(() => {
  //      this.message = null;
  //    }, 5000);
   }
   form.reset();
 })
}


}
