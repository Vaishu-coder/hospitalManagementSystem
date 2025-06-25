import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {

  constructor(private medicineservice :MedicineService, private router: Router){}

  ngOnInit():void{
        this. getmedicine();
  }
   
  medicines:Medicine[]=[]
  getmedicine(){
     this.medicineservice.getmedicine().subscribe(data=>{
           this.medicines=data;
     })
  }

  updatemedicine(id:number){
     
     this.router.navigate(['updatemedicine',id])
  }

  deletemedicine(id:number)
  {
     this.medicineservice.deletemedicine(id).subscribe(data=>{
      console.log(data);
      this.getmedicine();
      
     })
  }

}
