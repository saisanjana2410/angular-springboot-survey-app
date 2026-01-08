/*
 Names:
 Sanjana Kambalapally - G01506405
 Shreya Shitole - G01517081
 Shravani Vasa - G01543148
 Akhil Akkineni - G01547445
 */

 /*
 The file is named as Survey.java
 This class represents the Survey entity mapped to the surveys table.
 It stores survey responses submitted by users and is managed by JPA.
 */

package com.swe.hw3.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "surveys")  // Mapping to 'surveys' table in the database
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Survey fields
    private String firstName;
    private String lastName;
    private String street;
    private String city;
    private String state;
    private String zip;
    private String telephone;
    private String email;
    private String dateOfSurvey;
    private String interestedIn;
    private String likelihood;
    private String comments;

    @ElementCollection
    @CollectionTable(name = "survey_liked_most", joinColumns = @JoinColumn(name = "survey_id"))
    @Column(name = "liked_most")
    private List<String> likedMost = new ArrayList<>();

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }

    public String getTelephone() { return telephone; }
    public void setTelephone(String telephone) { this.telephone = telephone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDateOfSurvey() { return dateOfSurvey; }
    public void setDateOfSurvey(String dateOfSurvey) { this.dateOfSurvey = dateOfSurvey; }

    public String getInterestedIn() { return interestedIn; }
    public void setInterestedIn(String interestedIn) { this.interestedIn = interestedIn; }

    public String getLikelihood() { return likelihood; }
    public void setLikelihood(String likelihood) { this.likelihood = likelihood; }

    public String getComments() { return comments; }
    public void setComments(String comments) { this.comments = comments; }

    public List<String> getLikedMost() { return likedMost; }
    public void setLikedMost(List<String> likedMost) { this.likedMost = likedMost; }
}
