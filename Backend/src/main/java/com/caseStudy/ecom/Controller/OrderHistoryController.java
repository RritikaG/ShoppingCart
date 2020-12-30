package com.caseStudy.ecom.Controller;


import com.caseStudy.ecom.Repository.CartRepository;
import com.caseStudy.ecom.Repository.OrderHistoryRepository;
import com.caseStudy.ecom.Services.CartService;
import com.caseStudy.ecom.Services.CurrentUserservice;
import com.caseStudy.ecom.modal.OrderHistory;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping(value = "/history")
public class OrderHistoryController {

    @Autowired
    CartService cartService;
    @Autowired
    OrderHistoryRepository orderHistoryRepository;
    @Autowired
    CurrentUserservice currentUserservice;


    @Autowired
    public OrderHistoryController(CartService cartService, CurrentUserservice currentUserservice){
        this.cartService=cartService;
        this.currentUserservice=currentUserservice;
    }
    @RequestMapping(value = "/showorderhistory/recieve", method = RequestMethod.GET)
    @ResponseBody
    public List<OrderHistory> showorderhistory(Principal principal){
        return cartService.showorderHistory( currentUserservice.getUserid(principal),principal);
    }
}
