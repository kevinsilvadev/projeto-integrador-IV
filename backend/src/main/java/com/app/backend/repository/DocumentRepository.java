package com.app.backend.repository;

import com.app.backend.model.Client;
import com.app.backend.model.SecondWay;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentRepository extends MongoRepository<SecondWay, String> {
}
