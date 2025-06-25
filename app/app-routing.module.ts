import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicinesComponent } from './create-medicines/create-medicines.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent, canActivate: [AdminauthguardService]},
  {
    path:'appointmentlist',component:AppointmentComponent ,canActivate: [AdminauthguardService]
  },
  {
    path:'create-appointment',component:CreateAppointmentComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'docdash' ,component:DocdashComponent, canActivate:[DocauthguardService]
  },
  {
   path:'addpatient',component:CreatePatientComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'viewmedicine' , component:MedicinelistComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'addmedicines',component:CreateMedicinesComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'updatepatient/:id' ,component:UpdatePatientComponent,canActivate: [AdminauthguardService]
  },{
    path:'viewpatient/:id',component:ViewPatientComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'updatemedicine/:id',component:UpdateMedicineComponent,canActivate: [AdminauthguardService]
  },
  {
    path:'doclogin' ,component:DocloginComponent
  },
  {
    path:'adlogin' ,component:AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
