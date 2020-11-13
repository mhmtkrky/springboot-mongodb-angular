package com.crud.crud.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

import static com.crud.crud.constraints.ApplicationConstraints.*;

@Data
@EqualsAndHashCode(callSuper = true)
@Document(collection = TABLE_NAME)
public class ApplicationEntity extends AuditEntity {

    @Transient
    public static final String SEQUENCE_NAME = "application_sequence";

    @NotBlank
    @Field(name = COLUMN_NAME)
    @Indexed(unique = true)
    @Size(max = COLUMN_NAME_MAX_SIZE)
    private String name;

    @NotBlank
    @Field(name = COLUMN_DESCRIPTION)
    @Size(max = COLUMN_DESCRIPTION_MAX_SIZE)
    private String description;

    @Field(name = COLUMN_PRODUCTS)
    private Set<ProductEntity> products = new HashSet<>();

    @Override
    public String toString() {
        return "ApplicationEntity [id=" + getId() + ", name=" + name
                + ", desc=" + description + "]";
    }
}