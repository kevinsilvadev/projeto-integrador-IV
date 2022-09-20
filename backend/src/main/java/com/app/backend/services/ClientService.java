package com.app.backend.services;

import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repo;

    public Client insertClient(Client obj) {
       return repo.save(obj);
    }
}
