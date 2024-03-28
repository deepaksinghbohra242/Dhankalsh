package tga.security.jwt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tga.security.jwt.user.UserContribution;

public interface ContributionRepository extends JpaRepository<UserContribution, Long> {

}
