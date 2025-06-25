import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
patients:Patient[]=[]
  constructor(private patientservice : PatientService, private router : Router, private docauth:DocauthService){}
 
  ngOnInit():void{
    this.getpatient();
  }
  getpatient()
  {
    this.patientservice.getpatientlist().subscribe(data=>
    {
      this.patients=data;
    }
    )
  }

  update(id:number)
  {
      this.router.navigate(['/updatepatient',id])
  }

  deletepatient(id:number)
  {
     this.patientservice.deletepatient(id).subscribe(data=>{
           console.log(data);
      this.getpatient();
     })
 
     
  }

  viewpatient(id:number)
  {
    this.router.navigate(['/viewpatient',id]);
  }
 
  logout(){
     
      this.docauth.logout();
      this.router.navigate(['home'])
  }
}
