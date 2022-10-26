package com.app.backend.services;

import com.app.backend.dto.CompanyDTO;
import com.app.backend.dto.CustomerDTO;
import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repo;

    public Company insertCompany (Company obj) {
        //isValid(obj);
        return repo.save(obj);
    }

  //Method for validation
  /*  private boolean isValid(Company company) {
        if (company.getName() == null ||
                company.getCnpj() == null ||
                company.getName() == "" || company.getCnpj() == "" || company.getAgency().isEmpty() || company.getAgency() == null)
            throw new ResourceInvalidDataException("INVALID COMPANY DATA FOR INSERTION");
        return false;
    }*/

    private boolean isValidDuplicateData(Company company) {
        if(repo.existsById(String.valueOf(company.getName().contains(company.getName()))))
            throw new ResourceInvalidDataException("");
        return true;
    }

    public List<Company> findAll() {
        return repo.findAll();
    }

    public Company FromDTO(CompanyDTO objDto) {
        return new Company(objDto.getId(), objDto.getName(), objDto.getCnpj(), objDto.getAgency(), objDto.getImgLogo());
    }


    public Company update(Company obj) {
        Company newObj = repo.findByCnpj(obj.getCnpj());
        updateData(newObj, obj);
        return repo.save(newObj);
    }

    private void updateData(Company newObj, Company obj) {
        newObj.setName(obj.getCnpj());
        newObj.setName(obj.getName());
    }

    public void delete(String cnpj) {
        if(!repo.existsById(cnpj)) {
            throw new ResourceNotFoundException("CNPJ NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(cnpj);
        }
    }
}
