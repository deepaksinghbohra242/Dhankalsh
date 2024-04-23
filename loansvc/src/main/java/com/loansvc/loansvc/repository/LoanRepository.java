package com.loansvc.loansvc.repository;


import com.loansvc.loansvc.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
