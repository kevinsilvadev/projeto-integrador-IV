package com.app.backend.services;

import com.app.backend.model.Client;
import com.app.backend.model.Company;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.services.exception.ObjectError;
import com.app.backend.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repo;

    public Company insertCompany (Company obj) throws Exception{
        if (obj.getCompanyName() == null ||
            obj.getCnpj() == null ||
            obj.getCompanyName() == "" ||
            obj.getCnpj() == "") {
            throw new ObjectError("DADOS DA EMPRESA INVÁLIDOS PARA INSERÇÃO");
        }
        return repo.save(obj);
    }

    public List<Company> findAll() {
        return repo.findAll();
    }

    public Company findByCnpj (String cnpj) {
        Optional<Company> obj = repo.findById(cnpj);
        return obj.orElseThrow(() -> new ObjectNotFoundException("OBJETO NÃO ENCONTRADO"));
    }


}
