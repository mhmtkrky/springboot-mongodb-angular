package com.crud.crud.controller;

import com.crud.crud.entity.ApplicationEntity;
import com.crud.crud.service.ApplicationService;
import com.crud.crud.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/application")
public class ApplicationController implements BaseController<ApplicationEntity> {

    private final ApplicationService service;

    @Autowired
    public ApplicationController(ApplicationService service) {
        this.service = service;
    }

    @Override
    public BaseService<ApplicationEntity> getService() {
        return service;
    }
}
