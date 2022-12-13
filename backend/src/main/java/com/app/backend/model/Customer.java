package com.app.backend.model;

import com.app.backend.repository.CompanyRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.*;


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
    private String cnpj;

    private String urlPhoto;

    @NotBlank
    @NotNull
    private String name;

    @NotNull
    private String senha;

    @Email
    @NotBlank
    @NotNull
    private String email;

    @NotNull
    private String username;

    @DBRef
    private Set<Role> roles = new HashSet<>();

    @DBRef
    List<Company> companyList = new ArrayList<>();

    @Autowired
    CompanyRepository companyRepository;

    private String qrcode;



    public Customer(){
    }

    public Customer(String cpf, String cnpj, String urlPhoto, String name, String senha, String email) {
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.urlPhoto = urlPhoto;
        this.name = name;
        this.senha = senha;
        this.email = email;
        this.qrcode = getAlphaNumericString();
    }
    public Customer(String id, String cpf, String urlPhoto, String name, String email, List<Company> companyList) {
        this.urlPhoto = urlPhoto;
        this.name = name;
        this.email = email;
        this.companyList = companyList;
    }

    static String getAlphaNumericString()
    {
        int n = 30;
        // length is bounded by 256 Character
        byte[] array = new byte[256];
        new Random().nextBytes(array);

        String randomString
                = new String(array, Charset.forName("UTF-8"));

        // Create a StringBuffer to store the result
        StringBuffer r = new StringBuffer();

        // remove all spacial char
        String  AlphaNumericString
                = randomString
                .replaceAll("[^A-Za-z0-9]", "");

        // Append first 20 alphanumeric characters
        // from the generated random String into the result
        for (int k = 0; k < AlphaNumericString.length(); k++) {

            if (Character.isLetter(AlphaNumericString.charAt(k))
                    && (n > 0)
                    || Character.isDigit(AlphaNumericString.charAt(k))
                    && (n > 0)) {

                r.append(AlphaNumericString.charAt(k));
                n--;
            }
        }
        // return the resultant string
        return r.toString();
    }




}
