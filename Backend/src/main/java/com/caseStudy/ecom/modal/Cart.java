package com.caseStudy.ecom.modal;

import javax.persistence.*;
import java.util.Optional;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private items items;
    @ManyToOne
    private Users users;
    @Column
    private int quantity;

    public Cart() {
    }

    public Cart(items items, Users users, int quantity) {
        this.items = items;
        this.users = users;
        this.quantity = quantity;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public items getItems() {
        return items;
    }

    public void setItems(items items) {
        this.items = items;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

}
