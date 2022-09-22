package com.app.backend.repository;

import com.app.backend.model.Client;
import com.app.backend.model.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentRepository extends MongoRepository<Document, String> {
}
