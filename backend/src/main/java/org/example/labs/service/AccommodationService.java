package org.example.labs.service;

import org.example.labs.model.Accommodation;
import org.example.labs.model.DTO.AccommodationDto;
import org.example.labs.model.enumerations.AccommodationType;

import java.nio.channels.FileChannel;
import java.util.List;
import java.util.Optional;

public interface AccommodationService {

    List<Accommodation> findAll();

    Optional<Accommodation> findById(Long id);

    Optional<Accommodation> save(AccommodationDto accommodationDto);

    void delete(Long id);

    Optional<Accommodation> edit(Long id, String name, AccommodationType category, Integer numRooms, boolean isRented);

    Optional<Accommodation> rent(Long id);

    Optional<Accommodation> getAccommodation(Long id);
}
