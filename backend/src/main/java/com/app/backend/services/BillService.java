package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Bill;
import com.app.backend.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository repo;

    public Bill insertBill(Bill obj) throws Exception {
        isValid(obj);
        return repo.save(obj);
    }

    private boolean isValid(Bill bill) {
        if (bill.getDocumentNumber().isBlank() || bill.getDocumentNumber().isEmpty()) {
            throw new ResourceInvalidDataException("INVALID DOCUMENT FOR INSERTION");
        }
        return false;
    }

    public List<Bill> findAll () {

        return repo.findAll();
    }

    public Bill findByDocumentNumber (String documentNumber) {
        Bill obj = repo.findByDocumentNumber(documentNumber);
        return obj;
    }

    public void delete(String documentNumber) {
        if (!repo.existsByDocumentNumber(documentNumber)) {
            throw new ResourceNotFoundException("ROUTE CODE DOES NOT EXIST IN THE DATABASE");
        } else {
            repo.deleteByDocumentNumber(documentNumber);
        }
    }
    public Bill update(Bill obj) {
        Bill newObj = repo.findByDocumentNumber(obj.getDocumentNumber());
        return repo.save(newObj);
    }
}
