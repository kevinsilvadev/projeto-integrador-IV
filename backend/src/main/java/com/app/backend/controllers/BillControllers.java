package com.app.backend.controllers;

import com.app.backend.model.Bill;
import com.app.backend.repository.BillRepository;
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

    @Autowired
    private BillRepository repo;

    @GetMapping(value = "/bill")
    public ResponseEntity<List<Bill>> findAll() {
        List<Bill> bill1 = billService.findAll();
        return ResponseEntity.ok().body(bill1);
    }

    @PostMapping(value = "/bill")
    public ResponseEntity<Bill> insert(@RequestBody Bill obj) throws Exception {
        obj = billService.insertBill(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{documentNumber}").buildAndExpand(obj.getDocumentNumber()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @GetMapping(value = "/bill/documentNumber")
    public ResponseEntity<Bill> findByDocumentNumber(@RequestParam String documentNumber) {
        Bill obj = repo.findByDocumentNumber(documentNumber);
        return ResponseEntity.ok().body(obj);
    }

    @PutMapping(value = "/bill/documentNumber")
    public ResponseEntity<Void> update(@RequestBody Bill newObj, @RequestParam String documentNumber) {
        Bill obj = repo.findByDocumentNumber(documentNumber);
        billService.update(obj, newObj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/bill/documentNumber")
    public ResponseEntity<Bill> deleteByDocumentNumber(@RequestParam String documentNumber) {
        repo.deleteByDocumentNumber(documentNumber);
        return ResponseEntity.noContent().build();
    }
}

