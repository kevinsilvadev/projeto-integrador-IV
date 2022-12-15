package com.app.backend.services;

import com.app.backend.ApplicationConfigTest;
import com.app.backend.model.Bill;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.BillRepository;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

@DisplayName("BillServiceTest")
public class BillServiceTest extends ApplicationConfigTest {

    @MockBean
    private BillRepository billRepository;

    @Autowired
    private BillService billService;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    @DisplayName("Dando get no bill")
    public void getBill() throws Exception {

        String cpf = "22222222222";
        String cnpj = "02449992021404";

        Customer findCustomer = customerRepository.findByCpf(cpf);
        Company findCompany = companyRepository.findByCnpj(cnpj);

        List<Bill> bill = billRepository.findByCustomerAndCompany(findCustomer, findCompany);

        Bill obj = new Bill(findCustomer, findCompany);

        Mockito.when(billRepository.save(obj)).thenReturn(obj);

        billService.getBill(cpf, cnpj);

    }

    @Test
    @DisplayName("Pegando os bills recentes")
    public void getRecentBills() {
        Customer customer = new Customer();
        billRepository.findByCustomer(customer);
        Mockito.when(billRepository.findByCustomer(ArgumentMatchers.eq(customer)));
        billService.getRecentBills(customer);
    }

    @Test
    @DisplayName("Pegar todos os bills")
    public void findAll() {
        List<Bill> bills = new ArrayList<>();
        Mockito.when(billService.findAll()).thenReturn(bills);
    }


}
