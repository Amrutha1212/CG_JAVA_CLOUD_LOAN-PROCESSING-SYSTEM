import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
   defaultValue = 'ROLE_APPROVAL';
  constructor(private clientService : ClientService) { }

  ngOnInit() {
   
  }
  message:string;
  message1:string;
  postClient(form : NgForm){
    this.clientService.postData(form.value).subscribe(response =>{
      console.log(response);
      if(response.error ===false){
        this.message=response.message;
        setTimeout(() =>{
          this.message= null;
        },10000);
      form.reset();
      }
      else if(response.error ===true){
        this.message1=response.message;
        setTimeout(() =>{
          this.message1= null;
        },10000);
      }

    });
  }
}
