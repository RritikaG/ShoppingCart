package com.caseStudy.ecom.modal;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class items implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ProductId;
    private String name;
    private double price;
    private String details;
    private String image;
    private String category;
    private String sub_category;
    @Column(nullable = false, columnDefinition = "int default '1'")
    private int active;
    @Embedded
    private com.caseStudy.ecom.modal.itemDetails itemDetails;

    items() {

    }

    public Long getProductId() {
        return ProductId;
    }

    public void setProductId(Long productId) {
        ProductId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSub_category() {
        return sub_category;
    }

    public void setSub_category(String sub_category) {
        this.sub_category = sub_category;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    public com.caseStudy.ecom.modal.itemDetails getItemDetails() {
        return itemDetails;
    }

    public void setItemDetails(com.caseStudy.ecom.modal.itemDetails itemDetails) {
        this.itemDetails = itemDetails;
    }
}
