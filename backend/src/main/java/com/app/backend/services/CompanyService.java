package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Company;
import com.app.backend.repository.CompanyRepository;
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
            throw new ResourceInvalidDataException("DADOS DA EMPRESA INVÁLIDOS PARA INSERÇÃO");
        }
        return repo.save(obj);
    }

    public List<Company> findAll() {
        return repo.findAll();
    }

    public Company findByCompanyName (String companyName) {
        Optional<Company> obj = repo.findById(companyName);
        return obj.orElseThrow(() -> new ResourceNotFoundException("CNPJ NÃO ENCONTRADO"));
    }

    public void delete(String cnpj) {
        if(!repo.existsById(cnpj)) {
            throw new ResourceNotFoundException("CNPJ NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(cnpj);
        }
    }


}
