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
    public void delete(String documentNumber) {
        if (!repo.existsByDocumentNumber(documentNumber)) {
            throw new ResourceNotFoundException("ROUTE CODE DOES NOT EXIST IN THE DATABASE");
        } else {
            repo.deleteByDocumentNumber(documentNumber);
        }
    }
    public Bill update(Bill obj, Bill newObj) {

        obj.setDocumentNumber(newObj.getDocumentNumber());
        obj.setDiscount(newObj.getDiscount());
        obj.setAmountCharged(newObj.getAmountCharged());
        obj.setUf(newObj.getUf());
        obj.setCompanyCnpj(newObj.getCompanyCnpj());
        obj.setPenalty(newObj.getPenalty());
        obj.setDueDate(newObj.getDueDate());
        obj.setInstructions(newObj.getInstructions());
        obj.setCustomerCpf(newObj.getCustomerCpf());
        obj.setCustomerCnpj(newObj.getCustomerCnpj());
        obj.setBarCodeNumber(newObj.getBarCodeNumber());
        obj.setProcessingDate(newObj.getProcessingDate());
        obj.setDocumentValue(newObj.getDocumentValue());

        return repo.save(obj);
    }
}
