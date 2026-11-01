import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Linkedin, Send, CheckCircle2, Copy, AlertCircle, Edit, MapPin } from 'lucide-react';
import { ContactDetails } from '../types/portfolio';

interface ContactProps {
  contact: ContactDetails;
  onOpenPersonalize: () => void;
}

export const Contact: React.FC<ContactProps> = ({ contact, onOpenPersonalize }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format alamat email tidak valid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) newErrors.message = 'Isi pesan tidak boleh kosong.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Portofolio Nurul Mukarromah] ${formData.subject || 'Pesan Baru'}`);
    const body = encodeURIComponent(
      `Halo Nurul Mukarromah,\n\nNama Pengirim: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\nSalam,\n${formData.name}`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Halo Nurul Mukarromah,\nSaya ${formData.name} (${formData.email}).\nSubjek: ${formData.subject}\nPesan: ${formData.message}`
    );
    const cleanedNumber = contact.whatsapp.replace(/[^0-9]/g, '');
    if (cleanedNumber) {
      return `https://wa.me/${cleanedNumber}?text=${text}`;
    }
    return `https://wa.me/?text=${text}`;
  };

  const copyToClipboard = () => {
    const textToCopy = `Pengirim: ${formData.name} <${formData.email}>\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontak" className="py-20 bg-white text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#FFF0F3]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#D98FA1] uppercase tracking-widest">
            Terhubung & Kolaborasi
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#49383D] tracking-tight">
            Hubungi Saya
          </h2>
          <div className="mt-3 w-16 h-1 bg-[#D98FA1] mx-auto rounded-full" />
          <p className="mt-4 text-[#8A7C81] text-sm sm:text-base leading-relaxed">
            Terbuka untuk diskusi akademik, kerja sama tugas, eksplorasi ide bisnis digital, maupun saran yang membangun.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-5 border-b border-[#F2DDE2]">
                <div>
                  <h3 className="text-base font-bold text-[#49383D]">Saluran Komunikasi</h3>
                  <p className="text-xs text-[#8A7C81]">Informasi kontak dan media sosial</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenPersonalize}
                  className="text-xs text-[#D98FA1] hover:text-[#C77D91] flex items-center gap-1 font-semibold cursor-pointer"
                  title="Sesuaikan akun media sosial & WhatsApp"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>Ubah Data</span>
                </button>
              </div>

              <div className="mt-6 space-y-3.5">
                
                {/* Email Item */}
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] hover:border-[#D98FA1] transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-[#8A7C81]">Email Resmi</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#49383D] group-hover:text-[#D98FA1] transition-colors break-all">
                        {contact.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#D98FA1] font-semibold hidden sm:inline">Kirim Email</span>
                </a>

                {/* WhatsApp Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-[#8A7C81]">WhatsApp</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#49383D]">
                        {contact.whatsapp || 'Nomor Belum Ditambahkan'}
                      </p>
                    </div>
                  </div>
                  {contact.whatsapp ? (
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D98FA1] hover:text-[#C77D91] font-bold underline"
                    >
                      Kirim Pesan
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenPersonalize}
                      className="text-xs text-[#8A7C81] hover:text-[#D98FA1] underline cursor-pointer"
                    >
                      Isi Nomor
                    </button>
                  )}
                </div>

                {/* Instagram Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-[#8A7C81]">Instagram</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#49383D]">
                        {contact.instagram ? `@${contact.instagram.replace('@', '')}` : 'Belum Ditautkan'}
                      </p>
                    </div>
                  </div>
                  {contact.instagram ? (
                    <a
                      href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D98FA1] hover:text-[#C77D91] font-bold underline"
                    >
                      Kunjungi
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenPersonalize}
                      className="text-xs text-[#8A7C81] hover:text-[#D98FA1] underline cursor-pointer"
                    >
                      Tautkan
                    </button>
                  )}
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-[#8A7C81]">LinkedIn</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#49383D]">
                        {contact.linkedin || 'Profil Belum Ditautkan'}
                      </p>
                    </div>
                  </div>
                  {contact.linkedin ? (
                    <a
                      href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://linkedin.com/in/${contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D98FA1] hover:text-[#C77D91] font-bold underline"
                    >
                      Kunjungi
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenPersonalize}
                      className="text-xs text-[#8A7C81] hover:text-[#D98FA1] underline cursor-pointer"
                    >
                      Tautkan
                    </button>
                  )}
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#F2DDE2] text-xs text-[#49383D]">
                  <MapPin className="w-4 h-4 text-[#D98FA1] shrink-0" />
                  <span>Domisili: Genteng, Jawa Timur (Indonesia)</span>
                </div>

              </div>
            </div>

            {/* Note regarding placeholder contact */}
            <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] text-xs text-[#8A7C81]">
              Informasi media sosial dan WhatsApp di atas dapat Anda perbarui secara langsung melalui tombol &ldquo;Ubah Data&rdquo; tanpa menampilkan nomor palsu.
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-[#49383D] tracking-tight mb-1">
                Kirimkan Pesan
              </h3>
              <p className="text-xs text-[#8A7C81] mb-6">
                Silakan isi data berikut untuk menyampaikan pesan, undangan, atau pertanyaan.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-white border border-[#D98FA1] text-left space-y-4 animate-in fade-in shadow-xs">
                  <div className="flex items-center gap-3 text-[#D98FA1]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#49383D]">Pesan Anda Siap Dikirimkan!</h4>
                      <p className="text-xs text-[#8A7C81]">
                        Formulir telah memvalidasi pesan dari <strong className="text-[#49383D]">{formData.name}</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2] text-xs text-[#49383D] space-y-1">
                    <p><strong>Subjek:</strong> {formData.subject}</p>
                    <p className="line-clamp-3"><strong>Pesan:</strong> &ldquo;{formData.message}&rdquo;</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FFF0F3] border border-[#F2DDE2] text-[11px] text-[#49383D] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#D98FA1] shrink-0 mt-0.5" />
                    <span>
                      Untuk menjamin pesan langsung sampai, pilih opsi pengiriman langsung ke email resmi Nurul Mukarromah atau WhatsApp di bawah:
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D98FA1] hover:bg-[#C77D91] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                      <span>Buka Aplikasi Email Resmi</span>
                    </a>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Kirim via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#FFF5F7] text-[#49383D] text-xs font-medium border border-[#F2DDE2] transition-colors cursor-pointer"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#8A7C81]" />}
                      <span>{copied ? 'Tersalin!' : 'Salin Pesan'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#8A7C81] hover:text-[#49383D] px-2 py-1 cursor-pointer"
                    >
                      Tulis Pesan Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-semibold text-[#49383D] mb-1.5">
                        Nama Lengkap <span className="text-[#D98FA1]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Pratama"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#49383D] placeholder:text-[#8A7C81] focus:outline-none focus:ring-1 ${
                          errors.name ? 'border-rose-400 focus:ring-rose-300' : 'border-[#F2DDE2] focus:border-[#D98FA1] focus:ring-[#D98FA1]'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-rose-500">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-semibold text-[#49383D] mb-1.5">
                        Alamat Email <span className="text-[#D98FA1]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#49383D] placeholder:text-[#8A7C81] focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-rose-400 focus:ring-rose-300' : 'border-[#F2DDE2] focus:border-[#D98FA1] focus:ring-[#D98FA1]'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>}
                    </div>

                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#49383D] mb-1.5">
                      Subjek / Topik Pesan <span className="text-[#D98FA1]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Contoh: Diskusi Tugas Kuliah / Kolaborasi Ide Bisnis"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#49383D] placeholder:text-[#8A7C81] focus:outline-none focus:ring-1 ${
                        errors.subject ? 'border-rose-400 focus:ring-rose-300' : 'border-[#F2DDE2] focus:border-[#D98FA1] focus:ring-[#D98FA1]'
                      }`}
                    />
                    {errors.subject && <p className="mt-1 text-[11px] text-rose-500">{errors.subject}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-[#49383D] mb-1.5">
                      Isi Pesan <span className="text-[#D98FA1]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan atau hal yang ingin Anda bicarakan..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-[#49383D] placeholder:text-[#8A7C81] focus:outline-none focus:ring-1 ${
                        errors.message ? 'border-rose-400 focus:ring-rose-300' : 'border-[#F2DDE2] focus:border-[#D98FA1] focus:ring-[#D98FA1]'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button in Dusty Pink with Rose Pink Hover */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[11px] text-[#8A7C81]">
                      Pesan diproses secara instan di peramban dan siap diteruskan.
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#D98FA1] hover:bg-[#C77D91] shadow-md shadow-[#D98FA1]/25 transition-all cursor-pointer"
                    >
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
