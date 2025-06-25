import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
  constructor(private patientservice:PatientService, private route:ActivatedRoute){}
   id:number=0;

   patient:Patient=new Patient();

   ngOnInit():void{
   console.log("helloS");
   
     this.id=this.route.snapshot.params['id']
   this.patientservice.getpatientbyid(this.id).subscribe(data=>{
             this.patient=data;
     });

      
  }
   


}
