package com.app.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Data
@Document
public class Client implements Serializable {

    @Id
    private String cpf;

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    List<Company> companyList = new ArrayList<>();
}
