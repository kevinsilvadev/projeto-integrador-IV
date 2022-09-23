package com.app.backend.services.exception;

public class ObjectError extends RuntimeException{
    public ObjectError(String msg) {
        super(msg);
    }
}
