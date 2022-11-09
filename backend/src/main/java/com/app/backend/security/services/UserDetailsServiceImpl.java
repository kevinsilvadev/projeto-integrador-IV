package com.app.backend.security.services;


import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    CustomerRepository customerRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String cpf) throws UsernameNotFoundException {
        Customer customer = Optional.of(customerRepository.findByCpf(cpf))
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with cpf: " + cpf));
        return UserDetailsImpl.build(customer);
    }

}