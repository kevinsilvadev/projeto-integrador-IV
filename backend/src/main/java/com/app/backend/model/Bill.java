package com.app.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.web.PortResolverImpl;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;


@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    @Id
    private String id;

    @NotBlank
    @NotNull
    private Company company;

    @NotBlank
    @NotNull
    private Customer customer;

    @NotBlank
    @NotNull
    private String documentNumber;

    @NotBlank
    @NotNull
    private String barCodeNumber;

    @NotBlank
    @NotNull
    private String dueDate;

    @NotBlank
    @NotNull
    private double documentValue;

    @NotBlank
    @NotNull
    private double discount;

    @NotBlank
    @NotNull
    private double penalty;

    @NotBlank
    @NotNull
    private double amountCharged;

    @NotBlank
    @NotNull
    private String instructions;

    @NotBlank
    @NotNull
    private String uf;

    @NotBlank
    @NotNull
    private String processingDate;

}
