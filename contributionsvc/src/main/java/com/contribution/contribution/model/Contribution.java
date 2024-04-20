package com.contribution.contribution.model;

import jakarta.persistence.*;


import java.time.Month;
import java.time.Year;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "contribution")
public class Contribution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contributionId;
    private Integer userId;
    private Month contributionMonth;
    private String communityName;
    private Year year;
    private Date contributionDate;
    private Integer amount;
    @Enumerated(EnumType.STRING)
    private Payment isPaymentDone;
    public Contribution(){

    }
    public Contribution(Integer contributionId, Integer userId, Month contributionMonth, String communityName, Date contributionDate, Year year, Integer amount, Payment isPaymentDone) {
        this.contributionId = contributionId;
        this.userId = userId;
        this.contributionMonth = contributionMonth;
        this.communityName = communityName;
        this.contributionDate = contributionDate;
        this.year = year;
        this.amount = amount;
        this.isPaymentDone = isPaymentDone;
    }
    public Integer getContributionId() {
        return contributionId;
    }

    public void setContributionId(Integer contributionId) {
        this.contributionId = contributionId;
    }

    public Integer getUserId() {
        return userId;
    }
    public Month getContributionMonth() {
        return contributionMonth;
    }

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public void setContributionMonth(Month contributionMonth) {
        this.contributionMonth = contributionMonth;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public Date getContributionDate() {
        return contributionDate;
    }

    public void setContributionDate(Date contributionDate) {
        this.contributionDate = contributionDate;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Payment getPaymentDone() {
        return isPaymentDone;
    }

    public void setPaymentDone(Payment paymentDone) {
        isPaymentDone = paymentDone;
    }

    public Year getYear() {
        return year;
    }

    public void setYear(Year year) {
        this.year = year;
    }

    public Payment getIsPaymentDone() {
        return isPaymentDone;
    }

    public void setIsPaymentDone(Payment isPaymentDone) {
        this.isPaymentDone = isPaymentDone;
    }


    public void setMonths(List<Month> months) {
    }
}
