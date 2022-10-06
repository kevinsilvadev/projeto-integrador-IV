package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository repo;

    public Customer insertCustomer(Customer obj) throws Exception {
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
    public List<Customer> findAll() {
       return repo.findAll();
    }

    @PreAuthorize("hasRole('admin')")
    public void delete(String id) {
        if(!repo.existsById(id)) {
            throw new ResourceNotFoundException("ID NOT FOUND");
        } else {
            repo.deleteById(id);
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
