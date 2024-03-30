package com.contribution.contribution.controller;

import com.contribution.contribution.controller.dto.ContributionRequest;
import com.contribution.contribution.controller.dto.ContributionResponse;
import com.contribution.contribution.service.ContributionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
import java.time.Year;
import java.util.List;

@RestController
@RequestMapping("/api/v1/cont")
public record ContributionController(ContributionService contributionService) {
    @GetMapping("/contribute")
    public String test(){
        return "ok";
    }
    @PostMapping("/add")
    public ResponseEntity<String> registerContribution (@RequestBody ContributionRequest contributionRequest){
        return ResponseEntity.ok(contributionService.addContribution(contributionRequest));
    }

    @GetMapping("/getall")
    public ResponseEntity<List<ContributionResponse>> getAllContributions(@RequestParam("year") Year year) {
        List<ContributionResponse> contributions = contributionService.getAllContributions(year);
        return ResponseEntity.ok(contributions);
    }

//    @GetMapping("/{userId}")
//    public ResponseEntity<List<Month>> getContributionsByUserIdAndYear(
//            @PathVariable("userId") Integer userId,
//            @RequestParam("year") Year year) {
//        List<Month> contributions = contributionService.getContributionsByUserIdAndYear(userId,year);
//        return ResponseEntity.ok(contributions);
//    }
}
