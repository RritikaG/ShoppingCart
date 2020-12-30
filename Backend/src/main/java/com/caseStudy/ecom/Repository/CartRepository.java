package com.caseStudy.ecom.Repository;

import com.caseStudy.ecom.modal.Cart;
import com.caseStudy.ecom.modal.Users;
import com.caseStudy.ecom.modal.items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByUsersAndItems_Active(Optional<Users> users, int i);

    Optional<Cart> findByUsersAndItems(Optional<Users> user, Optional<items> item);

    List<Cart> findAllByUsers(Users users);
}
