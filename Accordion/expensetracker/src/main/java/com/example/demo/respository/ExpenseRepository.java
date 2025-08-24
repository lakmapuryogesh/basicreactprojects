package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense,Long>{

}
