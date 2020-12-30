package com.caseStudy.ecom.Repository;


import com.caseStudy.ecom.modal.items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface itemRepository extends JpaRepository<items, Long> {


    @Override
    List<items> findAll();

    List<items> findAllByNameContaining(String name);
    List<items> findAllByCategory(String Category);
    List<items> findAllByPriceBetween(Double r1, Double r2);
    List<items> findAllByPriceBetweenAndCategory(Double r1,Double r2,String Category);
}
