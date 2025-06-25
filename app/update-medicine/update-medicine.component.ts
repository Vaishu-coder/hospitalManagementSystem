import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {
   
   id:number=0;
   medicine : Medicine=new Medicine();
  
   constructor(private route: ActivatedRoute,private medicineservice:MedicineService, private router:Router){}
   ngOnInit():void{
   // console.log("hello");
    this.id= this.route.snapshot.params['id'];
   console.log("hello");
     this.medicineservice.getmedicinebyid(this.id).subscribe(data=>{
      this.medicine=data;
       console.log(data);
      
      
     })
   }
  onsubmit(){
      
      this.medicineservice.updatemedicine(this.id,this.medicine).subscribe(data=>{
         
        console.log(data);
        this.router.navigate(['viewmedicine'])
        
      })
  }
}
