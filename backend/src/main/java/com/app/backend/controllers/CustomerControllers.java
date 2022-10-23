package com.app.backend.controllers;

import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import com.app.backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class CustomerControllers {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;


    @GetMapping(value = "/customer")
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

    @GetMapping(value = "/customer/{cpf}")
    public ResponseEntity<Customer> findByCpf(@RequestParam  String cpf) {
        return new ResponseEntity<Customer>(customerRepository.findByCpf(cpf), HttpStatus.OK);
    }

    @GetMapping(value = "customer/{name}")
    public ResponseEntity<Customer> findByName(@RequestParam String name){
        return new ResponseEntity<Customer>(customerRepository.findByName(name), HttpStatus.OK);
    }

    @GetMapping(value = "customer/{email}")
    public ResponseEntity<Customer> findByEmail(@RequestParam String email){
        return new ResponseEntity<Customer>(customerRepository.findByName(email), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('admin')")
    @DeleteMapping(value = "/customer/{id}")
    public ResponseEntity<Customer> deleteByid(@PathVariable String id) {
        customerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

