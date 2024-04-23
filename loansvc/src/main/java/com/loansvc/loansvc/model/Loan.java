package com.loansvc.loansvc.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String communityName;
    private Double amount;
    private Date dateOfTaking ;
    private Date deadline;

    public Loan(Integer id, Integer userId, String communityName, Double amount, Date dateOfTaking, Date deadline) {
        this.id = id;
        this.userId = userId;
        this.communityName = communityName;
        this.amount = amount;
        this.dateOfTaking = dateOfTaking;
        this.deadline = deadline;
    }

    public Loan() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Date getDateOfTaking() {
        return dateOfTaking;
    }

    public void setDateOfTaking(Date dateOfTaking) {
        this.dateOfTaking = dateOfTaking;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }
}
