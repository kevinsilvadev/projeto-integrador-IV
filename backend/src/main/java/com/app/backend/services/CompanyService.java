package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Company;
import com.app.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repo;

    public Company insertCompany (Company obj) {
        isValid(obj);
        return repo.save(obj);
    }

    //Method for validation
    private boolean isValid(Company company) {
        if (company.getCompanyName() == null || company.getCnpj() == null || company.getCompanyName() == "" || company.getCnpj() == "")
            throw new ResourceInvalidDataException("INVALID COMPANY DATA FOR INSERTION");
        return false;
    }

    private boolean isValidDuplicateData(Company company) {
        if(repo.existsById(String.valueOf(company.getCompanyName().contains(company.getCompanyName()))))
            throw new ResourceInvalidDataException("SEXO");
        return true;
    }

    public List<Company> findAll() {
        return repo.findAll();
    }


    public void delete(String cnpj) {
        if(!repo.existsById(cnpj)) {
            throw new ResourceNotFoundException("CNPJ NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(cnpj);
        }
    }
}
