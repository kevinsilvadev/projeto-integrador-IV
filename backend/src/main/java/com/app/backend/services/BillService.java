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
        if (obj.getCodigoDaVia() == null ||
            obj.getCodigoDaVia() == "" ||
            obj.getCompanyName() == null ||
            obj.getAddress() == null ||
            obj.getAddress() == "") {
            throw new ResourceInvalidDataException("DOCUMENTO INVÁLIDO PARA INSERÇÃO");
        }
        return repo.save(obj);
    }

    public List<Bill> findAll () {
        return repo.findAll();
    }

    public Bill findByCodigoDaVia (String codigoDaVia) {
        Optional<Bill> obj = repo.findById(codigoDaVia);
        return obj.orElseThrow(() -> new ResourceNotFoundException("DOCUMENTO NÃO ENCONTRADO"));
    }

    public void delete(String codigoDaVia) {
        if (!repo.existsById(codigoDaVia)) {
            throw new ResourceNotFoundException("CÓDIGO DA VIA NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(codigoDaVia);
        }
    }


}
