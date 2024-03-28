package tga.security.jwt.controller.dto;

import tga.security.jwt.user.Role;

public record AuthenticationResponse(String fullName, String communityName, String phoneNumber, String address, String email,
                                     Role role, String token) {
}
