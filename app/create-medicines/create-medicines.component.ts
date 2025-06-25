import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicines',
  templateUrl: './create-medicines.component.html',
  styleUrls: ['./create-medicines.component.css']
})
export class CreateMedicinesComponent {
  
  medicine:Medicine=new Medicine();
  constructor(private medicineservice:MedicineService,private router:Router){}
  onsubmit(){

   this.savemedicine(this.medicine)

  }
  
  savemedicine(medicine:Medicine){
      this.medicineservice.savemedicine(this.medicine).subscribe(data=>{
          console.log(data);
          this.gotoview();
          
      })
  }

  gotoview(){
      this.router.navigate(['/viewmedicine'])
  }
}
