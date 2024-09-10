package org.example.labs.service;

import org.example.labs.model.Host;

import java.util.List;
import java.util.Optional;

public interface HostService {
    List<Host> findAll();

    Optional<Host> save(String name, String surname, String country);
}
