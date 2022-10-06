package com.app.backend.repository;

import com.app.backend.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {

    List<Company> findByCompanyName(String companyName);
}
