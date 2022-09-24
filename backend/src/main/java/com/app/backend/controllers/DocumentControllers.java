package com.app.backend.controllers;

import com.app.backend.model.Document;
import com.app.backend.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class DocumentControllers {

    @Autowired
    private DocumentService document;

    @GetMapping(value = "/document")
    public ResponseEntity<List<Document>> findAll() {
        List<Document> document1 = document.findAll();
        return ResponseEntity.ok().body(document1);
    }

    @PostMapping(value = "/document")
    public ResponseEntity<Document> insert(@RequestBody Document obj) throws Exception {
        obj = document.insertDocument(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigoDaVia}").buildAndExpand(obj.getCodigoDaVia()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/document/{codigoDaVia}")
    public ResponseEntity<Document> findByCodigoDaVia(@PathVariable String codigoDaVia) {
        Document obj = document.findByCodigoDaVia(codigoDaVia);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/document/{codigoDaVia}")
    public ResponseEntity<Document> deleteById(@PathVariable String codigoDaVia) {
        document.delete(codigoDaVia);
        return ResponseEntity.noContent().build();
    }

}

