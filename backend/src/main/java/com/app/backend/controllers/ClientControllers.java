package com.app.backend.controllers;

import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/clients")
public class ClientControllers {

    @Autowired
    private ClientService clients;


    @GetMapping
    public ResponseEntity<List<Client>> findAll() {
        List<Client> clients1 = clients.findAll();
        return ResponseEntity.ok().body(clients1);
    }

    @PostMapping
    public ResponseEntity<Client> insert(@RequestBody Client obj){
        obj = clients.insertClient(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getCpf()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

}
