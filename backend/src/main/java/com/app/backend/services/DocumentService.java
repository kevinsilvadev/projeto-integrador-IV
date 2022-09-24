package com.app.backend.services;

import com.app.backend.model.Company;
import com.app.backend.model.Document;
import com.app.backend.repository.DocumentRepository;
import com.app.backend.services.exception.ObjectError;
import com.app.backend.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository repo;

    public Document insertDocument(Document obj) throws Exception {
        if (obj.getCompanyName() == null ||
            obj.getAddress() == null ||
            obj.getAddress() == "" ||
            obj.getDate() == null ||
            obj.getExpenses() == null) {
            throw new ObjectError("DOCUMENTO INVÁLIDO PARA INSERÇÃO");
        }
        return repo.save(obj);
    }

    public List<Document> findAll () {
        return repo.findAll();
    }


}
