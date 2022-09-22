package com.app.backend.services;

import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.exception.ObjectNotFoundException;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repo;

    public Client insertClient(Client obj) {
       return repo.save(obj);
    }
    public List<Client> findAll() {
       return repo.findAll();
    }
    public Client findByCpf(String cpf) {
        Optional<Client> obj = repo.findById(cpf);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }
    public void delete(String id) {
        repo.deleteById(id);
    }

    public Client update(Client obj) {
        Client newObj = findByCpf(obj.getCpf());
        updateData(newObj, obj);
        return repo.save(newObj);
    }

    private void updateData(Client newObj, Client obj) {
        newObj.setName(obj.getName());
        newObj.setEmail(obj.getEmail());

    }
}
