package com.app.backend.controllers;

import com.app.backend.model.SecondWay;
import com.app.backend.services.SecondWayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class DocumentControllers {

    @Autowired
    private SecondWayService document;

    @GetMapping(value = "/documents")
    public ResponseEntity<List<SecondWay>> findAll() {
        List<SecondWay> document1 = document.findAll();
        return ResponseEntity.ok().body(document1);
    }

    @PostMapping(value = "/document")
    public ResponseEntity<SecondWay> insert(@RequestBody SecondWay obj) throws Exception {
        obj = document.insertDocument(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigoDaVia}").buildAndExpand(obj.getCodigoDaVia()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/document/{codigoDaVia}")
    public ResponseEntity<SecondWay> findByCodigoDaVia(@PathVariable String codigoDaVia) {
        SecondWay obj = document.findByCodigoDaVia(codigoDaVia);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/document/{codigoDaVia}")
    public ResponseEntity<SecondWay> deleteById(@PathVariable String codigoDaVia) {
        document.delete(codigoDaVia);
        return ResponseEntity.noContent().build();
    }

}

