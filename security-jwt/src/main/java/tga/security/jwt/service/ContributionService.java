package tga.security.jwt.service;

import org.springframework.stereotype.Service;
import tga.security.jwt.repo.ContributionRepository;
import tga.security.jwt.repo.UserRepository;
@Service
public record ContributionService(UserRepository userRepository,
                                  ContributionRepository contributionRepository) {



}
