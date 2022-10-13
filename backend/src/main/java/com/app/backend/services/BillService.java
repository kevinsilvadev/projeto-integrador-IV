package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Bill;
import com.app.backend.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository repo;

    public Bill insertBill(Bill obj) throws Exception {
        isValid(obj);
        return repo.save(obj);
    }

    private boolean isValid(Bill bill) {
        if (bill.getCodigoDaVia() == null || bill.getCodigoDaVia() == "" || bill.getCompanyName() == null || bill.getAddress() == null || bill.getAddress() == "") {
            throw new ResourceInvalidDataException("INVALID DOCUMENT FOR INSERTION");
        }
        return false;
    }

    public List<Bill> findAll () {
        return repo.findAll();
    }

    public Bill findByCodigoDaVia (String codigoDaVia) {
        Optional<Bill> obj = repo.findById(codigoDaVia);
        return obj.orElseThrow(() -> new ResourceNotFoundException("DOCUMENT NOT FOUND"));
    }

    public void delete(String codigoDaVia) {
        if (!repo.existsById(codigoDaVia)) {
            throw new ResourceNotFoundException("ROUTE CODE DOES NOT EXIST IN THE DATABASE");
        } else {
            repo.deleteById(codigoDaVia);
        }
    }


}
