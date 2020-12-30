package com.caseStudy.ecom.Services;

import com.caseStudy.ecom.Repository.CartRepository;
import com.caseStudy.ecom.Repository.OrderHistoryRepository;
import com.caseStudy.ecom.Repository.itemRepository;
import com.caseStudy.ecom.Repository.userRepository;
import com.caseStudy.ecom.modal.Cart;
import com.caseStudy.ecom.modal.OrderHistory;
import com.caseStudy.ecom.modal.Users;
import com.caseStudy.ecom.modal.items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    itemRepository itemRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    userRepository userRepository;

    @Autowired
    OrderHistoryRepository orderHistoryRepository;


    public String addtocart(Long userid, Long product_id) {
        Optional<items> item = itemRepository.findById(product_id);
        Optional<Users> user = userRepository.findById((userid));
        if (cartRepository.findByUsersAndItems(user, item).isPresent()) {
            Cart cart= cartRepository.findByUsersAndItems(user,item).get();
            cart.setQuantity(cart.getQuantity()+1);
            cartRepository.save(cart);
            return "This item is already present in your cart";
        } else {
            Cart cart = new Cart();
            cart.setItems(item.get());
            cart.setUsers(user.get());
            cart.setQuantity(1);
            cartRepository.save(cart);
            return "Successfully added";
        }
    }


    public Optional<Cart> removefromcart(Long getuserid, Long product_id) {
        Optional<items> item = itemRepository.findById(product_id);
        Optional<Users> user = userRepository.findById((getuserid));
//        if (cartRepository.findByUsersAndItems(user, item).get().getQuantity() <= 1) {
           Cart car = cartRepository.findByUsersAndItems(user,item).get();
            cartRepository.delete(car);

//        }
//        else {
//            Cart cart=  cartRepository.findByUsersAndItems(user,item).get();
//            cart.setQuantity(cart.getQuantity()-1);
//            cartRepository.save(cart);
//        }
        return cartRepository.findByUsersAndItems(user,item);
    }

    public String increasequantity(Long userid, Long product_id) {
        Optional<items> item = itemRepository.findById(product_id);
        Optional<Users> user = userRepository.findById(userid);

        if (cartRepository.findByUsersAndItems(user, item).isPresent()) {
            Cart cart = cartRepository.findByUsersAndItems(user, item).get();
            cart.setQuantity(cart.getQuantity() + 1);
            cartRepository.save(cart);
        }
        return "\"addedddd\"";

    }
    public String decreasequantity(Long userid, Long product_id) {
        Optional<items> item = itemRepository.findById(product_id);
        Optional<Users> user = userRepository.findById(userid);

        if (cartRepository.findByUsersAndItems(user, item).get().getQuantity() <= 1 ) {
            Cart car = cartRepository.findByUsersAndItems(user, item).get();
            cartRepository.delete(car);
        }
        else if (cartRepository.findByUsersAndItems(user,item).isPresent()) {
            Cart cart = cartRepository.findByUsersAndItems(user,item).get();
            cart.setQuantity(cart.getQuantity()-1);
            cartRepository.save(cart);
        }
        return "\"decreased\"";
    }




    public String clearcart(Long getuserid, Principal principal) {
        Optional<Users> users=userRepository.findById(getuserid);
        List<Cart> cartList =cartRepository.findByUsersAndItems_Active(users,1);
        for (Cart cart : cartList){
            cartRepository.deleteById(cart.getId());
        }
        return "cart Cleared";
    }

    public List<Cart> showcart(Long userid) {
        Optional<Users> users=userRepository.findById(userid);
        return cartRepository.findByUsersAndItems_Active(users,1);

    }
    public double checkout(Long getuserid, Principal principal)
    {
        Optional<Users> users = userRepository.findById(getuserid);
        List<Cart> cartList =cartRepository.findAllByUsers(users.get());
        for(Cart car : cartList){
            OrderHistory order = new OrderHistory();
            order.setItems(car.getItems());
            double p =car.getItems().getPrice();
            order.setUsers(users.get());
            order.setQuantity(car.getQuantity());
            order.setPrice((int) (car.getQuantity()*p));
            order.setDate();
            orderHistoryRepository.save(order);
        }
        clearcart(getuserid,principal);
        return 0;
    }

    public List<OrderHistory> showorderHistory(Long userid, Principal principal) {
        Optional<Users> users = userRepository.findById(userid);
        return orderHistoryRepository.findByUsersAndItems_Active(users,1);
    }

    public Optional<Users> getuserdetails(Long userid) {
        Optional<Users> users = userRepository.findById(userid);
        return userRepository.findById(userid);
    }

}

