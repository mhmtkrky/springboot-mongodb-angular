package com.crud.crud.controller;

import com.crud.crud.entity.AuditEntity;
import com.crud.crud.exception.ResourceNotFoundException;
import com.crud.crud.service.BaseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
public interface BaseController<M extends AuditEntity> {

    BaseService<M> getService();

    @GetMapping("/")
    default ResponseEntity<List<M>> getList() {
        return getService().getList();
    }

    @PostMapping("/")
    default ResponseEntity<M> create(@RequestBody @Valid M model) {
        return getService().create(model);
    }

    @PutMapping("/")
    default ResponseEntity<M> edit(@Valid @RequestBody M model) throws ResourceNotFoundException {
        return getService().edit(model);
    }

    @GetMapping("/{id}")
    default ResponseEntity<M> getById(@Valid @PathVariable Long id) throws ResourceNotFoundException {
        return getService().getById(id);
    }

    @DeleteMapping("/{id}")
    default ResponseEntity<?> delete(@Valid @PathVariable Long id) throws ResourceNotFoundException {
        return getService().delete(id)
                ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
}
