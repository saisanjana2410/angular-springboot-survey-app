import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SurveyService } from './survey.service';
import { Survey } from './survey';

describe('SurveyService', () => {
  let service: SurveyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SurveyService]
    });
    service = TestBed.inject(SurveyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch surveys', () => {
    const dummySurveys: Survey[] = [
      { firstName: 'John', lastName: 'Doe', street: '', city: '', state: '', zip: '', telephone: '', email: '', dateOfSurvey: '', likedMost: [], interestedIn: '', likelihood: '', comments: '' }
    ];

    service.getSurveys().subscribe(surveys => {
      expect(surveys.length).toBe(1);
      expect(surveys).toEqual(dummySurveys);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/surveys');
    expect(req.request.method).toBe('GET');
    req.flush(dummySurveys);
  });

});
