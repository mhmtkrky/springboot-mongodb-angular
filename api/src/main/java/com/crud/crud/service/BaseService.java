package com.crud.crud.service;

import com.crud.crud.entity.AuditEntity;
import com.crud.crud.exception.ResourceNotFoundException;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Validated
public interface BaseService<M extends AuditEntity> {

    MongoRepository<M, Long> getRepository();

    SequenceGeneratorService sequenceGenerator();

    default ResponseEntity<List<M>> getList() {
        List<M> all = getRepository().findAll();
        return ResponseEntity.ok(all);
    }

    default ResponseEntity<M> create(M model) {
        model.setId(sequenceGenerator().generateSequence(model.getClass().getSimpleName().toLowerCase() + "_sequence"));
        model.setCreatedAt(new Date());
        M entity = getRepository().save(model);
        return ResponseEntity.ok(entity);
    }

    default ResponseEntity<M> edit(M model) throws ResourceNotFoundException {
        model.setUpdatedAt(new Date());
        if (model.getId() == null || !getRepository().existsById(model.getId()))
            throw new ResourceNotFoundException(model.getClass().getSimpleName()
                    + " not found with id " + model.getId());
        M entity = getRepository().save(model);
        return ResponseEntity.ok(entity);
    }

    default ResponseEntity<M> getById(Long id) throws ResourceNotFoundException {
        Optional<M> entity = getRepository().findById(id);
        return entity.map(ResponseEntity::ok).orElseThrow(()
                -> new ResourceNotFoundException("Resource Not Found Exception with id " + id));

    }

    default boolean delete(Long id) throws ResourceNotFoundException {
        return getRepository().findById(id)
                .map(x -> {
                    getRepository()
                            .delete(x);
                    return true;
                }).orElseThrow(()
                        -> new ResourceNotFoundException("Resource not found with id " + id));
    }
}
