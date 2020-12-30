package com.caseStudy.ecom.Services;


import com.caseStudy.ecom.Repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class CurrentUserservice {

    @Autowired
    userRepository userRepository;

    public Long getUserid(Principal principal) {
        String email = principal.getName();
        Long id = userRepository.findByEmail(email).get().getUserid();
        return id;
    }
}
