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
public class BillDocumenteControllers {

    @Autowired
    private BillDocumentRepository repo;

    @Autowired
    private BillDocumentService documentService;

    @PostMapping(value="/billDocument")
    public ResponseEntity<BillDocument> insert (@RequestBody BillDocument obj) throws Exception {
        obj = documentService.insert(obj);
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
    
}
