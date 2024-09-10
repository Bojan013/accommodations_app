package org.example.labs.model.exceptions;

public class HostNotFoundException extends RuntimeException{
    public HostNotFoundException(String message) {
        super(message);
    }
}
