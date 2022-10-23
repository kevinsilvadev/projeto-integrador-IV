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

    public Customer insertCustomer(Customer obj)  {
        if(!isValid(obj) || isOnDB(obj)){
            throw new ResourceInvalidDataException("INVALID OR DUPLICATED DATA FOR CUSTOMER INSERT");
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

    private boolean isValid(Customer customer) {

        if(customer.getName() == null || customer.getName() == "" || customer.getCpf() == null || customer.getCpf() == "" || customer.getEmail() == null || customer.getEmail() == "" ) {
            return false;
        }

        return true;
    }

    private boolean isOnDB(Customer customer) {

        if(repo.findByCpf(customer.getCpf()) != null){
            return true;
        } else if (repo.findByEmail(customer.getEmail()) != null){
            return true;
        }

        return false;
    }

    public Customer update(Customer newObj) {

        if(!isValid(newObj)){
            throw new ResourceInvalidDataException("INVALID DATA FOR CUSTOMER UPDATE");
        }

        Customer obj = repo.findByCpf(newObj.getCpf());

        repo.delete(obj);

        return repo.save(newObj);
    }
}
