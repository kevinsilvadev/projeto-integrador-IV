package com.app.backend.security.services;

import com.app.backend.model.Company;
import com.app.backend.model.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    private String id;

    private String cpf;

    private String name;

    private String urlPhoto;

    private String email;

    @JsonIgnore
    private String senha;

    private String qrcode;

    private List<Company> companyList = new ArrayList<>();

    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(String id, String cpf, String name, String urlPhoto, String email, String senha,
                           Collection<? extends GrantedAuthority> authorities, List<Company> companyList, String qrcode) {
        this.id = id;
        this.cpf = cpf;
        this.name = name;
        this.urlPhoto = urlPhoto;
        this.email = email;
        this.senha = senha;
        this.authorities = authorities;
        this.companyList.addAll(companyList);
        this.qrcode = qrcode;
    }

    public static UserDetailsImpl build(Customer customer) {
        List<GrantedAuthority> authorities = customer.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new UserDetailsImpl(
                customer.getId(),
                customer.getCpf(),
                customer.getName(),
                customer.getUrlPhoto(),
                customer.getEmail(),
                customer.getSenha(),
                authorities,
                customer.getCompanyList(),
                customer.getQrcode());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    public String getUsername() {
        return cpf;
    }

    public String getQrcode() { return qrcode; }

    public List<Company> getCompanyList(){
        return companyList;
    }

    public String getName() {
        return name;
    }

    public String getUrlPhoto() {
        return urlPhoto;
    }

    public String getCpf() {
        return cpf;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }
}