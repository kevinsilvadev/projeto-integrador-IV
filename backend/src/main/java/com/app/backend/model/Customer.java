package com.app.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
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
    private String name;

    @Email
    @NotBlank
    @NotNull
    private String email;

    public Customer(String cpf, String name, String email) {
        this.cpf = cpf;
        this.name = name;
        this.email = email;
    }


    //List<SecondWay> secondWayList = new ArrayList<>();

    List<Company> companyList = new ArrayList<>();
}
