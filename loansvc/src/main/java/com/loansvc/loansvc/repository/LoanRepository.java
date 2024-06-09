package com.loansvc.loansvc.repository;


import com.loansvc.loansvc.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByCommunityName(String communityName);
}
