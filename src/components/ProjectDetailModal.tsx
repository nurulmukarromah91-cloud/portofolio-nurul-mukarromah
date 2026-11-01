import React, { useState } from 'react';
import { X, ExternalLink, Link2, Sparkles, Check, Edit3, BookOpen } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onUpdateProjectLink: (projectId: string, newUrl: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onUpdateProjectLink,
}) => {
  if (!project) return null;

  const [isEditingLink, setIsEditingLink] = useState(false);
  const [linkInput, setLinkInput] = useState(project.linkUrl || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveLink = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProjectLink(project.id, linkInput.trim());
    setIsEditingLink(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#49383D]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#F2DDE2] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-[#49383D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with thumbnail banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.thumbnailGradient} border-b border-[#F2DDE2] relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#49383D] border border-[#F2DDE2] transition-colors shadow-xs"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#F2DDE2] text-[#D98FA1] text-xs font-semibold mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.dateOrSemester}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#49383D] tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#8A7C81] line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          
          {/* Detail Explanation */}
          <div>
            <h4 className="text-xs font-bold text-[#8A7C81] uppercase tracking-wider mb-2">
              Uraian & Konteks Proyek
            </h4>
            <p className="text-sm text-[#49383D] leading-relaxed bg-[#FFF5F7] p-4 rounded-xl border border-[#F2DDE2]">
              {project.details}
            </p>
          </div>

          {/* Tools & Metodologi */}
          <div>
            <h4 className="text-xs font-bold text-[#8A7C81] uppercase tracking-wider mb-2.5">
              Alat & Pendukung Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#FFF5F7] text-[#49383D] border border-[#F2DDE2]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Status Keaslian / Keterangan Proyek */}
          <div className="p-3.5 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] text-xs text-[#8A7C81] flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D98FA1] shrink-0 mt-0.5" />
            <p>
              Proyek ini merupakan karya pembelajaran mandiri dan tugas akademik perkuliahan Sistem Informasi Universitas Komputama. Tidak diklaim sebagai proyek komersial eksternal yang sudah final tanpa konfirmasi.
            </p>
          </div>

          {/* Tautan Berkas / Link Section */}
          <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#49383D] flex items-center gap-1.5">
                <Link2 className="w-4 h-4 text-[#D98FA1]" />
                <span>Tautan Berkas Karya Asli</span>
              </span>
              <button
                type="button"
                onClick={() => setIsEditingLink(!isEditingLink)}
                className="text-xs text-[#D98FA1] hover:text-[#C77D91] flex items-center gap-1 font-semibold"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditingLink ? 'Batal' : 'Ubah / Masukkan Tautan'}</span>
              </button>
            </div>

            {isEditingLink ? (
              <form onSubmit={handleSaveLink} className="space-y-3">
                <input
                  type="url"
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                  placeholder="https://drive.google.com/... atau https://canva.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs placeholder:text-[#8A7C81] focus:outline-none focus:ring-1 focus:ring-[#D98FA1]"
                />
                <div className="flex items-center justify-between text-[11px] text-[#8A7C81]">
                  <span>Masukkan URL Google Drive, dokumen PDF, Canva, atau tautan slide.</span>
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-lg bg-[#D98FA1] hover:bg-[#C77D91] text-white font-medium text-xs flex items-center gap-1 shadow-xs"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Simpan Tautan</span>
                  </button>
                </div>
              </form>
            ) : project.linkUrl ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 bg-white rounded-xl border border-[#F2DDE2]">
                <div className="truncate text-xs text-[#49383D] max-w-sm">
                  {project.linkUrl}
                </div>
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#D98FA1] hover:bg-[#C77D91] text-white text-xs font-semibold shadow-xs shrink-0"
                >
                  <span>Buka Berkas</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="p-3 bg-white rounded-xl border border-dashed border-[#F2DDE2] text-center">
                <p className="text-xs text-[#8A7C81] mb-2">
                  Tautan berkas digital belum disematkan untuk proyek ini.
                </p>
                <button
                  type="button"
                  onClick={() => setIsEditingLink(true)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFF5F7] hover:bg-white text-[#D98FA1] text-xs font-semibold border border-[#F2DDE2]"
                >
                  <PlusIcon className="w-3.5 h-3.5" />
                  <span>Tambahkan Tautan Sekarang</span>
                </button>
              </div>
            )}

            {savedSuccess && (
              <p className="mt-2 text-xs text-[#D98FA1] font-semibold">
                ✓ Tautan proyek berhasil diperbarui dan tersimpan!
              </p>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#FFF5F7] border-t border-[#F2DDE2] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white hover:bg-[#FFF5F7] text-[#49383D] border border-[#F2DDE2] text-xs font-semibold cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);
