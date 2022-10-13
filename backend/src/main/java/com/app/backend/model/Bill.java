package com.app.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.web.PortResolverImpl;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;


@Document
@Data
public class Bill {

    @Id
    private String id;

    @NotBlank
    private String codigoDaVia;

    @NotBlank
    @DBRef
    private Company companyName;

    @NotBlank
    private String address;

    private String date;

    List<String> expenses =  new ArrayList<>();


}
