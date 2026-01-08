import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../services/survey';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.html',
  styleUrls: ['./survey-form.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SurveyForm implements OnInit {
  @ViewChild('surveyForm', { static: false }) surveyFormRef!: NgForm;

  survey: Survey = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    telephone: '',
    email: '',
    dateOfSurvey: '',
    likedMost: [],
    interestedIn: '',
    likelihood: '',
    comments: ''
  };

  optionsLikedMost = ['students', 'location', 'campus', 'atmosphere', 'dorm rooms', 'sports'];
  optionsInterestedIn = ['friends', 'television', 'Internet', 'other'];
  optionsLikelihood = ['Very Likely', 'Likely', 'Unlikely'];

  constructor(
    private surveyService: SurveyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.survey.dateOfSurvey = this.getTodayDate();
  }

  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  toggleLikedMost(option: string) {
    const index = this.survey.likedMost.indexOf(option);
    if (index > -1) {
      this.survey.likedMost.splice(index, 1);
    } else {
      this.survey.likedMost.push(option);
    }
  }

  submitSurvey() {
    const surveyData = { ...this.survey, likedMost: [...this.survey.likedMost] };
    
    this.surveyService.submitSurvey(surveyData).subscribe({
      next: (response) => {
        alert('Survey submitted successfully!');
        
        // Use setTimeout to ensure it happens after alert is dismissed
        setTimeout(() => {
          this.surveyFormRef.reset();
          this.survey = {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            telephone: '',
            email: '',
            dateOfSurvey: this.getTodayDate(),
            likedMost: [],
            interestedIn: '',
            likelihood: '',
            comments: ''
          };
        }, 100);
      },
      error: (err) => {
        console.error('Error submitting survey:', err);
        alert('Failed to submit survey. Please try again.');
      }
    });
  }

  cancelForm() {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
      this.clearForm();
    }
  }

  clearForm() {
    this.surveyFormRef.reset();
    this.survey = {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      telephone: '',
      email: '',
      dateOfSurvey: this.getTodayDate(),
      likedMost: [],
      interestedIn: '',
      likelihood: '',
      comments: ''
    };
  }
}