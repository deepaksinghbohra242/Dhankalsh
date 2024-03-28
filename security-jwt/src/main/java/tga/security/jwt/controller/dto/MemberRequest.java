package tga.security.jwt.controller.dto;

import tga.security.jwt.user.Role;

public record MemberRequest(String fullName, String communityName, String phoneNumber, String address, String email, String password,
                            Role role) {
}
