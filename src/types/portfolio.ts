export interface ProjectItem {
  id: string;
  title: string;
  category: 'Presentasi & Desain' | 'Karya Tulis & Makalah' | 'Sistem Informasi & Bisnis';
  description: string;
  details: string;
  tools: string[];
  linkUrl?: string;
  linkLabel?: string;
  dateOrSemester?: string;
  thumbnailGradient: string;
  iconName: 'presentation' | 'file-text' | 'palette' | 'database' | 'briefcase';
}

export interface ExperienceItem {
  id: string;
  activityName: string;
  role: string;
  period: string;
  description: string;
  category: 'Akademik' | 'Kolaborasi' | 'Pengembangan Mandiri' | 'Kegiatan Kampus';
  documentationNote?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Aplikasi & Desain' | 'Soft Skills' | 'Teknologi';
  description: string;
  iconName: 'file-text' | 'monitor' | 'palette' | 'message-square' | 'users' | 'pen-tool' | 'cpu';
}

export interface ContactDetails {
  email: string;
  whatsapp: string;
  instagram: string;
  linkedin: string;
  location: string;
}

export interface PersonalProfile {
  name: string;
  status: string;
  major: string;
  university: string;
  origin: string;
  domicile: string;
  hobbies: string[];
  headline: string;
  subGreeting: string;
  aboutBio: string;
  aspirationTitle: string;
  aspirationText: string;
}
