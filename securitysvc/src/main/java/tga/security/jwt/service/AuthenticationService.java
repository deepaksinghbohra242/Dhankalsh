package tga.security.jwt.service;

import org.springframework.security.core.context.SecurityContextHolder;
import tga.security.jwt.controller.dto.*;
import tga.security.jwt.repo.UserRepository;
import tga.security.jwt.user.Role;
import tga.security.jwt.user.User;
import tga.security.jwt.utils.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public record AuthenticationService(UserRepository userRepository,
                                    PasswordEncoder passwordEncoder,
                                    AuthenticationManager authenticationManager) {
    private String extractCommunityNameFromToken() {
        User userDetails = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String communityName = userDetails.getCommunityName();
        return communityName;
    }
    public MemberResponse register(MemberRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("Email already exists");
        }
        final var user = new User(null,
                request.fullName(),
                request.communityName(),
                request.email(),
                passwordEncoder.encode(request.password()),
                request.role());
        User savedUser = userRepository.save(user);
        if (savedUser == null) {
            throw new RuntimeException("Failed to save user");
        }
        return new MemberResponse(user.getId(),
                user.getFullName(),
                user.getCommunityName(),
                user.getEmail(),
                user.getRole());
    }

    public AuthenticationResponse registerAdmin(RegisterRequest request) {
        if (userRepository.existsByCommunityName(request.communityName())) {
            throw new IllegalArgumentException("Community name already exists");
        }
        final var user = new User(null,
                request.fullName(),
                request.communityName(),
                request.email(),
                passwordEncoder.encode(request.password()),
                Role.ADMIN);
        userRepository.save(user);
        final var token = JwtService.generateToken(user);
        return new AuthenticationResponse(
                user.getId(),
                user.getFullName(),
                user.getCommunityName(),
                user.getEmail(),
                user.getRole(),
                token);
    }
    public AuthenticationResponse login(AuthenticationRequest request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        final var user = userRepository.findByEmail(request.email()).orElseThrow();
        final var token = JwtService.generateToken(user);

        return new AuthenticationResponse(
                user.getId(),
                user.getFullName(),
                user.getCommunityName(),
                user.getEmail(),
                user.getRole(),
                token);
    }

    public List<User> getUsersByCommunityName() {
        String communityName = extractCommunityNameFromToken();
        return userRepository.findByCommunityName(communityName);
    }

    public RegisterResponse getUserByUserId(Integer userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return new RegisterResponse(user.getFullName(), user.getCommunityName(), user.getEmail(), user.getRole());
        } else {
            throw new IllegalArgumentException("User not found with userId: " + userId);
        }
    }

    public Integer getTotalMember(String communityName){
        return (Integer) userRepository.countByCommunityName(communityName);
    }
}
