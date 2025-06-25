package com.hospitalmanagementsystem.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagementsystem.doclogin.entity.Medicine;

@Repository
public interface medicinerepository extends JpaRepository<Medicine, Long>{

}
