import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {
   
  patient :Patient=new Patient();
  constructor(private patientservice:PatientService, private router:Router){}
  onSubmit(){
    this.saveinfo(this.patient);
  
  }
   
  saveinfo(patient:Patient){
     this.patientservice.createpatient(this.patient).subscribe(data=>{
       console.log(data);
       
           this.gotodocdash();
     })
  }

  gotodocdash(){
     this.router.navigate(['/docdash'])
  }
}
