package com.contribution.contribution.controller.dto;

import com.contribution.contribution.model.Payment;

import java.time.Month;
import java.time.Year;

public record ContributionRequest(Integer userId, Month month , Integer year , Integer amount , Payment isPaymentDone ,String communityName) {
}
