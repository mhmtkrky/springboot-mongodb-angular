package com.crud.crud.entity;

import com.crud.crud.enums.ApiType;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static com.crud.crud.constraints.ApplicationConstraints.COLUMN_NAME;
import static com.crud.crud.constraints.ProductConstraints.*;


@EqualsAndHashCode(callSuper = true)
@Data
@Document(collection = TABLE_NAME)
public class ProductEntity extends AuditEntity {

    @Transient
    public static final String SEQUENCE_NAME = "product_sequence";

    @NotBlank
    @Field(name = COLUMN_NAME)
    @Indexed(unique = true)
    @Size(max = COLUMN_NAME_MAX_SIZE)
    private String name;

    @NotBlank
    @Field(name = COLUMN_DESCRIPTION)
    @Size(max = COLUMN_DESCRIPTION_MAX_SIZE)
    private String description;

    @NotBlank
    @Field(name = COLUMN_URL)
    private String url;

    @NotNull
    @Field(name = COLUMN_API_TYPE)
    private ApiType apiType;

    @Field(name = COLUMN_IS_USED)
    private boolean used = false;

    @Override
    public String toString() {
        return "ProductEntity [id=" + getId() + ", name=" + name
                + ", desc=" + description + ", url="
                + url + "api type=" + apiType + "]";
    }

}
