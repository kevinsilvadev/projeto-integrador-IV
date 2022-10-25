package com.app.backend.services;

import ch.qos.logback.core.net.server.Client;
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

    public Customer insertCustomer(Customer obj)  {
        isValid(obj);
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

    private boolean isValid(Customer customer) {
        if(customer.getName() == null || customer.getName() == "" || customer.getCpf() == null || customer.getCpf() == "" || customer.getEmail() == null || customer.getEmail() == "" ) {
            throw new ResourceInvalidDataException("INVALID DATA FOR CUSTOMER INSERT");
        }
        return false;
    }

    public Customer update(Customer obj) {
        Customer newObj = repo.findByCpf(obj.getCpf());
        updateData(newObj, obj);
        return repo.save(newObj);
    }

    private void updateData(Customer newObj, Customer obj) {
        newObj.setName(obj.getName());
        newObj.setEmail(obj.getEmail());

    }

}
