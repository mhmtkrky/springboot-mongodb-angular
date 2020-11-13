package com.crud.crud.model;

import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
public class RegisterProduct {
    @NotNull
    private Long productId;
    @NotNull
    private Long applicationId;
}
