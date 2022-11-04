package com.app.backend.model;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@EqualsAndHashCode(exclude = "id")
@Document
@AllArgsConstructor
public class Company {

    @Id
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String cnpj;

    @NotBlank
    @NotNull
    private String agency;

    @NotNull
    @NotBlank
    private String imgLogo;

}
