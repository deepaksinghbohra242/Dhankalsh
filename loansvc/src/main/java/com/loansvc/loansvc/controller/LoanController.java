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
    public List<Loan> getAllLoans(){
        return loanRepository.findAll();
    }

    // New endpoint to get loans by community name
    @GetMapping("/getByCommunity")
    public ResponseEntity<List<Loan>> getLoansByCommunityName(@RequestParam String communityName) {
        List<Loan> loans = loanRepository.findByCommunityName(communityName);
        if (loans.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(loans);
        }
    }

    @GetMapping("/totalLoanAmount")
    public ResponseEntity<Double> getTotalLoanAmount(@RequestParam(required = false) String communityName) {
        List<Loan> loans;
        if (communityName == null || communityName.isEmpty()) {
            loans = loanRepository.findAll();
        } else {
            loans = loanRepository.findByCommunityName(communityName);
        }

        double totalAmount = loans.stream().mapToDouble(Loan::getAmount).sum();
        return ResponseEntity.ok(totalAmount);
    }
}
