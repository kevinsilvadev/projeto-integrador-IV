package com.app.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;



@Document
@Data
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotBlank
    @NotNull
    private String cpf;

    @NotBlank
    @NotNull
    private String cnpj;

    @NotBlank
    @NotNull
    private String name;

    @NotBlank
    @NotNull
    private String senha;

    @Email
    @NotBlank
    @NotNull
    private String email;

    @DBRef
    List<Company> companyList = new ArrayList<>();

    public Customer(String cpf, String cnpj, String name, String senha, String email) {
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.name = name;
        this.senha = senha;
        this.email = email;
    }
}
