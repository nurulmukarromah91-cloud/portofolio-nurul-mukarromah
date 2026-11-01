/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  initialProfile, 
  initialSkills, 
  initialProjects, 
  initialExperiences, 
  initialContact 
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Aspirations } from './components/Aspirations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PersonalizeModal } from './components/PersonalizeModal';
import { 
  PersonalProfile, 
  SkillItem, 
  ProjectItem, 
  ExperienceItem, 
  ContactDetails 
} from './types/portfolio';

const STORAGE_KEYS = {
  PROFILE: 'nm_portfolio_profile',
  SKILLS: 'nm_portfolio_skills',
  PROJECTS: 'nm_portfolio_projects',
  EXPERIENCES: 'nm_portfolio_experiences',
  CONTACT: 'nm_portfolio_contact',
  AVATAR: 'nm_portfolio_avatar',
};

export default function App() {
  const [profile, setProfile] = useState<PersonalProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return saved ? JSON.parse(saved) : initialSkills;
    } catch {
      return initialSkills;
    }
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.EXPERIENCES);
      return saved ? JSON.parse(saved) : initialExperiences;
    } catch {
      return initialExperiences;
    }
  });

  const [contact, setContact] = useState<ContactDetails>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACT);
      return saved ? JSON.parse(saved) : initialContact;
    } catch {
      return initialContact;
    }
  });

  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AVATAR) || '';
    } catch {
      return '';
    }
  });

  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCES, JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(contact));
  }, [contact]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AVATAR, avatarUrl);
  }, [avatarUrl]);

  // Handlers
  const handleUpdateProjectLink = (projectId: string, newUrl: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, linkUrl: newUrl } : p))
    );
  };

  const handleAddProject = (newProject: ProjectItem) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleAddExperience = (newExp: ExperienceItem) => {
    setExperiences((prev) => [newExp, ...prev]);
  };

  const handleAddSkill = (newSkill: SkillItem) => {
    setSkills((prev) => [...prev, newSkill]);
  };

  const handleSaveContact = (newContact: ContactDetails) => {
    setContact(newContact);
  };

  const handleSaveAvatarUrl = (url: string) => {
    setAvatarUrl(url);
  };

  const handleResetToDefaults = () => {
    setProfile(initialProfile);
    setSkills(initialSkills);
    setProjects(initialProjects);
    setExperiences(initialExperiences);
    setContact(initialContact);
    setAvatarUrl('');
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.EXPERIENCES);
    localStorage.removeItem(STORAGE_KEYS.CONTACT);
    localStorage.removeItem(STORAGE_KEYS.AVATAR);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#49383D] flex flex-col font-sans selection:bg-[#F4B6C2] selection:text-[#49383D]">
      {/* Top Fixed Navbar */}
      <Navbar onOpenPersonalize={() => setIsPersonalizeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          profile={profile}
          customAvatarUrl={avatarUrl}
          onUploadAvatar={(dataUrl) => setAvatarUrl(dataUrl)}
          onRemoveAvatar={() => setAvatarUrl('')}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 2. Tentang Saya */}
        <About 
          profile={profile} 
          customAvatarUrl={avatarUrl} 
        />

        {/* 3. Pendidikan */}
        <Education profile={profile} />

        {/* 4. Keahlian */}
        <Skills
          skills={skills}
          onAddSkill={handleAddSkill}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 5. Proyek Portofolio */}
        <Projects
          projects={projects}
          onUpdateProjectLink={handleUpdateProjectLink}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 6. Pengalaman dan Pengembangan Diri */}
        <Experience
          experiences={experiences}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* 7. Tujuan dan Cita-Cita */}
        <Aspirations profile={profile} />

        {/* 8. Kontak */}
        <Contact
          contact={contact}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer contact={contact} />

      {/* Floating Personalize Button (Desktop & Mobile) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsPersonalizeOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 hover:bg-[#FFF5F7] text-[#49383D] hover:text-[#D98FA1] border border-[#F2DDE2] shadow-lg shadow-[#F4B6C2]/25 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105"
          title="Buka panel personalisasi data portofolio"
        >
          <span className="w-2 h-2 rounded-full bg-[#D98FA1] group-hover:animate-ping" />
          <span className="text-xs font-semibold">Sesuaikan Portofolio</span>
        </button>
      </div>

      {/* Personalize & Data Management Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        contact={contact}
        onSaveContact={handleSaveContact}
        onAddProject={handleAddProject}
        onAddExperience={handleAddExperience}
        onAddSkill={handleAddSkill}
        avatarUrl={avatarUrl}
        onSaveAvatarUrl={handleSaveAvatarUrl}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
}
