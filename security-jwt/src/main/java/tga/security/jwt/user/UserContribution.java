package tga.security.jwt.user;

import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name = "contribution")
public class UserContribution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contributionId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String month;
    @Temporal(TemporalType.DATE)
    private Date contributionDate;
    private int amount;
    private boolean isPaymentDone;
    public Long getContributionId() {
        return contributionId;
    }
    public void setContributionId(Long contributionId) {
        this.contributionId = contributionId;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public String getMonth() {
        return month;
    }
    public void setMonth(String month) {
        this.month = month;
    }
    public Date getContributionDate() {
        return contributionDate;
    }
    public void setContributionDate(Date contributionDate) {
        this.contributionDate = contributionDate;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public boolean isPaymentDone() {
        return isPaymentDone;
    }
    public void setPaymentDone(boolean paymentDone) {
        isPaymentDone = paymentDone;
    }
}
