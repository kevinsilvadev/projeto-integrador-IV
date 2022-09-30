package com.app.backend.repository;

import com.app.backend.model.SecondWay;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecondWayRepository extends MongoRepository<SecondWay, String> {
}
