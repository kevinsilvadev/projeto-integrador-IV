package com.app.backend.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@EqualsAndHashCode(exclude = "id")
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Company {

    @Id
    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String cnpj;

    @NotNull
    @NotBlank
    private String imgLogo;

}
