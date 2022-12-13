package com.app.backend.payload;


import com.app.backend.model.Company;

import java.util.ArrayList;
import java.util.List;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String id;
    private String username;
    private String email;

    private String name;

    private String urlPhoto;
    private List<String> roles;

    private String qrcode;

    private List<Company> companyList = new ArrayList<>();

    public JwtResponse(String accessToken, String id, String username, String email, String name, String urlPhoto, List<String> roles, List<Company> companyList, String qrcode) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.roles = roles;
        this.urlPhoto = urlPhoto;
        this.companyList.addAll(companyList);
        this.qrcode = qrcode;
        System.out.println(this.companyList);
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public String getUrlPhoto() {
        return urlPhoto;
    }

    public List<String> getRoles() {
        return roles;
    }

    public List<Company> getCompanyList() {
        return companyList;
    }

    public String getQrcode() { return qrcode; }
}