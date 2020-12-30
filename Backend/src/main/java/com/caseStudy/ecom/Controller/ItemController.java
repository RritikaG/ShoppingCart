package com.caseStudy.ecom.Controller;

import com.caseStudy.ecom.Repository.itemRepository;
import com.caseStudy.ecom.exception.ResourceNotFoundException;
import com.caseStudy.ecom.modal.items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/api")
public class ItemController {

    private itemRepository itemRepository;
    @Autowired
    public ItemController(itemRepository itemRepository)
    {
        this.itemRepository = itemRepository;
    }


    // Get All Notes
    @GetMapping("/showitems")
    public List<items> getAllitems() {
        return itemRepository.findAll();
    }

    // Create a new Note
    @PostMapping("/addnewitem")
    public items createitem(@Valid @RequestBody items items) {
        return itemRepository.save(items);
    }

    // Get a Single Note
    @GetMapping("/find-by-id/{id}")
    public items getitemById(@PathVariable(value = "id") Long ProductId) {
        return itemRepository.findById(ProductId)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", ProductId));
    }


    @GetMapping("/find-by-name/{name}")
    public List<items> getitemByName(@PathVariable(value = "name") String name) {

        return itemRepository.findAllByNameContaining(name);
    }

    @GetMapping("/find-by-category/{category}")
    public List<items> getitemByCategory(@PathVariable(value = "category") String category) {
        return itemRepository.findAllByCategory(category);
    }
    @GetMapping("/find-by-price/{r1}/{r2}")
    public List<items> getitemByprice(@PathVariable(value = "r1")Double r1, @PathVariable(value = "r2")Double r2) {
        return itemRepository.findAllByPriceBetween(r1,r2);

    }
    @GetMapping("/find-by-price-and-category/{r1}/{r2}/{category}")
    public List<items> getitemBypriceandcategory(@PathVariable(value = "r1")Double r1, @PathVariable(value = "r2")Double r2, @PathVariable(value ="category")String category) {
        return itemRepository.findAllByPriceBetweenAndCategory(r1,r2,category);

    }
    // Update a item

    @PutMapping("/updateitem/{id}")
    public items updateNote(@PathVariable(value = "id") Long ProductId,
                            @Valid @RequestBody items noteDetails) {

        items item = itemRepository.findById(ProductId)
                .orElseThrow(() -> new ResourceNotFoundException("Item", "product-id", ProductId));

        item.setCategory(noteDetails.getCategory());
        item.setPrice(noteDetails.getPrice());
        item.setName(noteDetails.getName());
        item.setImage(noteDetails.getImage());
        item.setDetails(noteDetails.getDetails());
        item.setCategory(noteDetails.getCategory());
        item.setSub_category(noteDetails.getSub_category());
        items updateditem = itemRepository.save(item);
        return updateditem;
    }
    // Delete a item
    @DeleteMapping("/delete-item/{id}")
    public ResponseEntity<?> deleteitem(@PathVariable(value = "id") Long ProductId)
    {
        items item = itemRepository.findById(ProductId)
                .orElseThrow(() -> new ResourceNotFoundException("Note", "id", ProductId));

        itemRepository.delete(item);

        return ResponseEntity.ok().build();
    }
}
