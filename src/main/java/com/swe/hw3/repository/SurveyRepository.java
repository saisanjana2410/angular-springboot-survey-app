/*
 Names:
 Sanjana Kambalapally - G01506405
 Shreya Shitole - G01517081
 Shravani Vasa - G01543148
 Akhil Akkineni - G01547445
 */

 /*
 The file is named as SurveyRepository.java
 This interface represents the repository layer for performing different operations on the Survey entity.
 */

package com.swe.hw3.repository;

import com.swe.hw3.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
