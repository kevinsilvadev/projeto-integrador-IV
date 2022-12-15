package com.app.backend.controllers;

import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import com.app.backend.services.CustomerService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@AutoConfigureMockMvc
public class CustomerControllerTest {

    @InjectMocks
    private CustomerService customerService;

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CustomerRepository customerRepository;


    @Test
    @DisplayName("Pegando todos os customers")
    void findAllCustomer() throws Exception {
        var customer = new Customer();
        customer.setName("Jose Ribeiro");
        Mockito
                .when(customerRepository.findAll())
                .thenReturn(List.of(customer));
        this.mockMvc.perform(get("/api/customer/all"))
                .andDo(print())
                .andExpect(status().isOk());

    }

    @Test
    @DisplayName("Pegando o customer pelo cpf")
    void findByCpf() throws Exception {
        var customer = new Customer();
        customer.setCpf("6789001111");
        Mockito
                .when(customerRepository.findByCpf(customer.getCpf()))
                .thenReturn(customer);
        this.mockMvc.perform(get("/api/customer/cpf?cpf="+customer.getCpf()+""))
                .andExpect(content().json("{\"name\": "+customer.getName()+", \"email\": "+customer.getEmail()+", \"senha\": "+customer.getSenha()+" }"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("Inserindo o customer no banco")
    public void insertCustomer() throws Exception {
        var customer = new Customer();
        customer.setCpf("5555555");
        customer.setName("UsuarioTeste");
        customer.setEmail("usuario@gmail.com");
        customer.setSenha("1234");

        Mockito.when(customerRepository.save(Mockito.any())).thenReturn(customer);
        this.mockMvc.perform(post("/api/auth/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"cpf\": \"5555555\", \"nome\": \"UsuarioTeste\", \"email\": \"usuario@gmail.com\", \"senha\": \"1234\" }").accept(MediaType.APPLICATION_JSON)

        )
                .andDo(print())
                .andExpect(status().isOk());
    }


    @Test
    @DisplayName("Pegando a lista de um usuario especifico")
    void getCompanyList() throws Exception {
        var customer = new Customer();
        customer.setCpf("44444444444");
        Mockito
                .when(customerRepository.findByCpf(customer.getCpf()))
                .thenReturn(customer);
        this.mockMvc.perform(get("/api/customer/company?cpf="+customer.getCpf()+""))
                .andDo(print())
                .andExpect(status().isOk());
    }


}
