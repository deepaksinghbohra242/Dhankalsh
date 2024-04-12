package tga.security.jwt.controller.dto;

import tga.security.jwt.user.Role;

public record RegisterResponse(String fullName, String communityName, String email,
                               Role role) {
}
