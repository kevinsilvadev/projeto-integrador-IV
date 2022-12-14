package com.app.backend.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginQrcodeRequest {
    @NotBlank
    private String qrcode;

}