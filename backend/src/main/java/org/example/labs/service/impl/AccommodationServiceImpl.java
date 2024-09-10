package org.example.labs.service.impl;

import org.example.labs.model.Accommodation;
import org.example.labs.model.DTO.AccommodationDto;
import org.example.labs.model.Host;
import org.example.labs.model.enumerations.AccommodationType;
import org.example.labs.model.events.NoRoomsEvent;
import org.example.labs.model.exceptions.AccommodationNotFoundException;
import org.example.labs.model.exceptions.HostNotFoundException;
import org.example.labs.repository.AccommodationRepository;
import org.example.labs.repository.HostRepository;
import org.example.labs.service.AccommodationService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccommodationServiceImpl implements AccommodationService {
    private final AccommodationRepository accommodationRepository;
    private final HostRepository hostRepository;

    private final ApplicationEventPublisher applicationEventPublisher;

    public AccommodationServiceImpl(AccommodationRepository accommodationRepository, HostRepository hostRepository, ApplicationEventPublisher applicationEventPublisher) {
        this.accommodationRepository = accommodationRepository;
        this.hostRepository = hostRepository;
        this.applicationEventPublisher = applicationEventPublisher;
    }

    @Override
    public List<Accommodation> findAll() {
        return accommodationRepository.findAll();
    }

    @Override
    public Optional<Accommodation> findById(Long id) {
        return accommodationRepository.findById(id);
    }

    @Override
    public Optional<Accommodation> save(AccommodationDto accommodationDto) {
        Host host = hostRepository.findById(accommodationDto.getHostId()).orElseThrow(() -> new HostNotFoundException("Host not found"));
        accommodationRepository.deleteByName(accommodationDto.getName());
        Accommodation accommodation = new Accommodation(accommodationDto.getName(), accommodationDto.getCategory(), host, accommodationDto.getNumRooms());
        accommodationRepository.save(accommodation);
        return Optional.of(accommodation);
    }

    @Override
    public void delete(Long id) {
        Accommodation accommodation = accommodationRepository.findById(id).orElseThrow(() -> new AccommodationNotFoundException("Accommodation Not Found"));
        accommodationRepository.delete(accommodation);
    }

    @Override
    public Optional<Accommodation> edit(Long id, String name, AccommodationType category, Integer numRooms, boolean isRented) {
        Accommodation accommodation = accommodationRepository.findById(id).orElseThrow(() -> new AccommodationNotFoundException("Accommodation Not Found"));

        accommodation.setName(name);
        accommodation.setCategory(category);
        accommodation.setNumRooms(numRooms);
        accommodation.setRented(isRented);
        accommodationRepository.save(accommodation);
        return Optional.of(accommodation);
    }

    @Override
    public Optional<Accommodation> rent(Long id) {
        Accommodation accommodation = accommodationRepository.findById(id).orElseThrow(() -> new AccommodationNotFoundException("Accommodation Not Found"));
//        accommodation.setRented(!accommodation.isRented());
        int roomsLeft = accommodation.getNumRooms();
        accommodation.setNumRooms(roomsLeft - 1);
        accommodationRepository.save(accommodation);
        if (roomsLeft - 1 == 0) {
            applicationEventPublisher.publishEvent(new NoRoomsEvent(accommodation));
        }
        return Optional.of(accommodation);
    }

    @Override
    public Optional<Accommodation> getAccommodation(Long id) {
        return Optional.of(accommodationRepository.findById(id).orElseThrow(() -> new AccommodationNotFoundException("Accommodation Not Found")));
    }
}
