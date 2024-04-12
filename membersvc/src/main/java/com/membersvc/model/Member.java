package com.membersvc.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private String fullName;
    private String fatherName;
    private String motherName;
    private String profession;
    private String address;
    private Long phoneNumber;
    private Date dob;
    private String communityName;
    private Date startDate;

    public Member() {
    }

    public Member(Integer id, Integer userId, String fullName, String fatherName, String motherName, String profession, String address, Long phoneNumber, Date dob, String communityName, Date startDate) {
        this.id = id;
        this.userId = userId;
        this.fullName = fullName;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.profession = profession;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
        this.communityName = communityName;
        this.startDate = startDate;
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

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getCommunityName() {
        return communityName;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
}
