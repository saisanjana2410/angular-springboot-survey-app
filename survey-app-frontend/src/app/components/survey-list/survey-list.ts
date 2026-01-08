import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../services/survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.html',
  styleUrls: ['./survey-list.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SurveyList implements OnInit {
  surveys: Survey[] = [];
  editingSurvey: Survey | null = null;

  optionsLikedMost = ['students', 'location', 'campus', 'atmosphere', 'dorm rooms', 'sports'];
  optionsInterestedIn = ['friends', 'television', 'Internet', 'other'];
  optionsLikelihood = ['Very Likely', 'Likely', 'Unlikely'];

  constructor(
    private surveyService: SurveyService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.loadSurveys();
    });
  }

  loadSurveys() {
    this.surveyService.getSurveys().subscribe({
      next: data => {
        this.surveys = [...data];
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Failed to load surveys', err);
        this.surveys = [];
      }
    });
  }

  deleteSurvey(id?: number) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe({
        next: () => {
          this.surveys = this.surveys.filter(s => s.id !== id);
          this.cdr.detectChanges();
          alert('Survey deleted!');
        },
        error: err => console.error(err)
      });
    }
  }

  openEditModal(survey: Survey) {
    this.editingSurvey = { 
      ...survey,
      likedMost: [...survey.likedMost]
    };
  }

  closeModal() {
    this.editingSurvey = null;
  }

  toggleEditLikedMost(option: string) {
    if (!this.editingSurvey) return;
    const idx = this.editingSurvey.likedMost.indexOf(option);
    if (idx > -1) this.editingSurvey.likedMost.splice(idx, 1);
    else this.editingSurvey.likedMost.push(option);
  }

  async updateSurvey() {
    if (!this.editingSurvey || this.editingSurvey.id == null) return;

    const surveyId = this.editingSurvey.id;
    const surveyData = { ...this.editingSurvey };

    this.surveyService.updateSurvey(surveyId, surveyData).subscribe({
      next: async (updatedSurvey) => {
        // Update surveys array
        this.surveys = this.surveys.map(s => 
          s.id === updatedSurvey.id ? updatedSurvey : s
        );
        
        // Wait a tick for the update to process
        await new Promise(resolve => setTimeout(resolve, 0));
        
        // Close modal
        this.editingSurvey = null;
        
        // Force change detection
        this.cdr.detectChanges();
        
        // Wait another tick before showing alert
        await new Promise(resolve => setTimeout(resolve, 0));
        
        alert('Survey updated successfully!');
      },
      error: err => {
        console.error('Failed to update survey', err);
        alert('Failed to update survey. Please try again.');
      }
    });
  }
}