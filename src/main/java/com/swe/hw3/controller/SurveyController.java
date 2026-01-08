/*
 Names:
 Sanjana Kambalapally - G01506405
 Shreya Shitole - G01517081
 Shravani Vasa - G01543148
 Akhil Akkineni - G01547445
 */

 /*
 The file is named as SurveyController.java
 This controller exposes REST API endpoints for managing surveys.
 It handles create, read, update, and delete (CRUD) operations.
 */
package com.swe.hw3.controller;

import com.swe.hw3.model.Survey;
import com.swe.hw3.service.SurveyService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyController {

    private final SurveyService service;

    public SurveyController(SurveyService service) {
        this.service = service;
    }

    @PostMapping
    public Survey createSurvey(@RequestBody Survey survey) {
        return service.saveSurvey(survey);
    }

    @GetMapping
    public List<Survey> getAllSurveys() {
        return service.getAllSurveys();
    }

    @GetMapping("/{id}")
    public Survey getSurvey(@PathVariable Long id) {
        return service.getSurveyById(id);
    }

    @PutMapping("/{id}")
    public Survey updateSurvey(@PathVariable Long id, @RequestBody Survey updated) {
        return service.updateSurvey(id, updated);
    }

    @DeleteMapping("/{id}")
    public void deleteSurvey(@PathVariable Long id) {
        service.deleteSurvey(id);
    }
}
