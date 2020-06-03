import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }
  
  postData(applicants){
    return this.http.post<any>('http://localhost:8080/api2/AddLaoanApplication', applicants);
  }

  updateData(applicant){
    return this.http.put<any>('http://localhost:8080/api2/updateLoanApplication', applicant);
  }
  
  // getData(){
  //   return this.http.get<any>('http://localhost:8080/api/getUser');
  // }

  updateApprove(applicant){
    return this.http.put<any>(`http://localhost:8080/api2/loanApplicationApprove/${applicant.appId}`, applicant);
  }

  updateReject(applicant){
    return this.http.put<any>(`http://localhost:8080/api2/loanApplicationReject/${applicant.appId}`, applicant);
  }
  // postData1(applicants){
  //   return this.http.post<any>('http://localhost:8080/api2/AddLaoanApplication', applicants);
  // }


}
