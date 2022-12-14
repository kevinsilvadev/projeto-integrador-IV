package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Bill;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.repository.BillRepository;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.text.DecimalFormat;
import java.util.*;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public List<Bill> getBill(String cpf, String cnpj) throws Exception {
        Customer customer = customerRepository.findByCpf(cpf);
        Company company = companyRepository.findByCnpj(cnpj);
        List<Bill> bill = billRepository.findByCustomerAndCompany(customer, company);

        if(customer == null || company==null)
            throw new Exception("INVALID DATA");

        if(billRepository.existsByCustomerAndCompany(customer,company)){
            Date d = new Date();
            d.setMonth(d.getMonth()-1);

          if(bill.get(bill.size()-1).getDueDate().compareTo(d) > 0)
                return bill;
        }
        Bill obj = new Bill(customer, company);
        billRepository.save(obj);
        return bill;
    }

    public List<Bill> getBillQrcode(String qrcode, String cnpj) throws Exception {
        Customer customer = customerRepository.findByQrcode(qrcode);
        Company company = companyRepository.findByCnpj(cnpj);
        List<Bill> bill = billRepository.findByCustomerAndCompany(customer, company);

        if(customer == null || company==null)
            throw new Exception("INVALID DATA");

        if(billRepository.existsByCustomerAndCompany(customer,company)){
            Date d = new Date();
            d.setMonth(d.getMonth()-1);

            if(bill.get(bill.size()-1).getDueDate().compareTo(d) > 0)
                return bill;
        }
        Bill obj = new Bill(customer, company);
        billRepository.save(obj);
        return bill;
    }



    public List<Bill> findAll () {
        return billRepository.findAll();
    }

    public void delete(String documentNumber) {
        if (!billRepository.existsByDocumentNumber(documentNumber)) {
            throw new ResourceNotFoundException("ROUTE CODE DOES NOT EXIST IN THE DATABASE");
        } else {
            billRepository.deleteByDocumentNumber(documentNumber);
        }
    }

    public List<Bill> getRecentBills(Customer customer){
        List<Bill> aux;
        List<Bill> ret = new ArrayList<>();
        aux = billRepository.findByCustomer(customer);

        for(int i=1; i<=5;i++){
            if(i > aux.size())
                break;
            ret.add(aux.get(aux.size()-i));
        }
        return ret;
    }
    public Bill update(Bill obj, Bill newObj) {

        obj.setDocumentNumber(newObj.getDocumentNumber());
        /*obj.setDiscount(newObj.getDiscount());
        obj.setAmountCharged(newObj.getAmountCharged());
        obj.setUf(newObj.getUf());
        obj.setCompanyCnpj(newObj.getCompanyCnpj());
        obj.setPenalty(newObj.getPenalty());
        obj.setDueDate(newObj.getDueDate());
        obj.setInstructions(newObj.getInstructions());
        obj.setCustomerCpf(newObj.getCustomerCpf());
        obj.setCustomerCnpj(newObj.getCustomerCnpj());
        obj.setBarCodeNumber(newObj.getBarCodeNumber());
        obj.setProcessingDate(newObj.getProcessingDate());
        obj.setDocumentValue(newObj.getDocumentValue());*/

        return billRepository.save(obj);
    }
}
