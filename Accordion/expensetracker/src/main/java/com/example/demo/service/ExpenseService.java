package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.modal.Expense;
import com.example.demo.respository.ExpenseRepository;

@Service
public class ExpenseService {
	private final ExpenseRepository expenseRepository;
	
	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository=expenseRepository;
	}
	
	public List<Expense> findAll(){
		return expenseRepository.findAll();
	}
	public Expense findById(Long id) {
		return expenseRepository.findById(id)
				.orElseThrow(()->new RuntimeException("Expense not found"+id));
		
	}
	public Expense create(Expense e) { return expenseRepository.save(e); }

    public Expense update(Long id, Expense e) {
        Expense existing = findById(id);
        existing.setTitle(e.getTitle());
        existing.setAmount(e.getAmount());
        existing.setDate(e.getDate());
        existing.setCategory(e.getCategory());
        existing.setNotes(e.getNotes());
        return expenseRepository.save(existing);
    }

    public void delete(Long id) { expenseRepository.deleteById(id); }

}
