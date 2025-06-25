package com.hospitalmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagementsystem.entity.patient;

@Repository
public interface patientrepository extends JpaRepository<patient, Long> {

}
