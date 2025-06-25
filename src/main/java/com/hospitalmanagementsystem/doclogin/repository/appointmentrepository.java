package com.hospitalmanagementsystem.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospitalmanagementsystem.doclogin.entity.Appointment;

@Repository
public interface appointmentrepository extends JpaRepository<Appointment, Long>{

}
