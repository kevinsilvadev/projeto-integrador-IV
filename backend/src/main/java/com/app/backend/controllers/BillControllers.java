package com.app.backend.controllers;

import com.app.backend.model.Bill;
import com.app.backend.repository.BillRepository;
import com.app.backend.repository.CustomerRepository;
import com.app.backend.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.sound.midi.SysexMessage;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/bill")
public class BillControllers {

    @Autowired
    private BillService billService;

    @Autowired
    private BillRepository repo;

    @Autowired
    private CustomerRepository customer;

    @GetMapping(value = "/findAll")
    public ResponseEntity<List<Bill>> findAll() {
        List<Bill> bill1 = billService.findAll();
        return ResponseEntity.ok().body(bill1);
    }

    /*@PostMapping(value = "/generate")
    public ResponseEntity<Bill> generateBill(@RequestParam String cpf, @RequestParam String cnpj) throws Exception {
        List<Bill> obj = billService.getBill(cpf,cnpj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{documentNumber}").buildAndExpand(obj.getDocumentNumber()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }*/

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

