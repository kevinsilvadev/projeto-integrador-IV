package com.app.backend.repository;

import com.app.backend.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Customer findByCpf(String cpf);
    Customer findByEmail(String email);
    Customer findByName(String name);
    Customer deleteByCpf(String cpf);

    Customer update(Customer newObj);
}
