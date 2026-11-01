import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2, Award } from 'lucide-react';
import { PersonalProfile } from '../types/portfolio';

interface EducationProps {
  profile: PersonalProfile;
}

export const Education: React.FC<EducationProps> = ({ profile }) => {
  return (
    <section id="pendidikan" className="py-20 bg-[#FFF5F7] text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FCE4EC]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Jejak Akademik
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Pendidikan
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Menempuh pendidikan tinggi formal di bidang Sistem Informasi untuk membangun pondasi logika, keahlian teknologi, dan wawasan bisnis modern.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-[#F2DDE2] p-6 sm:p-10 shadow-sm">
            
            {/* Main Header inside Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#F2DDE2]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFF0F3] via-[#FCE4EC] to-[#F8D7DE] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shadow-xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#49383D] tracking-tight">
                    {profile.university}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D98FA1] font-semibold">
                    Program Studi {profile.major}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5F7] border border-[#F2DDE2] text-xs font-medium text-[#49383D]">
                <span className="w-2 h-2 rounded-full bg-[#D98FA1]" />
                <span>Status: {profile.status} Aktif</span>
              </div>
            </div>

            {/* Simple Clean Timeline Representation */}
            <div className="mt-8 space-y-6">
              
              <div className="text-xs uppercase font-bold text-[#8A7C81] tracking-wider">
                Garis Waktu & Fokus Perkuliahan
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#F4B6C2] space-y-8">
                
                {/* Milestone 1: Fondasi Komputasi & Sistem */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#D98FA1] border-4 border-white shadow-xs" />
                  
                  <div className="bg-[#FFF5F7] border border-[#F2DDE2] p-4 sm:p-5 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-[#49383D] flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#D98FA1]" />
                        <span>Fondasi Teknologi & Konsep Sistem Informasi</span>
                      </h4>
                      <span className="text-[11px] text-[#8A7C81] font-medium">Perkuliahan Aktif</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8A7C81] leading-relaxed">
                      Mempelajari dasar-dasar arsitektur komputer, logika pengolahan data, peranan sistem informasi dalam operasional organisasi, dan penguasaan aplikasi produktivitas.
                    </p>
                  </div>
                </div>

                {/* Milestone 2: Analisis, Kolaborasi & Kreativitas */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#D98FA1] border-4 border-white shadow-xs" />
                  
                  <div className="bg-[#FFF5F7] border border-[#F2DDE2] p-4 sm:p-5 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-[#49383D] flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#D98FA1]" />
                        <span>Analisis Kebutuhan & Desain Komunikasi Visual</span>
                      </h4>
                      <span className="text-[11px] text-[#8A7C81] font-medium">Pengembangan Berjalan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8A7C81] leading-relaxed">
                      Mengembangkan kemampuan analisis masalah nyata, penyusunan laporan akademis, serta merancang visual presentasi interaktif menggunakan alat modern seperti Canva dan PowerPoint.
                    </p>
                  </div>
                </div>

                {/* Milestone 3: Visi Bisnis Digital */}
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#D98FA1] border-4 border-white shadow-xs" />
                  
                  <div className="bg-[#FFF5F7] border border-[#F2DDE2] p-4 sm:p-5 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-[#49383D] flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#D98FA1]" />
                        <span>Penerapan Bisnis Digital & Kewirausahaan Teknologi</span>
                      </h4>
                      <span className="text-[11px] text-[#8A7C81] font-medium">Arah Masa Depan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8A7C81] leading-relaxed">
                      Mengintegrasikan pengetahuan sistem informasi dengan strategi wirausaha untuk menciptakan solusi bisnis yang berdampak positif dan membuka peluang luas.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Note */}
            <div className="mt-8 pt-5 border-t border-[#F2DDE2] flex items-center gap-2 text-xs text-[#8A7C81]">
              <CheckCircle2 className="w-4 h-4 text-[#D98FA1] shrink-0" />
              <span>Data resmi perkuliahan aktif di Universitas Komputama, berfokus pada substansi pembelajaran dan pencapaian keilmuan.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
