package com.app.backend.controllers;

import com.app.backend.model.BillDocument;
import com.app.backend.repository.BillDocumentRepository;
import com.app.backend.services.BillDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class BillDocumentControllers {

    @Autowired
    private BillDocumentRepository repo;

    @Autowired
    private BillDocumentService billDocumentService;

    @PostMapping(value="/billDocument")
    public ResponseEntity<BillDocument> insert (@RequestBody BillDocument obj) throws Exception {
        obj = billDocumentService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{url}").buildAndExpand(obj.getUrl()).toUri();
        return ResponseEntity.created(uri).body(obj);
    }

    @DeleteMapping(value="/billDocument/url")
    public ResponseEntity<BillDocument> delete (@RequestParam String url) throws Exception{
        repo.deleteByUrl(url);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value="/billDocument")
    public ResponseEntity<List<BillDocument>> findAll(){
        List<BillDocument> list = repo.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PutMapping(value="/billDocument/documentNumber")
    public ResponseEntity<BillDocument> update(@RequestBody BillDocument newObj, @RequestParam String documentNumber){
        BillDocument obj = repo.findByDocumentNumber(documentNumber);
        billDocumentService.update(obj, newObj);

        return ResponseEntity.noContent().build();
    }

}
