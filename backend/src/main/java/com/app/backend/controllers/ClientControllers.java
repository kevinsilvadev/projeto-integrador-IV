package com.app.backend.controllers;

import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class ClientControllers {

    @Autowired
    private ClientService client;

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping(value = "/client")
    public ResponseEntity<List<Client>> findAll() {
        List<Client> client1 = client.findAll();
        return ResponseEntity.ok().body(client1);
    }
    @PostMapping(value = "/client")
    public ResponseEntity<Client> insert(@RequestBody Client obj) throws Exception {
        obj = client.insertClient(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/client/cpf")
    public ResponseEntity<List<Client>> findByCpf(@RequestParam  String cpf) {
        return new ResponseEntity<List<Client>>(clientRepository.findByCpf(cpf), HttpStatus.OK);
    }

    @DeleteMapping(value = "/client/{cpf}")
    public ResponseEntity<Client> deleteByid(@PathVariable String cpf) {
        client.delete(cpf);
        return ResponseEntity.noContent().build();
    }

}

