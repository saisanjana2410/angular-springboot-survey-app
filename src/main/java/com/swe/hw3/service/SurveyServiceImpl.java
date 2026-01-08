/*
 Names:
 Sanjana Kambalapally - G01506405
 Shreya Shitole - G01517081
 Shravani Vasa - G01543148
 Akhil Akkineni - G01547445
 */

 /*
 This file is named as SurveyServiceImpl.java
 This class interacts with the database through the SurveyRepository.
 */

package com.swe.hw3.service;

import com.swe.hw3.model.Survey;
import com.swe.hw3.repository.SurveyRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SurveyServiceImpl implements SurveyService {

    private final SurveyRepository repository;

    public SurveyServiceImpl(SurveyRepository repository) {
        this.repository = repository;
    }

    @Override
    public Survey saveSurvey(Survey survey) {
        return repository.save(survey);
    }

    @Override
    public List<Survey> getAllSurveys() {
        return repository.findAll();
    }

    @Override
    public Survey getSurveyById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Survey not found with id: " + id));
    }

    @Override
    public Survey updateSurvey(Long id, Survey updatedSurvey) {
        Survey existing = getSurveyById(id);

        existing.setFirstName(updatedSurvey.getFirstName());
        existing.setLastName(updatedSurvey.getLastName());
        existing.setStreet(updatedSurvey.getStreet());
        existing.setCity(updatedSurvey.getCity());
        existing.setState(updatedSurvey.getState());
        existing.setZip(updatedSurvey.getZip());
        existing.setTelephone(updatedSurvey.getTelephone());
        existing.setEmail(updatedSurvey.getEmail());
        existing.setDateOfSurvey(updatedSurvey.getDateOfSurvey());
        existing.setInterestedIn(updatedSurvey.getInterestedIn());
        existing.setLikelihood(updatedSurvey.getLikelihood());
        existing.setComments(updatedSurvey.getComments());
        existing.setLikedMost(updatedSurvey.getLikedMost());

        return repository.save(existing);
    }

    @Override
    public void deleteSurvey(Long id) {
        repository.deleteById(id);
    }
}
