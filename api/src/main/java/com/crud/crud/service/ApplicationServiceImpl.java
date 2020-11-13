package com.crud.crud.service;

import com.crud.crud.entity.ApplicationEntity;
import com.crud.crud.repository.ApplicationRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
public class ApplicationServiceImpl implements ApplicationService {

    private final SequenceGeneratorService sequenceGeneratorService;
    private final ApplicationRepository repository;

    @Autowired
    public ApplicationServiceImpl(SequenceGeneratorService sequenceGeneratorService, ApplicationRepository repository) {
        this.sequenceGeneratorService = sequenceGeneratorService;
        this.repository = repository;
    }

    @Override
    public MongoRepository<ApplicationEntity, Long> getRepository() {
        return repository;
    }

    @Override
    public SequenceGeneratorService sequenceGenerator() {
        return sequenceGeneratorService;
    }
}
