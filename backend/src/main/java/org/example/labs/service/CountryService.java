package org.example.labs.service;

import org.example.labs.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<Country> findAll();

    Optional<Country> save(String name, String continent);
}
