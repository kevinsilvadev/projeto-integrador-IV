package com.app.backend.repository;

import com.app.backend.model.Bill;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;


@Repository
public interface BillRepository extends MongoRepository<Bill, String> {
    Bill findByDocumentNumber (String documentNumber);
    ArrayList<Bill> findByCustomerAndCompany(Customer customer, Company company);
    ArrayList<Bill> findByCustomer(Customer customer);
    Bill deleteByDocumentNumber (String documentNumber);
    boolean existsByDocumentNumber(String documentNumber);
    boolean existsByCustomerAndCompany(Customer customer, Company company);

}
