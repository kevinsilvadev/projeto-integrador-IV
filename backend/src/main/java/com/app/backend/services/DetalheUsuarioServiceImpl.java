
package com.app.backend.services;

import com.app.backend.data.DetalhesUsuarioData;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetalheUsuarioServiceImpl implements UserDetailsService {

    private final CustomerRepository repository;

    public DetalheUsuarioServiceImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String cpf) throws UsernameNotFoundException {
        Optional<Customer> customer = Optional.of(repository.findByCpf(cpf));
        if(customer.isEmpty()) {
            throw new ResourceNotFoundException("Usuário ["+customer+"] não encontrado");
        }
        return new DetalhesUsuarioData(customer);
    }
}
