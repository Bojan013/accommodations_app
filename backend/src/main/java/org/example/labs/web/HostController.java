package org.example.labs.web;

import org.example.labs.model.Host;
import org.example.labs.service.HostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/hosts")
public class HostController {
    private final HostService hostService;

    public HostController(HostService hostService) {
        this.hostService = hostService;
    }

    @GetMapping
    public List<Host> findAll() {
        return hostService.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Host> save(@RequestParam String name,
                                     @RequestParam String surname,
                                     @RequestParam String countryName) {
        return hostService.save(name, surname, countryName)
                .map(host -> ResponseEntity.ok().body(host))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}
