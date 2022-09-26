package com.app.backend.repository;

import com.app.backend.model.Client;
import com.app.backend.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CompanyRepository extends MongoRepository<Company, String> {

    List<Company> findByCompanyName(String companyName);
}
