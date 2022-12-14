package com.app.backend.controllers;

import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.app.backend.enums.ERole;
import com.app.backend.model.Bill;
import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.app.backend.model.Role;
import com.app.backend.payload.*;
import com.app.backend.repository.BillRepository;
import com.app.backend.repository.CompanyRepository;
import com.app.backend.repository.CustomerRepository;
import com.app.backend.repository.RoleRepository;
import com.app.backend.security.jwt.JwtUtils;
import com.app.backend.security.services.UserDetailsImpl;
import com.app.backend.services.BillService;
import com.app.backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    CustomerService customerService;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    BillService billService;

    @Autowired
    private BillRepository billRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getCpf(), loginRequest.getSenha()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        JwtResponse jwtResponse = new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getCpf(),
                userDetails.getEmail(),
                userDetails.getName(),
                userDetails.getUrlPhoto(),
                roles,
                userDetails.getCompanyList(),
                userDetails.getQrcode());


        return ResponseEntity.ok(jwtResponse);
    }

    @GetMapping(value = "/qrcode")
    public ResponseEntity<List<Company>> findCompanyListByQrCode (@RequestParam String qrcode) {
        List<Company> company1 = customerService.findCompanyListByQrCode(qrcode);
        return ResponseEntity.ok().body(company1);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (customerRepository.existsByCpf(signUpRequest.getCpf())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: CPF is already taken!"));
        }

        if (customerRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        Customer customer = new Customer(
                signUpRequest.getCpf(),
                signUpRequest.getCnpj(),
                signUpRequest.getUrlPhoto(),
                signUpRequest.getName(),
                encoder.encode(signUpRequest.getSenha()),
                signUpRequest.getEmail());

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        customer.setRoles(roles);
        customerRepository.save(customer);

        return ResponseEntity.ok(new MessageResponse("Customer registered successfully!"));
    }

    @PostMapping(value = "/addCompany")
    public ResponseEntity<Customer> insert(@RequestParam String companyCnpj,@RequestParam String customerCpf) throws Exception {
        Company company = companyRepository.findByCnpj(companyCnpj);
        Customer customer = customerService.addCompany(customerCpf,company);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(customer.getId()).toUri();
        return ResponseEntity.created(uri).body(customer);
    }

    @PostMapping(value = "/generate")
    public ResponseEntity<List<Bill>> generateBill(@RequestParam String cpf, @RequestParam String cnpj) throws Exception {
        List<Bill> obj = billService.getBill(cpf,cnpj);
        //URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{documentNumber}").buildAndExpand(obj.getDocumentNumber()).toUri();
        return new ResponseEntity(obj, HttpStatus.OK);
    }
}