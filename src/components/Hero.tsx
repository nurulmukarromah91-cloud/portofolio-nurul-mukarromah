import React, { useRef, useState } from 'react';
import { 
  ArrowDown, 
  FolderGit2, 
  UserCheck, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Laptop, 
  Upload, 
  Camera, 
  Trash2, 
  Check, 
  Image as ImageIcon 
} from 'lucide-react';
import { PersonalProfile } from '../types/portfolio';

interface HeroProps {
  profile: PersonalProfile;
  customAvatarUrl?: string;
  onUploadAvatar: (dataUrl: string) => void;
  onRemoveAvatar: () => void;
  onOpenPersonalize: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  profile, 
  customAvatarUrl, 
  onUploadAvatar, 
  onRemoveAvatar, 
  onOpenPersonalize 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadToast, setUploadToast] = useState('');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Mohon pilih berkas gambar (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      alert('Ukuran gambar maksimal adalah 12MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onUploadAvatar(result);
        setUploadToast('Foto profil asli berhasil dipasang!');
        setTimeout(() => setUploadToast(''), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center bg-[#FFF5F7] text-[#49383D] overflow-hidden"
    >
      {/* Hidden File Input for Native Photo Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label="Unggah foto profil asli"
      />

      {/* Background Decorative Soft Pink Pastel Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F4B6C2]/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] bg-[#FCE4EC]/50 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#F8D7DE]/30 rounded-full blur-[100px]" />

        {/* Subtle decorative dot grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F4B6C2 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Headline, Subtitle & Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F2DDE2] text-[#49383D] text-xs sm:text-sm font-medium shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D98FA1] animate-pulse" />
              <span>Mahasiswa Sistem Informasi • Universitas Komputama</span>
            </div>

            {/* Greeting */}
            <div>
              <p className="text-[#D98FA1] text-lg sm:text-xl font-semibold tracking-wide">
                Halo, saya {profile.name}.
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#49383D] tracking-tight leading-[1.2]">
                {profile.headline}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[#8A7C81] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {profile.subGreeting}
            </p>

            {/* Quick metadata without static pills */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#8A7C81]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#D98FA1]" />
                <span className="text-[#49383D] font-medium">Universitas Komputama</span>
              </div>
              <span className="text-[#F2DDE2] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-[#D98FA1]" />
                <span className="text-[#49383D] font-medium">Program Studi Sistem Informasi</span>
              </div>
              <span className="text-[#F2DDE2] hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D98FA1]" />
                <span className="text-[#49383D] font-medium">{profile.domicile}, {profile.origin}</span>
              </div>
            </div>

            {/* CTA Buttons in Dusty Pink & White */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo('tentang')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#D98FA1] hover:bg-[#C77D91] shadow-md shadow-[#D98FA1]/25 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-white" />
                <span>Kenali Saya</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('proyek')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#49383D] bg-white hover:bg-[#FFF5F7] border border-[#F2DDE2] hover:border-[#D98FA1]/60 shadow-xs backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-[#D98FA1]" />
                <span>Lihat Portofolio</span>
              </button>
            </div>

            {/* Micro Quote / Learning Moto */}
            <div className="pt-2 border-t border-[#F2DDE2] text-xs text-[#8A7C81] italic flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D98FA1] shrink-0" />
              <span>&ldquo;Fokus pada pembelajaran berkelanjutan, kreativitas digital, dan inovasi solutif.&rdquo;</span>
            </div>
          </div>

          {/* Right Column: Foto Profil Asli Nurul Mukarromah / Modern Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer soft pink halo */}
              <div className="absolute inset-0 rounded-3xl bg-[#F4B6C2]/20 blur-2xl transform scale-105" />

              {/* Main Card with Soft Pink & White Glassmorphism */}
              <div className="relative rounded-3xl bg-white/95 border border-[#F2DDE2] p-5 sm:p-7 backdrop-blur-xl shadow-xl shadow-[#F4B6C2]/15 overflow-hidden">
                
                {/* Accent top corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F4B6C2]/20 to-transparent rounded-bl-full pointer-events-none" />

                {/* Upload Success Feedback */}
                {uploadToast && (
                  <div className="mb-4 p-2.5 rounded-xl bg-[#FDF2F4] border border-[#D98FA1] text-[#49383D] text-xs flex items-center justify-between animate-in fade-in">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Check className="w-4 h-4 text-[#D98FA1] shrink-0" />
                      <span>{uploadToast}</span>
                    </span>
                  </div>
                )}

                {/* Profile Photo Display / Upload Container */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative mx-auto w-52 h-64 sm:w-60 sm:h-72 rounded-2xl p-1 transition-all duration-300 overflow-hidden shadow-md ${
                    isDragging
                      ? 'bg-[#D98FA1] ring-4 ring-[#F4B6C2]/50 scale-102'
                      : 'bg-gradient-to-b from-[#FFF0F3] via-[#FCE4EC] to-[#F8D7DE] border border-[#F2DDE2]'
                  }`}
                >
                  {customAvatarUrl ? (
                    /* User's Real Uploaded Profile Photo */
                    <div className="relative w-full h-full rounded-xl overflow-hidden group bg-white flex items-center justify-center">
                      <img
                        src={customAvatarUrl}
                        alt={`Foto Profil ${profile.name}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#49383D]/80 via-[#49383D]/30 to-transparent pointer-events-none" />

                      {/* Photo Badge */}
                      <div className="absolute bottom-2.5 inset-x-3 text-center pointer-events-none">
                        <span className="inline-block text-[11px] font-semibold text-white bg-[#49383D]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
                          Foto Resmi Nurul Mukarromah
                        </span>
                      </div>

                      {/* Hover Overlay Controls to Change / Remove Photo */}
                      <div className="absolute inset-0 bg-[#49383D]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4">
                        <button
                          type="button"
                          onClick={triggerUpload}
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-medium text-xs shadow-md transition-colors"
                        >
                          <Camera className="w-3.5 h-3.5" />
                          <span>Ganti Foto dari Perangkat</span>
                        </button>

                        <button
                          type="button"
                          onClick={onRemoveAvatar}
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-[#FFF5F7] text-[#49383D] hover:text-[#D98FA1] font-medium text-xs border border-[#F2DDE2] transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Hapus Foto</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Default Placeholder with Direct Upload Action */
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#FFF5F7] via-white to-[#FCE7EB] flex flex-col items-center justify-between p-4 text-center border border-[#F2DDE2]">
                      
                      {/* Monogram Badge */}
                      <div className="mt-2 w-16 h-16 rounded-2xl bg-white border border-[#F2DDE2] flex items-center justify-center shadow-sm shadow-[#F4B6C2]/30">
                        <span className="text-2xl font-extrabold font-mono tracking-widest text-[#49383D]">
                          NM
                        </span>
                      </div>

                      <div className="my-1">
                        <span className="block text-[#49383D] font-bold text-sm tracking-tight">
                          {profile.name}
                        </span>
                        <span className="block text-[#8A7C81] text-xs">
                          Sistem Informasi
                        </span>
                      </div>

                      {/* Direct Upload Button */}
                      <div className="w-full space-y-2">
                        <button
                          type="button"
                          onClick={triggerUpload}
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white font-bold text-xs shadow-sm transition-transform hover:scale-102 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5 text-white" />
                          <span>Unggah Foto Asli</span>
                        </button>

                        <p className="text-[10px] text-[#8A7C81] leading-tight">
                          Pilih foto dari HP/Laptop atau seret ke kotak ini
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Meta Badges */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-[#D98FA1]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-[#8A7C81]">Instansi Akademik</p>
                        <p className="text-xs font-semibold text-[#49383D]">Universitas Komputama</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-[#49383D] bg-white px-2 py-0.5 rounded border border-[#F2DDE2]">
                      Aktif
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] flex items-center justify-center shrink-0">
                        <Laptop className="w-4 h-4 text-[#D98FA1]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-[#8A7C81]">Fokus Minat</p>
                        <p className="text-xs font-semibold text-[#49383D]">Teknologi & Bisnis Digital</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-[#D98FA1] bg-white px-2 py-0.5 rounded border border-[#F2DDE2]">
                      Eksplorasi
                    </span>
                  </div>
                </div>

                {/* Bottom Photo Management Controls */}
                <div className="mt-4 pt-3 border-t border-[#F2DDE2] flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={triggerUpload}
                    className="text-[#D98FA1] hover:text-[#C77D91] font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{customAvatarUrl ? 'Ganti Foto' : 'Pilih Foto dari Galeri'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenPersonalize}
                    className="text-[#8A7C81] hover:text-[#49383D] flex items-center gap-1 cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-[#D98FA1]" />
                    <span>Tautan URL</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 text-center flex justify-center">
          <button
            onClick={() => scrollTo('tentang')}
            className="flex flex-col items-center gap-1 text-[#8A7C81] hover:text-[#D98FA1] transition-colors text-xs cursor-pointer"
            aria-label="Gulir ke bagian Tentang Saya"
          >
            <span>Eksplorasi Profil</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#D98FA1]" />
          </button>
        </div>

      </div>
    </section>
  );
};
