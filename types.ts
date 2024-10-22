export interface PersonalInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export interface Data {
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: string[];
  achievements: string[];
}
