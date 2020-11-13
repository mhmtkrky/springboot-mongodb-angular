package com.crud.crud.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Date;

@Data
@JsonIgnoreProperties(
        value = {"createdAt", "updatedAt"},
        allowGetters = true
)
public abstract class AuditEntity implements Serializable {

    @CreatedDate
    @Field(name = "createdAt")
    private Date createdAt;

    @LastModifiedDate
    @Field(name = "updatedAt")
    private Date updatedAt;

    @Id
    private Long id;
}