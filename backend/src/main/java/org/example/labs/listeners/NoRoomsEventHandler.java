package org.example.labs.listeners;

import org.example.labs.model.events.NoRoomsEvent;
import org.example.labs.service.AccommodationService;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class NoRoomsEventHandler {
    private final AccommodationService accommodationService;

    public NoRoomsEventHandler(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @EventListener
    public void onNoMoreRoomsLeft(NoRoomsEvent event) {
        System.out.println(event.getMessage());
    }
}
