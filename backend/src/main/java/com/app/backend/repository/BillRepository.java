package com.app.backend.repository;

import com.app.backend.model.Bill;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends MongoRepository<Bill, String> {
    Bill findByDocumentNumber (String documentNumber);
    Bill deleteByDocumentNumber (String documentNumber);
    boolean existsByDocumentNumber(String documentNumber);

}
