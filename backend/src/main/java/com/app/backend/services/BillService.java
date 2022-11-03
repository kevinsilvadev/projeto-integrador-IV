package com.app.backend.services;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.Bill;
import com.app.backend.model.Customer;
import com.app.backend.repository.BillRepository;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CustomerRepository customerRepository;

    public Bill insertBill(Bill obj) throws Exception {
        isValid(obj);
        obj.setDocumentNumber(generateDocumentNumber());
        obj.setDocumentValue(generateDocumentValue());
        return billRepository.save(obj);
    }

    private boolean isValid(Bill bill) {
        /*if (bill.getDocumentNumber().isBlank() || bill.getDocumentNumber().isEmpty()) {
            throw new ResourceInvalidDataException("INVALID DOCUMENT FOR INSERTION");
        }*/
        if((!customerRepository.existsByCpf(bill.getCustomerCpf()) || !customerRepository.existsByCnpj(bill.getCustomerCnpj())) || !companyRepository.existsByCnpj(bill.getCompanyCnpj()))
            throw new ResourceInvalidDataException("INVALID DOCUMENT FOR INSERTION");
        return false;
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

    public String generateDocumentNumber(){
        String ret = "";
        Random random = new Random();

        for(int i =0;i<10;i++){
            ret = ret + random.nextInt(9);
        }

        return ret;
    }

    public double generateDocumentValue() {
        StringBuilder ret = new StringBuilder();
        Random random = new Random();

        for(int i =0;i<5;i++){
            ret.append(random.nextInt(9));
        }
        ret.setCharAt(2,'.');
        return Double.parseDouble(ret.toString());
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
