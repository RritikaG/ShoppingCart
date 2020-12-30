package com.caseStudy.ecom.Repository;

import com.caseStudy.ecom.modal.Cart;
import com.caseStudy.ecom.modal.Users;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface userRepository extends JpaRepository<Users, Long> {


Optional<Users> findByEmail(String email);

}
