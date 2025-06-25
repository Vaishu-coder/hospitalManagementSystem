import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient ) { }

  private baseurl='http://localhost:8080/api/v1/patients'

  getpatientlist():Observable<Patient[]>{

    return this.httpclient.get<Patient[]>(this.baseurl)
  }

  deletepatient(id:number):Observable<object>{

    return this.httpclient.delete(`${this.baseurl}/${id}`)

  }

  createpatient(patient:Patient):Observable<Patient>{
    return this.httpclient.post<Patient>(this.baseurl,patient)
  }

  getpatientbyid(id:number):Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.baseurl}/${id}`);
  }

  updatepatient(id:number,patient:Patient):Observable<object>{
    return this.httpclient.put(`${this.baseurl}/${id}`,patient);
  }
}
