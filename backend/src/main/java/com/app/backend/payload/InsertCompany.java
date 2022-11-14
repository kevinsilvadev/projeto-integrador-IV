package com.app.backend.payload;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@Data
public class InsertCompany {
    @NotBlank
    private String cpf;

    @NotBlank
    private String cnpj;

    private String urlPhoto;

    @NotBlank
    @Size(min = 3, max = 20)
    private String name;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private Set<String> roles;

    @NotBlank
    @Size(min = 6, max = 40)
    private String senha;

    private List<List> companyList;


}
