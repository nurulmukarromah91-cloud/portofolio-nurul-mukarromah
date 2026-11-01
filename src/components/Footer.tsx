import React from 'react';
import { ArrowUp, Mail, MessageCircle, Instagram, Linkedin, Heart } from 'lucide-react';
import { ContactDetails } from '../types/portfolio';

interface FooterProps {
  contact: ContactDetails;
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang Saya' },
    { href: '#pendidikan', label: 'Pendidikan' },
    { href: '#keahlian', label: 'Keahlian' },
    { href: '#proyek', label: 'Proyek' },
    { href: '#pengalaman', label: 'Pengalaman' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <footer className="bg-[#FFF5F7] text-[#49383D] border-t border-[#F2DDE2] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#F2DDE2]">
          
          {/* Brand & Brief */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F4B6C2] via-[#FCE4EC] to-[#F8D7DE] border border-[#F2DDE2] flex items-center justify-center font-mono font-bold text-[#49383D] text-xs shadow-xs">
                NM
              </div>
              <span className="text-[#49383D] font-bold text-lg tracking-tight">
                Nurul Mukarromah
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8A7C81] leading-relaxed max-w-sm">
              Mahasiswa Sistem Informasi Universitas Komputama yang berfokus pada eksplorasi teknologi, desain visual presentasi, dan wirausaha bisnis digital masa depan.
            </p>
            <div className="text-xs text-[#D98FA1] font-semibold flex items-center gap-1.5">
              <span>Universitas Komputama</span>
              <span>•</span>
              <span>Genteng, Jawa Timur</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#49383D]">
              Navigasi Halaman
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#8A7C81] hover:text-[#D98FA1] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#49383D] mb-3 md:text-right">
                Media Sosial
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] hover:border-[#D98FA1] flex items-center justify-center text-[#8A7C81] hover:text-[#D98FA1] transition-colors shadow-xs"
                  title="Email"
                  aria-label="Kirim Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] hover:border-[#D98FA1] flex items-center justify-center text-[#8A7C81] hover:text-emerald-600 transition-colors shadow-xs"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}

                {contact.instagram && (
                  <a
                    href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] hover:border-[#D98FA1] flex items-center justify-center text-[#8A7C81] hover:text-pink-500 transition-colors shadow-xs"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}

                {contact.linkedin && (
                  <a
                    href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://linkedin.com/in/${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-[#F2DDE2] hover:border-[#D98FA1] flex items-center justify-center text-[#8A7C81] hover:text-blue-500 transition-colors shadow-xs"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-[#FFF5F7] text-[#49383D] hover:text-[#D98FA1] border border-[#F2DDE2] text-xs font-semibold transition-colors cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D98FA1]" />
              <span>Kembali ke Atas</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright exact text as instructed */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7C81]">
          <p className="text-center sm:text-left">
            © 2026 Nurul Mukarromah. Dibuat dengan semangat belajar dan kreativitas.
          </p>

          <p className="flex items-center gap-1 text-[11px] text-[#8A7C81]">
            <span>Dirancang dengan</span>
            <Heart className="w-3 h-3 text-[#D98FA1] fill-[#D98FA1]" />
            <span>untuk Mahasiswa Sistem Informasi</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
