package com.app.backend.controllers;

import com.app.backend.dto.CustomerDTO;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;
import com.app.backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerControllers {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Customer>> findAll() {
        List<Customer> customer1 = customerService.findAll();
        return ResponseEntity.ok().body(customer1);
    }

    @PostMapping(value = "/customer")
    public ResponseEntity<Customer> insert(@RequestBody Customer obj) throws Exception {
        obj = customerService.insertCustomer(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }


    @GetMapping(value = "/cpf")
    public ResponseEntity<List<Customer>> findByCpf(@RequestParam  String cpf) {
        return new ResponseEntity(customerRepository.findByCpf(cpf), HttpStatus.OK);
    }


    @PutMapping(value = "/cpf")
    public ResponseEntity<Void> update(@RequestBody CustomerDTO objDTO, @RequestParam String cpf) {
        Customer obj = customerService.FromDTO(objDTO);
        obj.setCpf(cpf);
        obj = customerService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value="/company")
    public ResponseEntity<List<Company>> getCompanyList(@RequestParam String cpf) {
        Customer obj = customerRepository.findByCpf(cpf);
        return new ResponseEntity(obj.getCompanyList(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/customer/cpf")
    public ResponseEntity<Customer> deleteByid(@RequestParam String cpf) {
        customerRepository.deleteByCpf(cpf);
        return ResponseEntity.noContent().build();
    }
}

