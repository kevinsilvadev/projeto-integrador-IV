package com.app.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.text.DecimalFormat;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;

import java.util.Date;
import java.util.Random;


@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bill {

    @Id
    private String id;

    @DBRef
    private Company company;

    @DBRef
    private Customer customer;

    private String documentNumber;

    private double documentValue;

    private double discount;

    private double penalty;

    private double amountCharged;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dueDate;

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

    public Bill (Customer customer, Company company){
        this.customer = customer;
        this.company = company;
        this.documentNumber = generateDocumentNumber();
        this.discount = generateDiscount();
        this.penalty = generatePenalty();
        this.documentValue = generateDocumentValue();
        this.amountCharged = generateAmountCharged(documentValue, discount, penalty);
        this.dueDate = new Date();
    }

    private String generateDocumentNumber(){
        String ret = "";
        Random random = new Random();

        for(int i =0;i<54;i++){
            if(i == 5 || i == 17 || i == 30)
                ret = ret + '.';
            else if(i == 11 || i ==24 || i == 37 || i == 39)
                ret = ret + ' ';
            else
                ret = ret + random.nextInt(9);
        }
        return ret;
    }

    private int generateDiscount() {
        if(new Random().nextInt(2) == 0)
            return 0;
        return new Random().nextInt(10);
    }

    private int generatePenalty() {
        if(new Random().nextInt(2) == 0)
            return 0;
        return new Random().nextInt(10);
    }

    private double generateDocumentValue() {
        DecimalFormat format = new DecimalFormat("##.##");
        return Double.parseDouble(format.format(new Random().nextDouble()*100).replace(',','.'));
    }

    private double generateAmountCharged(double documentValue, double discount, double penalty){
        DecimalFormat format = new DecimalFormat("##.##");
        return Double.parseDouble(format.format(documentValue * (1 - (discount * 0.01) + (penalty * 0.01))).replace(',','.'));
    }
}
