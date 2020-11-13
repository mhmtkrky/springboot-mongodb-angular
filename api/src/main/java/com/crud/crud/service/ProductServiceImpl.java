package com.crud.crud.service;

import com.crud.crud.entity.ApplicationEntity;
import com.crud.crud.entity.ProductEntity;
import com.crud.crud.exception.ResourceNotFoundException;
import com.crud.crud.repository.ApplicationRepository;
import com.crud.crud.repository.ProductRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;
    private final ApplicationRepository applicationRepository;
    private final SequenceGeneratorService sequenceGeneratorService;

    @Autowired
    public ProductServiceImpl(ProductRepository repository
            , ApplicationRepository applicationRepository
            , SequenceGeneratorService sequenceGeneratorService) {
        this.repository = repository;
        this.applicationRepository = applicationRepository;
        this.sequenceGeneratorService = sequenceGeneratorService;
    }


    @Override
    public MongoRepository<ProductEntity, Long> getRepository() {
        return repository;
    }

    @Override
    public SequenceGeneratorService sequenceGenerator() {
        return sequenceGeneratorService;
    }

    @Override
    public ProductEntity register(Long productId, Long applicationId) throws ResourceNotFoundException {
        ProductEntity productEntity = repository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Not Found " + productId));

        if(productEntity.isUsed()) {
            throw new ResourceNotFoundException("Product Registered another Application " + productId);
        }

        ApplicationEntity applicationEntity = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found " + applicationId));
        applicationEntity.getProducts().add(productEntity);
        productEntity.setUsed(true);
        applicationRepository.save(applicationEntity);
        return repository.save(productEntity);
    }

    @Override
    public ProductEntity deleteRegistered(Long productId, Long applicationId) {
        ProductEntity productEntity = repository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Not Found " + productId));
        ApplicationEntity applicationEntity = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application Not Found " + applicationId));
        applicationEntity.getProducts().remove(productEntity);
        applicationRepository.save(applicationEntity);
        productEntity.setUsed(false);
        return repository.save(productEntity);
    }

}
