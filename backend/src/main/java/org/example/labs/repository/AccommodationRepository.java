package org.example.labs.repository;

import org.example.labs.model.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
    void deleteByName(String name);
}
