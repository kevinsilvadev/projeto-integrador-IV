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
        Bill obj = new Bill(customer,company);
        bill.add(obj);
        billRepository.save(obj);
        return bill;
    }

    private boolean isValid(Bill bill) {
        /*if (bill.getDocumentNumber().isBlank() || bill.getDocumentNumber().isEmpty()) {
            throw new ResourceInvalidDataException("INVALID DOCUMENT FOR INSERTION");
        }*/
        if(!customerRepository.existsByCpf(bill.getCustomer().getCpf()) || !companyRepository.existsByCnpj(bill.getCompany().getCnpj()))
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

    private String generateDocumentNumber(){
        String ret = "";
        Random random = new Random();

        for(int i =0;i<54;i++){
            if(i == 5 || i == 17 || i == 30)
                ret = ret + '.';
            else if(i == 11 || i ==24 || i == 37 || i == 39)
                ret = ret + ' ';
            else
                ret = ret + random.nextInt(9);
        }
        return ret;
    }

    private int generateDiscount() {
        if(new Random().nextInt(2) == 0)
            return 0;
        return new Random().nextInt(10);
    }

    private int generatePenalty() {
        if(new Random().nextInt(2) == 0)
            return 0;
        return new Random().nextInt(10);
    }

    private double generateDocumentValue() {
        DecimalFormat format = new DecimalFormat("##.##");
        return Double.parseDouble(format.format(new Random().nextDouble()*100).replace(',','.'));
    }

    private double generateAmountCharged(Bill obj){
        DecimalFormat format = new DecimalFormat("##.##");
        return Double.parseDouble(format.format(obj.getDocumentValue() * (1 - (obj.getDiscount() * 0.01) + (obj.getPenalty() * 0.01))).replace(',','.'));
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
