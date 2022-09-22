package com.app.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Data
@Document
public class Company {

    @Id
    @NotBlank
    private String cnpj;

    @NotBlank
    private String companyName;

}
