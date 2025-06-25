package com.hospitalmanagementsystem.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospitalmanagementsystem.entity.patient;
import com.hospitalmanagementsystem.repository.patientrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")

public class patientcontroller {
  
	   patientrepository patientrepo;

	public patientcontroller(patientrepository patientrepo) {
		super();
		this.patientrepo = patientrepo;
	}
	
	@PostMapping("/patients")
	public patient createpatient( @RequestBody patient  p)
	{ 
		
		return patientrepo.save(p);
		
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String, Boolean>> deletepatient(@PathVariable long id) throws AttributeNotFoundException
	{  
		
		patient p=patientrepo.findById(id).orElseThrow(()-> new AttributeNotFoundException("patient not found with id"+id));
	    patientrepo.delete(p);
	    Map<String,Boolean> response=new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/patients")
	public List<patient> getallpatient()
	{		
		return patientrepo.findAll();	
	}
	 
	@GetMapping("/patients/{id}")
	 public ResponseEntity<patient>getpatientbyid(@PathVariable long id) throws AttributeNotFoundException
	 {
		 patient p=patientrepo.findById(id).orElseThrow(()-> new AttributeNotFoundException("patient not found with id "+id));
		 return ResponseEntity.ok(p);
	 }
	@PutMapping("/patients/{id}")
	public ResponseEntity<patient> updatepatientbyid(@PathVariable long id,@RequestBody patient pg) throws AttributeNotFoundException{
		  
		patient ps=patientrepo.findById(id).orElseThrow(()->new AttributeNotFoundException("patient not found with id "+id));
		
		ps.setAge(pg.getAge());
		ps.setBlood(pg.getBlood());
		ps.setDose(pg.getDose());
		ps.setName(pg.getName());
		ps.setPrescription(pg.getPrescription());
		ps.setUrgency(pg.getUrgency());
		ps.setFees(pg.getFees());
		ps.setId(pg.getId());
	
		patient savepatient=patientrepo.save(ps);
		
		
		return ResponseEntity.ok(savepatient);
		
	    
	}
}
