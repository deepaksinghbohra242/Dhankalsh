package tga.security.jwt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tga.security.jwt.service.ContributionService;

@RestController
@RequestMapping("/api/v1/auth")
public record ContributionController(ContributionService contributionService) {

    @GetMapping("/contribute")
    public String test(){
        return "ok";
    }
}
