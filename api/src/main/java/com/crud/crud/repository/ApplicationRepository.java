package com.crud.crud.repository;

import com.crud.crud.entity.ApplicationEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends MongoRepository<ApplicationEntity, Long> {
}