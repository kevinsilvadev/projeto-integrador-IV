package com.app.backend.handler;

import com.app.backend.error.ResourceInvalidDataException;
import com.app.backend.error.ResourceNotFoundException;
import com.app.backend.model.ErrorDetail;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import java.util.Date;

@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(Exception.class)
    public  final ResponseEntity<ErrorDetail> handleAllException (Exception ex, WebRequest request) {
        ErrorDetail dt = new ErrorDetail(
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
        return new ResponseEntity<>(dt, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public  final ResponseEntity<ErrorDetail> resourceNotFoundException (Exception ex, WebRequest request) {
        ErrorDetail dt = new ErrorDetail(
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
        return new ResponseEntity<>(dt, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ResourceInvalidDataException.class)
    public  final ResponseEntity<ErrorDetail> resourceInvalidDataException (Exception ex, WebRequest request) {
        ErrorDetail dt = new ErrorDetail(
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
        return new ResponseEntity<>(dt, HttpStatus.BAD_REQUEST);
    }
}
