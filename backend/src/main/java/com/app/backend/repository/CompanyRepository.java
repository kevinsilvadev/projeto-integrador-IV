package com.app.backend.repository;

import com.app.backend.model.Client;
import com.app.backend.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepository extends MongoRepository<Company, String> {
}
