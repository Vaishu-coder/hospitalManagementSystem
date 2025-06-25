import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
    
  appintments:Appointment[]=[];

  constructor(private appointmentservice:AppointmentService){}
  
  ngOnInit():void{
    return this.getappointment();
  }
 
  getappointment(){
    this.appointmentservice.getappointment().subscribe(data=>
    {
      this.appintments=data;
    }
    )
  }

  delete(id:number){

    this.appointmentservice.deleteappointment(id).subscribe(data=>
      {

      console.log(data);
      this.getappointment();
    })
      
  }
}
