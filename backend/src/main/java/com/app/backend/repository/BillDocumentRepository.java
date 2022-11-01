package com.app.backend.repository;

import com.app.backend.model.BillDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BillDocumentRepository extends MongoRepository<BillDocument, String> {

    BillDocument findByUrl(String url);

    BillDocument deleteByUrl(String url);

    BillDocument findByDocumentNumber(String documentNumber);

    boolean existsByUrl(String url);
}
