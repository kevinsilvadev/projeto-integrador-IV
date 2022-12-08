package com.app.backend.repository;

import com.app.backend.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    Company findByName(String Name);
    Company findByCnpj(String cnpj);
    Company deleteByCnpj(String cpnj);
    boolean existsByCnpj(String cnpj);
}
