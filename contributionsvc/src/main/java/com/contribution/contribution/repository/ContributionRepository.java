package com.contribution.contribution.repository;

import com.contribution.contribution.model.Contribution;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Month;
import java.time.Year;
import java.util.List;

public interface ContributionRepository extends JpaRepository<Contribution , Integer> {
    Boolean existsByUserIdAndContributionMonthAndYear(Integer userId , Month month , Year year);

    List<Contribution> findByYear(Year year);

    List<Contribution> findByYearAndCommunityName(Year year , String communityName);

    List<Contribution> findByCommunityName(String communityName);

}
