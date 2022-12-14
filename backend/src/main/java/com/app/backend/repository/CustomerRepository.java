package com.app.backend.repository;

import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Customer findByCpf(String cpf);
    Customer findByCnpj(String cnpj);
    Optional<Customer> findByEmail(String email);
    Optional<Customer> findByName(String name);
    Customer deleteByCpf(String cpf);
    Boolean existsByCpf(String cpf);
    Boolean existsByCnpj(String cnpj);
    Boolean existsByEmail(String email);
    Customer findByQrcode(String qrcode);
}
