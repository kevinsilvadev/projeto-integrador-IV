package com.app.backend.controllers;

import com.app.backend.model.Company;
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

    @GetMapping(value = "/company/companyName")
    public ResponseEntity<List<Company>> findByCnpj(@RequestParam String companyName) {
        return new ResponseEntity<List<Company>>(companyRepository.findByCompanyName(companyName), HttpStatus.OK);
    }

    @DeleteMapping(value = "/company/{cnpj}")
    public ResponseEntity<Company> deleteById(@PathVariable String cnpj) {
        company.delete(cnpj);
        return ResponseEntity.noContent().build();
    }

}
