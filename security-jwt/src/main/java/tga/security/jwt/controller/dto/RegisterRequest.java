package tga.security.jwt.controller.dto;

public record RegisterRequest(String fullName,String communityName, String email, String password) {
}
