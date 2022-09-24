package com.app.backend.controllers;

import com.app.backend.model.Company;
import com.app.backend.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class CompanyControllers {

    @Autowired
    private CompanyService company;

    @GetMapping(value = "/company")
    public ResponseEntity<List<Company>> findAll() {
        List<Company> company1 = company.findAll();
        return ResponseEntity.ok().body(company1);
    }

    @PostMapping(value = "/company")
    public ResponseEntity<Company> insert(@RequestBody Company obj) throws Exception {
        obj = company.insertCompany(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{cnpj}").buildAndExpand(obj.getCnpj()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/company/{cnpj}")
    public ResponseEntity<Company> findByCnpj(@PathVariable String cnpj) {
        Company obj = company.findByCnpj(cnpj);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/company/{cnpj}")
    public ResponseEntity<Company> deleteById(@PathVariable String cnpj) {
        company.delete(cnpj);
        return ResponseEntity.noContent().build();
    }

}
