/*
 Names:
 Sanjana Kambalapally - G01506405
 Shreya Shitole - G01517081
 Shravani Vasa - G01543148
 Akhil Akkineni - G01547445
 */

/*
This file is named as SurveyService.java
This interface represents the service layer for managing Survey entities.

*/
 package com.swe.hw3.service;

import com.swe.hw3.model.Survey;
import java.util.List;

public interface SurveyService {
    Survey saveSurvey(Survey survey); //saves new survey
    List<Survey> getAllSurveys();  //retrieves all surveys
    Survey getSurveyById(Long id); // retrieves survey by  particualr id
    Survey updateSurvey(Long id, Survey updatedSurvey); // updates survey by particular id
    void deleteSurvey(Long id); // deletes survey by particular id
}
