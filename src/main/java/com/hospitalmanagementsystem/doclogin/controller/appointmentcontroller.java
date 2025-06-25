package com.hospitalmanagementsystem.doclogin.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospitalmanagementsystem.doclogin.entity.Appointment;
import com.hospitalmanagementsystem.doclogin.repository.appointmentrepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class appointmentcontroller {
	
	appointmentrepository appointmentrepo;

	public appointmentcontroller(appointmentrepository appointmentrepo) {
		super();
		this.appointmentrepo = appointmentrepo;
	}
	
	@PostMapping("/appointments")
	public Appointment createappointment(@RequestBody Appointment a)
	{
		return appointmentrepo.save(a);
		
	}
	
	@GetMapping("/appointments")
	public List<Appointment> getall()
	{
		return appointmentrepo.findAll();
	}
	
	
	
	
	@DeleteMapping("/appointments/{id}")
	public void deleteappointment(@PathVariable long id) throws AttributeNotFoundException
	{
		Appointment appoint=appointmentrepo.findById(id).orElseThrow( ()-> new AttributeNotFoundException("Appointment not found with id"+id));
		
		appointmentrepo.delete(appoint);
	 
		
	}

}
