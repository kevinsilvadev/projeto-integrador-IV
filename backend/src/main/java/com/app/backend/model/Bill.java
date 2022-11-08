package com.app.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private String companyCnpj;

    private String customerCnpj;

    private String customerCpf;

    private String documentNumber;

    private double documentValue;

    private double discount;

    private double penalty;

    private double amountCharged;

    /*
    @NotBlank
    @NotNull
    private String barCodeNumber;

    @NotBlank
    @NotNull
    private String dueDate;

    @NotBlank
    @NotNull
    private String instructions;

    @NotBlank
    @NotNull
    private String uf;

    @NotBlank
    @NotNull
    private String processingDate;
     */

}
