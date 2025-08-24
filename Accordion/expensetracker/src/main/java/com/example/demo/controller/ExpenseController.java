package com.example.demo.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.example.demo.modal.Expense;
import com.example.demo.service.ExpenseService;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public List<Expense> getAll() {
        return expenseService.findAll();
    }

    @GetMapping("{id}")
    public Expense getOne(@PathVariable Long id) {
        return expenseService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Expense> create(@Validated @RequestBody Expense expense) {
        return ResponseEntity.ok(expenseService.create(expense));
    }

    @PutMapping("{id}")
    public ResponseEntity<Expense> update(@PathVariable Long id, @RequestBody Expense expense) {
        return ResponseEntity.ok(expenseService.update(id, expense));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        expenseService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
