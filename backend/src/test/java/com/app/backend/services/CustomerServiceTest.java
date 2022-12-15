package com.app.backend.services;

import com.app.backend.ApplicationConfigTest;
import com.app.backend.model.Customer;
import com.app.backend.repository.CustomerRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatcher;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;


@DisplayName("CustomerServiceTest")
class CustomerServiceTest extends ApplicationConfigTest {

    @MockBean
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerService customerService;


    @Test
    @DisplayName("Inserindo customer no mongoDB")
    public void insertCustomer() {
        Customer customer = new Customer("3333333", null, null, "Jose Silva", "1234qwe","josesilva@gmail.com");
        customerRepository.save(customer);
        Mockito.when(customerRepository.save(ArgumentMatchers.eq(customer)))
                .thenReturn(customer);
        customerService.insertCustomer(customer);
    }

    @Test
    @DisplayName("Pegando a empresa do cliente pelo qrcode")
    public void findCompanyListByQrCode() {
        Customer customer = new Customer();
        customer.setName("sTp8UKeCBp775VokUFyYW9lWfWUzdh");
        Mockito.when(customerRepository.findByQrcode(ArgumentMatchers.eq(customer.getQrcode()))).thenReturn(customer);

    }



}