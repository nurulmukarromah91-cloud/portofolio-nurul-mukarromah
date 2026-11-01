import React from 'react';
import { Calendar, Award, BookOpen, Users, Compass, Plus, Sparkles, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onOpenPersonalize: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  onOpenPersonalize,
}) => {
  const getCategoryIcon = (category: ExperienceItem['category']) => {
    const props = { className: "w-5 h-5" };
    switch (category) {
      case 'Akademik': return <BookOpen {...props} />;
      case 'Kolaborasi': return <Users {...props} />;
      case 'Pengembangan Mandiri': return <Compass {...props} />;
      case 'Kegiatan Kampus': return <Award {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="pengalaman" className="py-20 bg-white text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Decorative ambient elements */}
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#FFF0F3]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Aktivitas & Pertumbuhan
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Pengalaman & Pengembangan Diri
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Catatan proses belajar aktif, kerja kelompok, pengembangan keahlian mandiri, dan eksplorasi dunia teknologi secara berkelanjutan.
          </p>
        </div>

        {/* Action Header */}
        <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
          <div className="text-xs text-[#8A7C81] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D98FA1]" />
            <span>Riwayat kegiatan dan keterlibatan akademik</span>
          </div>

          <button
            type="button"
            onClick={onOpenPersonalize}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#49383D] bg-[#FFF5F7] hover:bg-white border border-[#F2DDE2] hover:border-[#D98FA1] transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-[#D98FA1]" />
            <span>Tambah Kegiatan / Pengalaman</span>
          </button>
        </div>

        {/* Experience List / Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              className="relative rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-7 shadow-xs hover:border-[#D98FA1] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Left: Icon & Core Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shrink-0 shadow-xs">
                    {getCategoryIcon(exp.category)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#D98FA1] uppercase tracking-wider">
                      {exp.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#49383D] tracking-tight mt-0.5">
                      {exp.activityName}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A7C81] font-medium mt-0.5">
                      Peran: <span className="text-[#49383D] font-semibold">{exp.role}</span>
                    </p>
                  </div>
                </div>

                {/* Right: Period Tag */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F2DDE2] text-xs text-[#8A7C81] self-start sm:self-auto shrink-0 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#D98FA1]" />
                  <span>{exp.period}</span>
                </div>

              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#8A7C81] leading-relaxed pl-0 sm:pl-16">
                {exp.description}
              </p>

              {/* Documentation note */}
              {exp.documentationNote && (
                <div className="mt-4 pt-3 border-t border-[#F2DDE2] flex items-center gap-2 text-xs text-[#8A7C81] pl-0 sm:pl-16">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D98FA1] shrink-0" />
                  <span>Dokumentasi: {exp.documentationNote}</span>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Realism reminder notice */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] text-xs text-[#8A7C81] text-center">
          Daftar ini memuat pengalaman nyata kegiatan belajar dan pengembangan diri mahasiswa, tanpa mencantumkan entitas organisasi atau jabatan fiktif.
        </div>

      </div>
    </section>
  );
};
