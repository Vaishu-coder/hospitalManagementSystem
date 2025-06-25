import { Component, getModuleFactory } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {
   
  patient:Patient=new Patient();
  id:number=0;
  constructor(private route:ActivatedRoute,private patientservice:PatientService,private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientservice.getpatientbyid(this.id).subscribe(data=>{
        this.patient=data;
    })

  }
  onsubmit(){

    this.patientservice.updatepatient(this.id,this.patient).subscribe(data=>{
      console.log(data);
     this.gotodocdash();
      
    })}
     
    gotodocdash(){
       this.router.navigate(['/docdash']);
    }
  
}
