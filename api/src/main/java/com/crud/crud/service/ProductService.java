package com.crud.crud.service;

import com.crud.crud.entity.ProductEntity;
import com.crud.crud.exception.ResourceNotFoundException;
import org.springframework.validation.annotation.Validated;

@Validated
public interface ProductService extends BaseService<ProductEntity>  {
    ProductEntity register(Long productId, Long applicationId) throws ResourceNotFoundException;
    ProductEntity deleteRegistered(Long productId, Long applicationId);
}
