package com.app.backend.repository;

import com.app.backend.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ClientRepository extends MongoRepository<Client, String> {
    List<Client> findByCpf(String cpf);
}
