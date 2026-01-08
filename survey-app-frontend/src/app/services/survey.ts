export interface Survey {
  id?: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  telephone: string;
  email: string;
  dateOfSurvey: string;
  likedMost: string[];
  interestedIn: string;
  likelihood: string;
  comments: string;
}
