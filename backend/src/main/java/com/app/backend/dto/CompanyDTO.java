package com.app.backend.dto;

import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
@Document
@Getter
@Setter
@NoArgsConstructor
public class CompanyDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String name;

    private String cnpj;

    private String agency;

    private String imgLogo;

    public CompanyDTO(Company obj) {
        id = obj.getId();
        name = obj.getName();
        cnpj = obj.getCnpj();
        agency = obj.getAgency();
        imgLogo  = obj.getImgLogo();
    }

}
