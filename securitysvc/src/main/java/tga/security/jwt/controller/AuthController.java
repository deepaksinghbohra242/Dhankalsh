package tga.security.jwt.controller;

import jakarta.websocket.server.PathParam;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import tga.security.jwt.controller.dto.*;
import tga.security.jwt.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import tga.security.jwt.user.User;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
public record AuthController(AuthenticationService authenticationService) {

    @PostMapping("/register/addnew")
    public ResponseEntity<MemberResponse> register(@RequestBody MemberRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationResponse> registerAdmin(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.registerAdmin(request));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticationService.login(request));
    }
    @GetMapping("/allusers")
    public ResponseEntity<List<User>> getUsersByCommunityName(){
        return ResponseEntity.ok(authenticationService.getUsersByCommunityName());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<RegisterResponse> getUserByUserId(@PathVariable("userId") Integer userId){
        return ResponseEntity.ok(authenticationService.getUserByUserId(userId));
    }

    @GetMapping("/totalmember")
    public ResponseEntity<Integer> getTotalContribution(
            @RequestParam("community") String communityName) {
        Integer totalContribution = authenticationService.getTotalMember(communityName);
        return ResponseEntity.ok(totalContribution);
    }

}
