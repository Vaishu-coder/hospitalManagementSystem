import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
 

  appointment : Appointment=new Appointment();

  constructor( private appointmentservice:AppointmentService, private router:Router){}

saveappointment()
{ 
  this.appointmentservice.creteappointment(this.appointment).subscribe(data=>
  {
    console.log(data);
    this.gotoappointment();
    
  }
  )
}

  onSubmit()
  { 
    //console.log("hello");
    
    this.saveappointment();
  }

  gotoappointment()
  {
    this.router.navigate(['/appointmentlist'])
  }
}
