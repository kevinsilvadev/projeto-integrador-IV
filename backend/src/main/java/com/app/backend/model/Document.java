package com.app.backend.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@org.springframework.data.mongodb.core.mapping.Document
@Data
public class Document {

    @NotBlank
    private Company companyName;

    @NotBlank
    private String address;

    @NotBlank
    private Data date;

    List<String> expenses =  new ArrayList<>();

}
