package com.app.backend.model;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@EqualsAndHashCode(exclude = "id")
@Document
public class Company {

    @Id
    private String id;

    @NotBlank
    private String cnpj;

    @NotBlank
    @DBRef
    private String companyName;




}