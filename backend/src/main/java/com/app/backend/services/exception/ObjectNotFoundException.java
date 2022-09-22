package com.app.backend.services.exception;

public class ObjectNotFoundException extends  RuntimeException {
    public ObjectNotFoundException(String msg) {
        super(msg);
    }
}
