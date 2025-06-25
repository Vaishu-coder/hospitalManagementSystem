import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }
   
    baseurl="http://localhost:8080/api/v3/medicines"
   getmedicine():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.baseurl)
   }

   savemedicine(medicine:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(this.baseurl,medicine)
   }

   getmedicinebyid(id:number):Observable<Medicine>{
    return this.http.get<Medicine>(`${this.baseurl}/${id}`)
   }

   updatemedicine(id:number,medicine:Medicine):Observable<object>{
    return this.http.put(`${this.baseurl}/${id}`,medicine);
   }

   deletemedicine(id:number):Observable<object>{
     return this.http.delete(`${this.baseurl}/${id}`)
   }
}
