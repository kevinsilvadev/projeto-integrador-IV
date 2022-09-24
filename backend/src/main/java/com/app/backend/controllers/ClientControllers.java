package com.app.backend.controllers;

import com.app.backend.model.Client;
import com.app.backend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class ClientControllers {

    @Autowired
    private ClientService client;

    @GetMapping(value = "/client")
    public ResponseEntity<List<Client>> findAll() {
        List<Client> client1 = client.findAll();
        return ResponseEntity.ok().body(client1);
    }
    @PostMapping(value = "/client")
    public ResponseEntity<Client> insert(@RequestBody Client obj) throws Exception {
        obj = client.insertClient(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{cpf}").buildAndExpand(obj.getCpf()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/client/{cpf}")
    public ResponseEntity<Client> findByCpf(@PathVariable String cpf) {
        Client obj = client.findByCpf(cpf);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/client/{cpf}")
    public ResponseEntity<Client> deleteByid(@PathVariable String cpf) {
        client.delete(cpf);
        return ResponseEntity.noContent().build();
    }

}

