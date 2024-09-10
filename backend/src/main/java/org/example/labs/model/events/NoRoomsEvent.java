package org.example.labs.model.events;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.EventListener;

@Getter
public class NoRoomsEvent extends ApplicationEvent {
    private final String message;


    public NoRoomsEvent(Object source) {
        super(source);
        this.message = "No more rooms left!";
    }
}
