package com.app.backend.model;

import lombok.Data;
import org.springframework.boot.context.properties.bind.validation.ValidationErrors;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class ErrorDetail implements Serializable {
    private static final long serialVersionUID = 1L;

    private Date timeStamp;

    private String message;

    private String details;

    public ErrorDetail(Date timeStamp, String message, String details) {
        super();
        this.timeStamp = timeStamp;
        this.message = message;
        this.details = details;
    }
    public Date getTimeStamp() {
        return timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }
}
