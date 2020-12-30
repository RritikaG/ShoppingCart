package com.caseStudy.ecom.Repository;

import com.caseStudy.ecom.modal.OrderHistory;
import com.caseStudy.ecom.modal.Users;
import org.hibernate.criterion.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface OrderHistoryRepository extends JpaRepository<OrderHistory,Long> {
    List<OrderHistory> findByUsersAndItems_Active(Optional<Users> users, int i);
}
