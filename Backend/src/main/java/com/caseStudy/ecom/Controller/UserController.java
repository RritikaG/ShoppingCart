package com.caseStudy.ecom.Controller;
import com.caseStudy.ecom.Repository.userRepository;
import com.caseStudy.ecom.Services.CartService;
import com.caseStudy.ecom.Services.CurrentUserservice;
import com.caseStudy.ecom.exception.ResourceNotFoundException;
import com.caseStudy.ecom.modal.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin()
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private userRepository userRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private CurrentUserservice currentUserservice;

    @GetMapping("/get1")

    public String getallUser(){

        return "\"succesfully logedin\"";
    }

    @PostMapping("/adduser")
    public Users createuser(@Valid @RequestBody Users user) {
        user.setActive(1);
        user.setRole("user");
        return userRepository.save(user);
    }
    @PutMapping("/updateuser/{id}")
    public Users updateUser(@PathVariable(value = "id") Long userid,
                            @Valid @RequestBody Users userDetails) {

        Users user = userRepository.findById(userid)
                .orElseThrow(() -> new ResourceNotFoundException("User", "user-id", userid));

        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setFirstname(userDetails.getFirstname());
        Users updateduser = userRepository.save(user);
        return updateduser;
    }
    @GetMapping("/getuserdetails")
    public Optional<Users> getuserdetails(Principal principal) {
        return cartService.getuserdetails(currentUserservice.getUserid(principal));
    }
}
