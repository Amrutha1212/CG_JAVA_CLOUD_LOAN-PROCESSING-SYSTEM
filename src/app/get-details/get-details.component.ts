import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  constructor(private clientService : ClientService) {
    this.getDetails();
   
   }

   details;
  ngOnInit() {
  }
  getDetails(){
    let  userData = JSON.parse(localStorage.getItem('userData'));
    let userId = userData.userId;
    this.clientService.getMyDetails(userId).subscribe(response => {
      console.log(response);
      this.details = response.data;
    });
  }
}
