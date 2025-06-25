import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  
  patients:Patient[]=[];
  constructor(private patientservice:PatientService,private router:Router, private adminauth:AdminauthService){}
  
  ngOnInit():void{
    this.getpatients();
  }
  getpatients(){
    this.patientservice.getpatientlist().subscribe( data=>{
      this.patients=data;
            console.log("Patients loaded:", this.patients);
    },
     error => {
        console.error("Error loading patients", error);
      }

    )
  }

  deletepatient(id:number){
    this.patientservice.deletepatient(id).subscribe(data=>
    {
      console.log(data);
     this.getpatients();
      
    }
    )
  }

  logout(){
   
    this.adminauth.logout();
    this.router.navigate(['home'])
  
  }
}
