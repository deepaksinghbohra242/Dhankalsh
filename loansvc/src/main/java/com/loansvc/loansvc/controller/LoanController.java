package com.loansvc.loansvc.controller;

import com.loansvc.loansvc.model.Loan;
import com.loansvc.loansvc.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/loan")
public class LoanController {
    @Autowired
    LoanRepository loanRepository;
    @PostMapping("/add")
    public Loan createLoan(@RequestBody Loan loan){
        return loanRepository.save(loan);
    }
    @GetMapping("/getAll")
    public List<Loan> getALlLoan(){
        return loanRepository.findAll();
    }
}
