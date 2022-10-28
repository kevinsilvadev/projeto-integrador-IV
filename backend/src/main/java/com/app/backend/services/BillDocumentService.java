package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.BillDocument;
import com.app.backend.repository.BillDocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillDocumentService {

    @Autowired
    private BillDocumentRepository repo;

    public BillDocument insert(BillDocument obj) throws Exception{

        if(!isValid(obj))
            throw new ResourceInvalidDataException("INVALID DATA FOR INSERTION");

        return repo.save(obj);
    }

    public void deleteByUrl (String url) throws Exception{
        if (!repo.existsByUrl(url)) {
            throw new ResourceNotFoundException("ROUTE CODE DOES NOT EXIST IN THE DATABASE");
        } else {
            repo.deleteByUrl(url);
        }
    }

    boolean isValid (BillDocument obj){

        return !obj.getUrl().isBlank() && !obj.getUrl().isEmpty();
    }
}
