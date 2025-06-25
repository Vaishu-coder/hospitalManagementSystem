import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private baseurl="http://localhost:8080/api/v2/appointments";
   

 


  getappointment():Observable<Appointment[]>{

    return this.http.get<Appointment[]>(this.baseurl)
  }
   
  creteappointment(appointment:Appointment):Observable<Appointment>{

    return this.http.post<Appointment>(this.baseurl,appointment);
  }

  deleteappointment(id:number):Observable<object>{
    return this.http.delete(`${this.baseurl}/${id}`);
  }

}
