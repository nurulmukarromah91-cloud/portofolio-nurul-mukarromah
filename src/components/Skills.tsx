import React, { useState } from 'react';
import { 
  FileText, 
  Monitor, 
  Palette, 
  MessageSquare, 
  Users, 
  PenTool, 
  Cpu, 
  Plus, 
  Sparkles,
  Info
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  skills: SkillItem[];
  onAddSkill: (newSkill: SkillItem) => void;
  onOpenPersonalize: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ skills, onOpenPersonalize }) => {
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'Aplikasi & Desain' | 'Soft Skills' | 'Teknologi'>('Semua');

  const filteredSkills = activeCategory === 'Semua' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const renderIcon = (iconName: SkillItem['iconName']) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'file-text': return <FileText {...props} />;
      case 'monitor': return <Monitor {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'message-square': return <MessageSquare {...props} />;
      case 'users': return <Users {...props} />;
      case 'pen-tool': return <PenTool {...props} />;
      case 'cpu': return <Cpu {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="keahlian" className="py-20 bg-white text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Ambient gradient */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#FFF0F3]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Kompetensi & Kapabilitas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Keahlian & Kemampuan
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Perpaduan penguasaan aplikasi produktivitas, keahlian desain komunikasi visual, kemampuan interpersonal, serta adaptabilitas belajar teknologi baru.
          </p>
        </div>

        {/* Category Filter Controls & Add Skill Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
            {(['Semua', 'Aplikasi & Desain', 'Soft Skills', 'Teknologi'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-[#D98FA1] font-bold border border-[#F2DDE2] shadow-xs'
                    : 'text-[#8A7C81] hover:text-[#49383D] hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Action: Personalize / Edit Skills */}
          <button
            type="button"
            onClick={onOpenPersonalize}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#49383D] bg-white hover:bg-[#FFF5F7] border border-[#F2DDE2] hover:border-[#D98FA1] transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-[#D98FA1]" />
            <span>Tambah / Edit Keahlian</span>
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] hover:border-[#D98FA1] p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#F4B6C2]/15 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Category Label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#F2DDE2] group-hover:border-[#D98FA1] flex items-center justify-center text-[#D98FA1] shadow-xs transition-colors">
                    {renderIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8A7C81]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-[#49383D] group-hover:text-[#D98FA1] transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-[#8A7C81] leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Card Footer Status */}
              <div className="mt-4 pt-3 border-t border-[#F2DDE2] flex items-center justify-between text-[11px] text-[#8A7C81]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98FA1]"></span>
                  <span className="font-medium text-[#49383D]">Keahlian Aktif</span>
                </span>
                <span className="text-[#8A7C81]">Siap Diterapkan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honesty & Transparency Notice */}
        <div className="mt-10 p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] max-w-2xl mx-auto flex items-center gap-3 text-xs text-[#8A7C81]">
          <Info className="w-4 h-4 text-[#D98FA1] shrink-0" />
          <span>
            Portofolio ini menampilkan keahlian nyata berdasarkan pengalaman perkuliahan dan eksplorasi mandiri, tanpa klaim persentase acak atau sertifikasi fiktif.
          </span>
        </div>

      </div>
    </section>
  );
};
