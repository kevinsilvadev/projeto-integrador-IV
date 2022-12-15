package com.app.backend.services;

import com.app.backend.ApplicationConfigTest;
import com.app.backend.model.Bill;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.CompanyRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

@DisplayName("CompanyServiceTest")
public class CompanyServiceTest extends ApplicationConfigTest {

    @MockBean
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyService companyService;

    @Test
    @DisplayName("Inserindo company no mongoDB")
    public void insertCompany() {
        Company company = new Company(null, "Empresa", "3333333", "a");
        companyRepository.save(company);
        Mockito.when(companyRepository.save(ArgumentMatchers.eq(company)))
                .thenReturn(company);
        companyService.insertCompany(company);
    }

    @Test
    @DisplayName("Pegando a empresa pelo cnpj")
    public void FromDT() {
        Company company = new Company(null, "Empresa", "3333333", "a");
        Mockito.when(companyRepository
                .findByCnpj(ArgumentMatchers.eq(company.getCnpj())))
                .thenReturn(company);
    }






}
