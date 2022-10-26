package com.app.backend.controllers;

import com.app.backend.dto.CompanyDTO;
import com.app.backend.dto.CustomerDTO;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class CompanyControllers {

    @Autowired
    private CompanyService company;

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping(value = "/company")
    public ResponseEntity<List<Company>> findAll() {
        List<Company> company1 = company.findAll();
        return ResponseEntity.ok().body(company1);
    }

    @PostMapping(value = "/company")
    public ResponseEntity<Company> insert(@RequestBody Company obj) throws Exception {
        obj = company.insertCompany(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }
    @PutMapping(value = "/company/cnpj")
    public ResponseEntity<Void> update(@RequestBody CompanyDTO objDTO, @RequestParam String cnpj) {
        Company obj = company.FromDTO(objDTO);
        obj.setCnpj(cnpj);
        obj = company.update(obj);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "/company/companyName")
    public ResponseEntity<List<Company>> findByCompanyName(@RequestParam String Name) {
        return new ResponseEntity(companyRepository.findByName(Name), HttpStatus.OK);
    }

    @DeleteMapping(value = "/company/cnpj")
    public ResponseEntity<Customer> deleteByid(@RequestParam String cnpj) {
        companyRepository.deleteByCnpj(cnpj);
        return ResponseEntity.noContent().build();
    }
}
