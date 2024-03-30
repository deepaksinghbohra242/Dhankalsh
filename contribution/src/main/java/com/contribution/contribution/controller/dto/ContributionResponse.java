package com.contribution.contribution.controller.dto;

import java.time.Month;
import java.time.Year;
import java.util.List;

public record ContributionResponse(Integer userId, Year year, List<Integer> contributions) {}


