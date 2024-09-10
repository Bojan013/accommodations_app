package org.example.labs.service.impl;

import org.example.labs.model.Country;
import org.example.labs.model.Host;
import org.example.labs.model.exceptions.CountryNotFoundException;
import org.example.labs.repository.CountryRepository;
import org.example.labs.repository.HostRepository;
import org.example.labs.service.HostService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HostServiceImpl implements HostService {
    private final HostRepository hostRepository;
    private final CountryRepository countryRepository;

    public HostServiceImpl(HostRepository hostRepository, CountryRepository countryRepository) {
        this.hostRepository = hostRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Host> findAll() {
        return hostRepository.findAll();
    }

    @Override
    public Optional<Host> save(String name, String surname, String countryName) {
        Country country = countryRepository.findByName(countryName).orElseThrow(() -> new CountryNotFoundException("Country Not Found"));
        Host host = new Host(name, surname, country);
        hostRepository.save(host);
        return Optional.of(host);
    }
}
