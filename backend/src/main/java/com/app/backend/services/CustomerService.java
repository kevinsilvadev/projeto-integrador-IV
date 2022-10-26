package com.app.backend.services;
import com.app.backend.dto.CustomerDTO;
import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
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


    public Customer FromDTO(CustomerDTO objDto) {
        return new Customer(objDto.getId(), objDto.getName(), objDto.getEmail(), objDto.getSenha());
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
        newObj.setSenha(obj.getSenha());
    }
}
