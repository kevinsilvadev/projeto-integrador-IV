package com.app.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.lang.annotation.Documented;

@Data
@Document
public class Client implements Serializable {

    @Id
    private String cpf;

    @NotBlank
    private String nome;

    @Email
    @NotBlank
    private String email;
}
