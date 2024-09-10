package org.example.labs.model.DTO;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.example.labs.model.Host;
import org.example.labs.model.enumerations.AccommodationType;

@Data
public class AccommodationDto {
    private String name;

    private AccommodationType category;

    private Long hostId;

    private Integer numRooms;

    private boolean isRented;
}
