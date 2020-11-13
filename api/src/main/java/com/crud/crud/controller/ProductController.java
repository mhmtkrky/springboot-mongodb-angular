package com.crud.crud.controller;

import com.crud.crud.entity.ProductEntity;
import com.crud.crud.exception.ResourceNotFoundException;
import com.crud.crud.model.RegisterProduct;
import com.crud.crud.service.BaseService;
import com.crud.crud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
public class ProductController implements BaseController<ProductEntity> {

    private final ProductService service;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @Override
    public BaseService<ProductEntity> getService() {
        return service;
    }

    @PostMapping("/register")
    public ProductEntity register(@RequestBody @Valid RegisterProduct model) throws ResourceNotFoundException{
        return service.register(model.getProductId(), model.getApplicationId());
    }

    @PostMapping("/deleteRegistered")
    public ProductEntity deleteRegistered(@RequestBody @Valid RegisterProduct model) throws ResourceNotFoundException {
        return service.deleteRegistered(model.getProductId(), model.getApplicationId());
    }
}
