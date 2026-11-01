import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Presentation, 
  FileText, 
  Palette, 
  Database, 
  Briefcase, 
  Plus, 
  Sparkles,
  Layers,
  Link2
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: ProjectItem[];
  onUpdateProjectLink: (projectId: string, newUrl: string) => void;
  onOpenPersonalize: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onUpdateProjectLink,
  onOpenPersonalize,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeProjectForModal, setActiveProjectForModal] = useState<ProjectItem | null>(null);

  const categories = [
    'Semua',
    'Presentasi & Desain',
    'Karya Tulis & Makalah',
    'Sistem Informasi & Bisnis'
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const renderProjectIcon = (iconName: ProjectItem['iconName']) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'presentation': return <Presentation {...props} />;
      case 'file-text': return <FileText {...props} />;
      case 'palette': return <Palette {...props} />;
      case 'database': return <Database {...props} />;
      case 'briefcase': return <Briefcase {...props} />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="proyek" className="py-20 bg-[#FFF5F7] text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FCE4EC]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Galeri Portofolio & Tugas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Karya & Proyek Akademik
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Kumpulan hasil pengerjaan materi kuliah, karya tulis ilmiah, perancangan visual presentasi, serta eksplorasi inisiatif bisnis digital.
          </p>
        </div>

        {/* Categories Bar & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FFF5F7] text-[#D98FA1] font-bold border border-[#F2DDE2] shadow-xs'
                    : 'text-[#8A7C81] hover:text-[#49383D] hover:bg-[#FFF5F7]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenPersonalize}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#49383D] bg-white hover:bg-[#FFF5F7] border border-[#F2DDE2] hover:border-[#D98FA1] transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-[#D98FA1]" />
            <span>Tambah Proyek Baru</span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white border border-[#F2DDE2] hover:border-[#D98FA1] overflow-hidden shadow-xs hover:shadow-md hover:shadow-[#F4B6C2]/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Visual Thumbnail Area */}
              <div className={`relative h-44 p-6 bg-gradient-to-br ${project.thumbnailGradient} border-b border-[#F2DDE2] flex flex-col justify-between overflow-hidden`}>
                
                {/* Tech grid overlay */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #D98FA1 1px, transparent 0)`,
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#49383D] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#F2DDE2] shadow-xs">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shadow-xs">
                    {renderProjectIcon(project.iconName)}
                  </div>
                </div>

                {/* Bottom preview info on thumbnail */}
                <div className="relative z-10">
                  <span className="text-[11px] text-[#8A7C81] font-mono tracking-wider">
                    {project.dateOrSemester}
                  </span>
                  <h4 className="text-base font-bold text-[#49383D] tracking-tight mt-0.5 line-clamp-1 group-hover:text-[#D98FA1] transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#8A7C81] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tools used */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#FFF5F7] text-[#49383D] font-medium border border-[#F2DDE2]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Action button "Lihat Proyek" */}
                <div className="mt-6 pt-4 border-t border-[#F2DDE2] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#8A7C81]">
                    {project.linkUrl ? (
                      <span className="flex items-center gap-1 text-[#D98FA1] font-semibold text-[11px]">
                        <Link2 className="w-3.5 h-3.5" />
                        <span>Tautan Tersedia</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#8A7C81]">
                        Pratinjau Akademik
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProjectForModal(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#D98FA1] hover:bg-[#C77D91] transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Lihat Proyek</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Academic disclaimer notice */}
        <div className="mt-12 text-center text-xs text-[#8A7C81] max-w-xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D98FA1] shrink-0" />
          <span>
            Setiap karya dapat dibuka detailnya untuk melihat ringkasan atau menambahkan tautan berkas resmi (Google Drive / Canva).
          </span>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProjectForModal}
        onClose={() => setActiveProjectForModal(null)}
        onUpdateProjectLink={onUpdateProjectLink}
      />
    </section>
  );
};
