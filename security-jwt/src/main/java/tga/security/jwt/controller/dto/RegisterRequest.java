package tga.security.jwt.controller.dto;

public record RegisterRequest(String fullName,String communityName,String phoneNumber, String address, String email, String password) {
}
