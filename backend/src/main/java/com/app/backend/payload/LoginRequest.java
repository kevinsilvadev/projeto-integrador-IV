package com.app.backend.payload;


import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginRequest {
    @NotBlank
    private String cpf;

    @NotBlank
    private String senha;

}