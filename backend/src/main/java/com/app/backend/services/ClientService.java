package com.app.backend.services;

import com.app.backend.model.Client;
import com.app.backend.repository.ClientRepository;
import com.app.backend.services.exception.ObjectError;
import com.app.backend.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repo;

    public Client insertClient(Client obj) throws Exception {
        if(obj.getName() == null ||
                obj.getName() == "" ||
                obj.getCpf() == null ||
                obj.getCpf() == "" ||
                obj.getEmail() == null ||
                obj.getEmail() == "") {
                throw new ObjectError("DADOS INVÁLIDOS PARA INSERÇÃO DO CLIENTE");
        }
       return repo.save(obj);
    }
    public List<Client> findAll() {
       return repo.findAll();
    }
    public Client findByCpf(String cpf) {
        Optional<Client> obj = repo.findById(cpf);
        return obj.orElseThrow(() -> new ObjectNotFoundException("OBJETO NÃO ENCONTRADO"));
    }
    public void delete(String cpf) {
        if(!repo.existsById(cpf)) {
            throw new ObjectNotFoundException("CPF NÃO EXISTE NA BASE DE DADOS");
        } else {
            repo.deleteById(cpf);
        }
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
