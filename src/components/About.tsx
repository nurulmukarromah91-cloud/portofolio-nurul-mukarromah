import React from 'react';
import { User, BookOpen, MapPin, Heart, Compass, Lightbulb, Target } from 'lucide-react';
import { PersonalProfile } from '../types/portfolio';

interface AboutProps {
  profile: PersonalProfile;
  customAvatarUrl?: string;
}

export const About: React.FC<AboutProps> = ({ profile, customAvatarUrl }) => {
  return (
    <section id="tentang" className="py-20 bg-white text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Soft decorative background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FCE4EC]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFF0F3]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Profil Pribadi
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Tentang Saya
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Mengenal lebih dekat latar belakang, minat teknologi, serta komitmen pembelajaran saya sebagai mahasiswa Sistem Informasi.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Data Diri Ringkas (Biodata Cards) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3.5 pb-5 border-b border-[#F2DDE2]">
                {customAvatarUrl ? (
                  <img
                    src={customAvatarUrl}
                    alt={profile.name}
                    className="w-12 h-12 rounded-xl object-cover border border-[#F2DDE2] shadow-xs shrink-0"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shrink-0 shadow-xs">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-[#49383D]">Biodata Singkat</h3>
                  <p className="text-xs text-[#8A7C81]">Informasi dasar mahasiswa</p>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Nama Lengkap</span>
                  <span className="text-[#49383D] font-semibold text-right">{profile.name}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Status</span>
                  <span className="text-[#49383D] font-semibold text-right">{profile.status}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Program Studi</span>
                  <span className="text-[#D98FA1] font-semibold text-right">{profile.major}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Perguruan Tinggi</span>
                  <span className="text-[#49383D] font-semibold text-right">{profile.university}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Daerah Asal</span>
                  <span className="text-[#49383D] font-semibold text-right">{profile.origin}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#F2DDE2]/60">
                  <span className="text-[#8A7C81] text-xs font-medium">Domisili</span>
                  <span className="text-[#49383D] font-semibold text-right flex items-center justify-end gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D98FA1]" />
                    <span>{profile.domicile}</span>
                  </span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-[#8A7C81] text-xs font-medium">Hobi & Kegemaran</span>
                  <div className="text-right">
                    <span className="text-[#49383D] font-semibold block">{profile.hobbies.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick highlight box */}
            <div className="rounded-2xl bg-white border border-[#F2DDE2] p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#FFF5F7] text-[#D98FA1] border border-[#F2DDE2] shrink-0">
                  <Heart className="w-4 h-4 fill-[#D98FA1]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D98FA1]">Minat & Ketertarikan</h4>
                  <p className="mt-1 text-xs text-[#8A7C81] leading-relaxed">
                    Menyukai eksplorasi teknologi informasi, penulisan gagasan, tata letak presentasi visual, dan perancangan konsep bisnis digital.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deskripsi Naratif & Nilai Utama */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Narrative Card */}
            <div className="rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#49383D]">Deskripsi Diri</h3>
                  <p className="text-xs text-[#8A7C81]">Semangat belajar & visi pengembangan diri</p>
                </div>
              </div>

              <blockquote className="text-[#49383D] text-base sm:text-lg leading-relaxed font-normal border-l-4 border-[#D98FA1] pl-4 py-2 italic bg-white/80 rounded-r-xl border-y border-r border-[#F2DDE2]">
                &ldquo;{profile.aboutBio}&rdquo;
              </blockquote>

              {/* 3 Pillars of Nurul's Approach */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F2DDE2]">
                <div className="p-4 rounded-xl bg-white border border-[#F2DDE2] text-left shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#49383D]">Teknologi Terkini</h4>
                  <p className="mt-1.5 text-xs text-[#8A7C81] leading-relaxed">
                    Tertarik memahami bagaimana sistem dan aplikasi bekerja untuk menyelesaikan tantangan nyata.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F2DDE2] text-left shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] mb-3">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#49383D]">Kreativitas & Desain</h4>
                  <p className="mt-1.5 text-xs text-[#8A7C81] leading-relaxed">
                    Menggabungkan kemampuan menulis dan desain presentasi agar materi informatif serta enak dipandang.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#F2DDE2] text-left shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] mb-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#49383D]">Jiwa Wirausaha</h4>
                  <p className="mt-1.5 text-xs text-[#8A7C81] leading-relaxed">
                    Membangun pemikiran kritis untuk merintis bisnis digital yang bermanfaat bagi orang banyak.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote strip */}
            <div className="p-4 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-between text-xs text-[#8A7C81] shadow-xs">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D98FA1]"></span>
                <span className="text-[#49383D] font-medium">Fokus Utama: Akademik Sistem Informasi & Pengembangan Kapabilitas Digital</span>
              </span>
              <span className="font-mono text-[#D98FA1] font-semibold">Universitas Komputama</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
