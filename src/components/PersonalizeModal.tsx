import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  FolderPlus, 
  Award, 
  Share2, 
  Check, 
  UserCircle2, 
  Sparkles,
  Link,
  Plus
} from 'lucide-react';
import { ContactDetails, ProjectItem, ExperienceItem, SkillItem } from '../types/portfolio';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: ContactDetails;
  onSaveContact: (contact: ContactDetails) => void;
  onAddProject: (project: ProjectItem) => void;
  onAddExperience: (exp: ExperienceItem) => void;
  onAddSkill: (skill: SkillItem) => void;
  avatarUrl: string;
  onSaveAvatarUrl: (url: string) => void;
  onResetToDefaults: () => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  contact,
  onSaveContact,
  onAddProject,
  onAddExperience,
  onAddSkill,
  avatarUrl,
  onSaveAvatarUrl,
  onResetToDefaults,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'kontak' | 'proyek' | 'pengalaman' | 'keahlian' | 'foto'>('kontak');
  const [successMsg, setSuccessMsg] = useState('');

  // Form states
  const [contactState, setContactState] = useState<ContactDetails>({ ...contact });
  const [avatarState, setAvatarState] = useState(avatarUrl || '');

  // New Project Form
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Presentasi & Desain' as ProjectItem['category'],
    description: '',
    details: '',
    tools: '',
    linkUrl: '',
    dateOrSemester: 'Karya Akademik',
  });

  // New Experience Form
  const [newExp, setNewExp] = useState({
    activityName: '',
    role: '',
    period: '',
    description: '',
    category: 'Akademik' as ExperienceItem['category'],
    documentationNote: '',
  });

  // New Skill Form
  const [newSkill, setNewSkill] = useState({
    name: '',
    category: 'Aplikasi & Desain' as SkillItem['category'],
    description: '',
    iconName: 'sparkles' as any,
  });

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleSaveContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveContact(contactState);
    showSuccess('Informasi kontak berhasil disimpan!');
  };

  const handleSaveAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveAvatarUrl(avatarState.trim());
    showSuccess('Foto profil berhasil diperbarui!');
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const projectToAdd: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProject.title.trim(),
      category: newProject.category,
      description: newProject.description.trim() || 'Deskripsi karya tugas akademik.',
      details: newProject.details.trim() || newProject.description.trim(),
      tools: newProject.tools.split(',').map((t) => t.trim()).filter(Boolean),
      linkUrl: newProject.linkUrl.trim(),
      linkLabel: 'Tautan Berkas',
      dateOrSemester: newProject.dateOrSemester.trim() || 'Karya Akademik',
      thumbnailGradient: 'from-[#FFF0F3] via-[#FCE4EC] to-[#F8D7DE]',
      iconName: newProject.category === 'Presentasi & Desain' ? 'presentation' : newProject.category === 'Karya Tulis & Makalah' ? 'file-text' : 'briefcase',
    };

    onAddProject(projectToAdd);
    setNewProject({
      title: '',
      category: 'Presentasi & Desain',
      description: '',
      details: '',
      tools: '',
      linkUrl: '',
      dateOrSemester: 'Karya Akademik',
    });
    showSuccess('Proyek baru berhasil ditambahkan ke portofolio!');
  };

  const handleCreateExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExp.activityName.trim() || !newExp.role.trim()) return;

    const expToAdd: ExperienceItem = {
      id: `exp-${Date.now()}`,
      activityName: newExp.activityName.trim(),
      role: newExp.role.trim(),
      period: newExp.period.trim() || 'Kegiatan Aktif',
      description: newExp.description.trim() || 'Pengalaman dan keterlibatan pembelajaran.',
      category: newExp.category,
      documentationNote: newExp.documentationNote.trim() || 'Dokumentasi kegiatan',
    };

    onAddExperience(expToAdd);
    setNewExp({
      activityName: '',
      role: '',
      period: '',
      description: '',
      category: 'Akademik',
      documentationNote: '',
    });
    showSuccess('Pengalaman baru berhasil ditambahkan!');
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;

    const skillToAdd: SkillItem = {
      id: `skill-${Date.now()}`,
      name: newSkill.name.trim(),
      category: newSkill.category,
      description: newSkill.description.trim() || 'Keahlian terapan dalam perkuliahan.',
      iconName: 'pen-tool',
    };

    onAddSkill(skillToAdd);
    setNewSkill({
      name: '',
      category: 'Aplikasi & Desain',
      description: '',
      iconName: 'sparkles',
    });
    showSuccess('Keahlian baru berhasil ditambahkan!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#49383D]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-[#F2DDE2] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-[#49383D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FFF5F7] border-b border-[#F2DDE2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#49383D] tracking-tight">
                Personalisasi Data Portofolio
              </h3>
              <p className="text-xs text-[#8A7C81]">
                Kelola kontak asli, tautan berkas, foto profil, dan tambah karya Anda
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#FFF5F7] text-[#49383D] border border-[#F2DDE2] transition-colors shadow-xs"
            aria-label="Tutup jendela personalisasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#F2DDE2] bg-[#FFF5F7]/60 overflow-x-auto px-4 gap-2 py-2">
          <button
            type="button"
            onClick={() => setActiveTab('kontak')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === 'kontak'
                ? 'bg-white text-[#D98FA1] border border-[#F2DDE2] shadow-xs'
                : 'text-[#8A7C81] hover:text-[#49383D]'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Kontak & Medsos</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('proyek')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === 'proyek'
                ? 'bg-white text-[#D98FA1] border border-[#F2DDE2] shadow-xs'
                : 'text-[#8A7C81] hover:text-[#49383D]'
            }`}
          >
            <FolderPlus className="w-3.5 h-3.5" />
            <span>Tambah Proyek</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pengalaman')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === 'pengalaman'
                ? 'bg-white text-[#D98FA1] border border-[#F2DDE2] shadow-xs'
                : 'text-[#8A7C81] hover:text-[#49383D]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Tambah Pengalaman</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('keahlian')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === 'keahlian'
                ? 'bg-white text-[#D98FA1] border border-[#F2DDE2] shadow-xs'
                : 'text-[#8A7C81] hover:text-[#49383D]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Keahlian</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('foto')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === 'foto'
                ? 'bg-white text-[#D98FA1] border border-[#F2DDE2] shadow-xs'
                : 'text-[#8A7C81] hover:text-[#49383D]'
            }`}
          >
            <UserCircle2 className="w-3.5 h-3.5" />
            <span>Foto Profil Asli</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="bg-[#FFF0F3] border-b border-[#F2DDE2] text-[#D98FA1] px-6 py-2.5 text-xs flex items-center gap-2 font-semibold">
            <Check className="w-4 h-4 shrink-0 text-[#D98FA1]" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-left text-xs sm:text-sm">
          
          {/* TAB 1: Kontak & Medsos */}
          {activeTab === 'kontak' && (
            <form onSubmit={handleSaveContactForm} className="space-y-4">
              <p className="text-[#8A7C81] text-xs">
                Masukkan nomor WhatsApp dan akun media sosial asli Anda agar pengunjung dapat langsung menghubungi Anda.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Email Resmi
                </label>
                <input
                  type="email"
                  value={contactState.email}
                  onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
                  placeholder="nurulmukarromah91@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] focus:outline-none focus:border-[#D98FA1] text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Nomor WhatsApp Asli
                </label>
                <input
                  type="text"
                  value={contactState.whatsapp}
                  onChange={(e) => setContactState({ ...contactState, whatsapp: e.target.value })}
                  placeholder="Contoh: 08123456789 atau +628123456789"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] focus:outline-none focus:border-[#D98FA1] text-xs"
                />
                <span className="text-[11px] text-[#8A7C81] mt-0.5 block">
                  Biarkan kosong jika belum ingin menampilkan tombol WhatsApp publik.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Username Instagram
                  </label>
                  <input
                    type="text"
                    value={contactState.instagram}
                    onChange={(e) => setContactState({ ...contactState, instagram: e.target.value })}
                    placeholder="Contoh: nurul.mukarromah"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] focus:outline-none focus:border-[#D98FA1] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Profil LinkedIn
                  </label>
                  <input
                    type="text"
                    value={contactState.linkedin}
                    onChange={(e) => setContactState({ ...contactState, linkedin: e.target.value })}
                    placeholder="Username atau URL profil LinkedIn"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] focus:outline-none focus:border-[#D98FA1] text-xs"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Kontak</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Tambah Proyek Baru */}
          {activeTab === 'proyek' && (
            <form onSubmit={handleCreateProject} className="space-y-4">
              <p className="text-[#8A7C81] text-xs">
                Tambahkan tugas kuliah, desain materi presentasi Canva, atau ide bisnis baru ke galeri portofolio.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Judul Proyek / Tugas <span className="text-[#D98FA1]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  placeholder="Contoh: Analisis Sistem Basis Data Perpustakaan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Kategori Proyek
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                  >
                    <option value="Presentasi & Desain">Presentasi & Desain</option>
                    <option value="Karya Tulis & Makalah">Karya Tulis & Makalah</option>
                    <option value="Sistem Informasi & Bisnis">Sistem Informasi & Bisnis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Label Waktu / Keterangan
                  </label>
                  <input
                    type="text"
                    value={newProject.dateOrSemester}
                    onChange={(e) => setNewProject({ ...newProject, dateOrSemester: e.target.value })}
                    placeholder="Contoh: Tugas Semester 2 / Karya Akademik"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Deskripsi Singkat (Tampil pada kartu)
                </label>
                <textarea
                  rows={2}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="Ringkasan pengerjaan tugas atau materi..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Alat / Aplikasi Digunakan (pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  value={newProject.tools}
                  onChange={(e) => setNewProject({ ...newProject, tools: e.target.value })}
                  placeholder="Contoh: Canva, Microsoft PowerPoint, Word"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Tautan File / Dokumen Asli (Google Drive / Canva / PDF)
                </label>
                <input
                  type="url"
                  value={newProject.linkUrl}
                  onChange={(e) => setNewProject({ ...newProject, linkUrl: e.target.value })}
                  placeholder="https://drive.google.com/... atau https://canva.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambahkan Proyek ke Galeri</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: Tambah Pengalaman Baru */}
          {activeTab === 'pengalaman' && (
            <form onSubmit={handleCreateExperience} className="space-y-4">
              <p className="text-[#8A7C81] text-xs">
                Tambahkan kegiatan belajar, kolaborasi kelompok, kepanitiaan, atau pelatihan mandiri yang Anda ikuti.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Nama Kegiatan / Pengalaman <span className="text-[#D98FA1]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newExp.activityName}
                  onChange={(e) => setNewExp({ ...newExp, activityName: e.target.value })}
                  placeholder="Contoh: Webinar Transformasi Digital & Inovasi SI"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Peran <span className="text-[#D98FA1]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newExp.role}
                    onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                    placeholder="Contoh: Peserta Aktif / Anggota Kelompok"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#49383D] mb-1">
                    Periode / Tahun
                  </label>
                  <input
                    type="text"
                    value={newExp.period}
                    onChange={(e) => setNewExp({ ...newExp, period: e.target.value })}
                    placeholder="Contoh: Semester Ganjil / 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Kategori
                </label>
                <select
                  value={newExp.category}
                  onChange={(e) => setNewExp({ ...newExp, category: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                >
                  <option value="Akademik">Akademik</option>
                  <option value="Kolaborasi">Kolaborasi</option>
                  <option value="Pengembangan Mandiri">Pengembangan Mandiri</option>
                  <option value="Kegiatan Kampus">Kegiatan Kampus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Uraian Kegiatan & Manfaat
                </label>
                <textarea
                  rows={3}
                  value={newExp.description}
                  onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                  placeholder="Ceritakan apa yang dipelajari dan dikerjakan..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Dokumentasi / Catatan File
                </label>
                <input
                  type="text"
                  value={newExp.documentationNote}
                  onChange={(e) => setNewExp({ ...newExp, documentationNote: e.target.value })}
                  placeholder="Contoh: Sertifikat kehadiran / Foto presentasi kelompok"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambahkan Pengalaman</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: Tambah Keahlian Baru */}
          {activeTab === 'keahlian' && (
            <form onSubmit={handleCreateSkill} className="space-y-4">
              <p className="text-[#8A7C81] text-xs">
                Tambahkan keterampilan baru yang sedang Anda kuasai. Sesuai prinsip kejujuran, tidak menggunakan persentase fiktif.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Nama Keahlian <span className="text-[#D98FA1]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="Contoh: Analisis Kebutuhan Sistem / Notion / Excel"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Kategori
                </label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                >
                  <option value="Aplikasi & Desain">Aplikasi & Desain</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Teknologi">Teknologi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Deskripsi Keahlian
                </label>
                <textarea
                  rows={2}
                  value={newSkill.description}
                  onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
                  placeholder="Jelaskan bagaimana Anda menerapkan keahlian ini..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambahkan Keahlian</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 5: Foto Profil Asli */}
          {activeTab === 'foto' && (
            <form onSubmit={handleSaveAvatar} className="space-y-4">
              <p className="text-[#8A7C81] text-xs">
                Secara default website menggunakan grafis monogram profesional &ldquo;NM&rdquo; yang elegan. Anda dapat menautkan atau mengunggah foto profil formal asli Anda di sini.
              </p>

              {/* Direct file upload from device */}
              <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] space-y-3">
                <label className="block text-xs font-bold text-[#49383D]">
                  Unggah Langsung dari Galeri HP / Laptop (Direkomendasikan)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    id="modal-file-upload"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > 12 * 1024 * 1024) {
                          alert('Ukuran file maksimal 12MB.');
                          return;
                        }
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          const res = ev.target?.result as string;
                          if (res) {
                            setAvatarState(res);
                            onSaveAvatarUrl(res);
                            showSuccess('Foto profil asli berhasil dipasang dari perangkat!');
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="text-xs text-[#49383D] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#D98FA1] file:text-white hover:file:bg-[#C77D91] file:cursor-pointer cursor-pointer"
                  />
                </div>
                <span className="text-[11px] text-[#8A7C81] block">
                  Mendukung format JPG, PNG, atau WebP. Gambar langsung diproses dan disimpan di peramban Anda.
                </span>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#49383D] mb-1">
                  Atau Masukkan URL / Tautan Foto Langsung (Opsional)
                </label>
                <input
                  type="url"
                  value={avatarState}
                  onChange={(e) => setAvatarState(e.target.value)}
                  placeholder="https://... (tautan gambar)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F2DDE2] text-[#49383D] text-xs focus:outline-none focus:border-[#D98FA1]"
                />
              </div>

              {avatarState && (
                <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] flex items-center gap-4">
                  <img
                    src={avatarState}
                    alt="Pratinjau"
                    className="w-20 h-20 rounded-xl object-cover border border-[#F2DDE2] shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div>
                    <p className="text-xs font-bold text-[#49383D]">Foto Profil Aktif</p>
                    <p className="text-[11px] text-[#D98FA1] font-medium">✓ Tampil di bagian hero & biodata profil Nurul Mukarromah</p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Terapkan Foto</span>
                </button>

                {avatarState && (
                  <button
                    type="button"
                    onClick={() => {
                      setAvatarState('');
                      onSaveAvatarUrl('');
                      showSuccess('Foto profil dikembalikan ke monogram visual resmi.');
                    }}
                    className="text-xs text-[#D98FA1] hover:underline font-semibold cursor-pointer"
                  >
                    Hapus & Gunakan Monogram
                  </button>
                )}
              </div>
            </form>
          )}

        </div>

        {/* Modal Footer with Reset to Defaults */}
        <div className="p-4 sm:p-5 bg-[#FFF5F7] border-t border-[#F2DDE2] flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Kembalikan semua data ke pengaturan awal portofolio Nurul Mukarromah?')) {
                onResetToDefaults();
                onClose();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-[#8A7C81] hover:text-[#D98FA1] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data ke Awal</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white hover:bg-[#FFF5F7] text-[#49383D] border border-[#F2DDE2] text-xs font-semibold cursor-pointer shadow-xs"
          >
            Selesai
          </button>
        </div>

      </div>
    </div>
  );
};
