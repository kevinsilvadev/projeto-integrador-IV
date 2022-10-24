package com.app.backend.controllers;

import com.app.backend.model.Bill;
import com.app.backend.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class BillControllers {

    @Autowired
    private BillService billService;

    @GetMapping(value = "/bill")
    public ResponseEntity<List<Bill>> findAll() {
        List<Bill> bill1 = billService.findAll();
        return ResponseEntity.ok().body(bill1);
    }

    @PostMapping(value = "/bill")
    public ResponseEntity<Bill> insert(@RequestBody Bill obj) throws Exception {
        obj = billService.insertBill(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigoDaVia}").buildAndExpand(obj.getCodigoDaVia()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/bill/{codigoDaVia}")
    public ResponseEntity<Bill> findByCodigoDaVia(@PathVariable String codigoDaVia) {
        Bill obj = billService.findByCodigoDaVia(codigoDaVia);
        return ResponseEntity.ok().body(obj);
    }

    @DeleteMapping(value = "/bill/{codigoDaVia}")
    public ResponseEntity<Bill> deleteById(@PathVariable String codigoDaVia) {
        billService.delete(codigoDaVia);
        return ResponseEntity.noContent().build();
    }

}

