package com.app.backend.dto;

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
public class CustomerDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    private String cpf;

    private String urlPhoto;
    private String name;
    private String email;
    private String senha;

    public CustomerDTO(Customer obj) {
        this.id = obj.getId();
        this.cpf = getCpf();
        this.urlPhoto = obj.getUrlPhoto();
        this.name = obj.getName();
        this.email = obj.getEmail();
        this.senha  = obj.getSenha();
    }
}
