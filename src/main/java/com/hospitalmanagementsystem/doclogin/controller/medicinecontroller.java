package com.hospitalmanagementsystem.doclogin.controller;


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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospitalmanagementsystem.doclogin.entity.Medicine;
import com.hospitalmanagementsystem.doclogin.repository.medicinerepository;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "http://localhost:4200")
public class medicinecontroller {
	
	medicinerepository medicinerepo;

	public medicinecontroller(medicinerepository medicinerepo) {
		super();
		this.medicinerepo = medicinerepo;
	}
	
	
	@PostMapping("/medicines")
	public Medicine createmedicine(@RequestBody Medicine m)
	{
		return medicinerepo.save(m);
	}
	@GetMapping("/medicines")
	public List<Medicine> getallmedicine()
	{
		return medicinerepo.findAll();
	}
	
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicine> getmedicinebyid(@PathVariable long id) throws AttributeNotFoundException
	{
		Medicine m=medicinerepo.findById(id).orElseThrow(()-> new AttributeNotFoundException("medicine not found with id "+id));
		return ResponseEntity.ok(m);
		
	}
	
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicine> updatemedicine(@PathVariable long id, @RequestBody Medicine medicinedetail) throws AttributeNotFoundException{
		 
		Medicine medicine=medicinerepo.findById(id).orElseThrow(()-> new AttributeNotFoundException("medicine not found with id "+id));
		medicine.setId(medicinedetail.getId());
		medicine.setDrugname(medicinedetail.getDrugname());
		medicine.setStock(medicinedetail.getStock());
		
		Medicine m=medicinerepo.save(medicine);
		
		return ResponseEntity.ok(m);
	}
	
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Object> deletemedicine(@PathVariable long id) throws AttributeNotFoundException
	{
		Medicine m=medicinerepo.findById(id).orElseThrow(()-> new AttributeNotFoundException("no edicine found with id "+id));
		
		medicinerepo.delete(m);
		
		return ResponseEntity.noContent().build();
	}

}
