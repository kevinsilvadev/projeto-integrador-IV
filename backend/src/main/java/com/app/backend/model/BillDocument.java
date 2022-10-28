package com.app.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillDocument {

    @Id
    private String id;

    @NotBlank
    @NotNull
    private String url;

    @NotBlank
    @NotNull
    private String documentNumber;
}
