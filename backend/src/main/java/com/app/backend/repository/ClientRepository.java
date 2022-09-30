package com.app.backend.repository;

import com.app.backend.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ClientRepository extends MongoRepository<Client, String> {
    List<Client> findByCpf(String cpf);
    Client deleteByCpf(String cpf);
}
