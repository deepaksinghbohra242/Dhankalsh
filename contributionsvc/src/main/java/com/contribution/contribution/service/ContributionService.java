package com.contribution.contribution.service;
import com.contribution.contribution.controller.dto.ContributionRequest;
import com.contribution.contribution.controller.dto.ContributionResponse;
import com.contribution.contribution.model.Contribution;
import com.contribution.contribution.model.Payment;
import com.contribution.contribution.repository.ContributionRepository;
import org.springframework.stereotype.Service;

import java.time.Month;
import java.time.Year;
import java.util.*;

@Service
public record ContributionService(ContributionRepository contributionRepository) {
    public String addContribution(ContributionRequest request){
            try {
                Date currentDate = new Date();
                Month contributionMonth = Month.valueOf(String.valueOf(request.month()));

                boolean contributionExists = contributionRepository.existsByUserIdAndContributionMonthAndYear(
                        request.userId(), contributionMonth, request.year());

                if (contributionExists) {
                    throw new Error("already exists");
                }

                final Contribution contribution = new Contribution(
                        null,
                        request.userId(),
                        contributionMonth,
                        request.communityName(),
                        currentDate,
                        request.year(),
                        request.amount(),
                        Payment.PROGRESS
                );
                contributionRepository.save(contribution);
                return "Contribution added";
            } catch (IllegalArgumentException e) {
                return "Invalid month provided";
            } catch (Exception e) {
                return "Contribution not added";
            }
        }

    public List<ContributionResponse> getAllContributions(Year year , String communityName) {
        List<Contribution> allContributions = contributionRepository.findByYearAndCommunityName(year , communityName);
        // Map to store user IDs and their contribution months for the given year
        Map<Integer, List<Integer>> contributionMap = new HashMap<>();

        // Populate the contribution map
        for (Contribution contribution : allContributions) {
            contributionMap
                    .computeIfAbsent(contribution.getUserId(), k -> new ArrayList<>(Collections.nCopies(12, 0)))
                    .set(contribution.getContributionMonth().getValue() - 1, contribution.getAmount());
        }

        // Convert map entries to ContributionResponse objects
        List<ContributionResponse> responseList = new ArrayList<>();
        for (Map.Entry<Integer, List<Integer>> entry : contributionMap.entrySet()) {
            Integer userId = entry.getKey();
            List<Integer> contributions = entry.getValue();
            responseList.add(new ContributionResponse(userId, year, contributions));
        }

        return responseList;
    }


//    public List<Month> getContributionsByUserIdAndYear(Integer userId, Year year) {
//        return contributionRepository.findByUserIdAndYear(userId, year);
//    }

}


