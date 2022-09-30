package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.SecondWay;
import com.app.backend.repository.SecondWayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SecondWayService {

    @Autowired
    private SecondWayRepository repo;

    public SecondWay insertDocument(SecondWay obj) throws Exception {
        if (obj.getCodigoDaVia() == null ||
            obj.getCodigoDaVia() == "" ||
            obj.getCompanyName() == null ||
            obj.getAddress() == null ||
            obj.getAddress() == "") {
            throw new ResourceInvalidDataException("DOCUMENTO INVÁLIDO PARA INSERÇÃO");
        }
        return repo.save(obj);
    }

    public List<SecondWay> findAll () {
        return repo.findAll();
    }

    public SecondWay findByCodigoDaVia (String codigoDaVia) {
        Optional<SecondWay> obj = repo.findById(codigoDaVia);
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
