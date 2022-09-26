package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.exception.ObjectError;
import com.app.backend.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repo;

    public Client insertClient(Client obj) throws Exception {
        if(obj.getName() == null ||
                obj.getName() == "" ||
                obj.getCpf() == null ||
                obj.getCpf() == "" ||
                obj.getEmail() == null ||
                obj.getEmail() == "" ) {
                throw new ResourceInvalidDataException("DADOS INVÁLIDOS PARA INSERÇÃO DO CLIENTE");
        }
       return repo.save(obj);
    }
    public List<Client> findAll() {
       return repo.findAll();
    }

    public void delete(String cpf) {
        if(!repo.existsById(cpf)) {
            throw new ResourceNotFoundException("CPF NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(cpf);
        }
    }
/*
    public Client update(Client obj) {
         Client newObj = repo.findByCpf(obj.getCpf());
        updateData(newObj, obj);
        return repo.save(newObj);
    }

    private void updateData(Client newObj, Client obj) {
        newObj.setName(obj.getName());
        newObj.setEmail(obj.getEmail());

    }*/

}
