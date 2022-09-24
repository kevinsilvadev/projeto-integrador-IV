package com.app.backend.controllers;

import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
public class ClientControllers {

    @Autowired
    private ClientService clients;

    @GetMapping(value = "/clients")
    public ResponseEntity<List<Client>> findAll() {
        List<Client> clients1 = clients.findAll();
        return ResponseEntity
                .ok()
                .body(clients1);
    }
    @PostMapping(value = "/clients")
    public ResponseEntity<Client> insert( @Valid @RequestBody Client obj) throws Exception {
        obj = clients.insertClient(obj);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{cpf}")
                .buildAndExpand(obj.getCpf()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/clients/{cpf}")
    public ResponseEntity<Client> findByCpf(@Valid @PathVariable String cpf) {
        Client obj = clients.findByCpf(cpf);
        if(obj == null)
            throw new ResourceNotFoundException("Client not found for CPF: " + cpf);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/clients/{cpf}")
    public ResponseEntity<Client> deleteByid(@Valid @PathVariable String cpf) {
        clients.delete(cpf);
        return ResponseEntity.noContent().build();
    }


}

