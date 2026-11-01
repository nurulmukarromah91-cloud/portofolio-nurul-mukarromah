import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenPersonalize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPersonalize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['beranda', 'tentang', 'pendidikan', 'keahlian', 'proyek', 'pengalaman', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', id: 'beranda', label: 'Beranda' },
    { href: '#tentang', id: 'tentang', label: 'Tentang Saya' },
    { href: '#pendidikan', id: 'pendidikan', label: 'Pendidikan' },
    { href: '#keahlian', id: 'keahlian', label: 'Keahlian' },
    { href: '#proyek', id: 'proyek', label: 'Proyek' },
    { href: '#pengalaman', id: 'pengalaman', label: 'Pengalaman' },
    { href: '#kontak', id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#F2DDE2] shadow-sm shadow-[#F4B6C2]/15 py-3'
          : 'bg-[#FFF5F7]/85 backdrop-blur-sm border-b border-[#F2DDE2]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F4B6C2] via-[#FCE4EC] to-[#F8D7DE] p-0.5 border border-[#F2DDE2] shadow-xs group-hover:border-[#D98FA1] transition-colors flex items-center justify-center">
              <span className="text-[#49383D] font-extrabold text-sm tracking-wider font-mono">NM</span>
            </div>
            <div>
              <span className="block text-[#49383D] font-bold text-base sm:text-lg tracking-tight group-hover:text-[#D98FA1] transition-colors">
                Nurul Mukarromah
              </span>
              <span className="block text-[#8A7C81] text-xs font-normal">
                Sistem Informasi • Univ. Komputama
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative ${
                    isActive
                      ? 'text-[#49383D] bg-white font-semibold shadow-xs border border-[#F2DDE2]'
                      : 'text-[#8A7C81] hover:text-[#49383D] hover:bg-white/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#D98FA1] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenPersonalize}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#49383D] bg-white hover:bg-[#FFF5F7] rounded-lg border border-[#F2DDE2] transition-colors duration-200 cursor-pointer shadow-xs"
              title="Sesuaikan informasi, tambahkan tautan berkas, atau proyek baru"
            >
              <Sliders className="w-3.5 h-3.5 text-[#D98FA1]" />
              <span>Kelola Data</span>
            </button>
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#kontak');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#D98FA1] hover:bg-[#C77D91] rounded-lg shadow-sm shadow-[#D98FA1]/30 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Hubungi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPersonalize}
              className="p-2 text-[#49383D] hover:text-[#D98FA1] bg-white rounded-lg border border-[#F2DDE2] cursor-pointer"
              aria-label="Kelola data"
            >
              <Sliders className="w-4 h-4 text-[#D98FA1]" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#49383D] hover:text-[#D98FA1] bg-white rounded-lg border border-[#F2DDE2] focus:outline-none cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#F2DDE2] px-4 pt-3 pb-5 space-y-1 mt-2 shadow-lg backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="text-xs font-semibold text-[#8A7C81] uppercase tracking-wider px-3 py-1">
            Navigasi Portofolio
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#FFF5F7] text-[#D98FA1] font-semibold border border-[#F2DDE2]'
                    : 'text-[#49383D] hover:bg-[#FFF5F7]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#F2DDE2] flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPersonalize();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-[#49383D] bg-white border border-[#F2DDE2] hover:bg-[#FFF5F7]"
            >
              <Sliders className="w-4 h-4 text-[#D98FA1]" />
              <span>Kelola & Sesuaikan Data</span>
            </button>
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#kontak');
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#D98FA1] hover:bg-[#C77D91]"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Kirim Pesan</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
