package com.contribution.contribution.controller;

import com.contribution.contribution.controller.dto.ContributionRequest;
import com.contribution.contribution.controller.dto.ContributionResponse;
import com.contribution.contribution.controller.dto.ErrorResponseDto;
import com.contribution.contribution.service.ContributionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.List;
@RestController
@RequestMapping("/api/v1/cont")
@Tag(name = "Contribution Service", description = "APIs for managing contributions")
public record ContributionController(ContributionService contributionService) {

    @Operation(
            summary = "Register Contribution",
            description = "Registers a new contribution"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Contribution successfully registered"
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    })
    @PostMapping("/add")
    public ResponseEntity<String> registerContribution(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Contribution request object",
                    required = true,
                    content = @Content(
                            schema = @Schema(implementation = ContributionRequest.class)
                    )
            )
            @RequestBody ContributionRequest contributionRequest) {
        return ResponseEntity.ok(contributionService.addContribution(contributionRequest));
    }

    @Operation(
            summary = "Get All Contributions",
            description = "Fetches all contributions for a given year and community"
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "OK",
                    content = @Content(
                            schema = @Schema(implementation = ContributionResponse.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Internal Server Error",
                    content = @Content(
                            schema = @Schema(implementation = ErrorResponseDto.class)
                    )
            )
    })
    @GetMapping("/getall")
    public ResponseEntity<List<ContributionResponse>> getAllContributions(
            @RequestParam("year") Year year,
            @RequestParam("community") String communityName) {
        List<ContributionResponse> contributions = contributionService.getAllContributions(year, communityName);
        return ResponseEntity.ok(contributions);
    }
}