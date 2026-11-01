import React from 'react';
import { Rocket, TrendingUp, Sparkles, Lightbulb, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { PersonalProfile } from '../types/portfolio';

interface AspirationsProps {
  profile: PersonalProfile;
}

export const Aspirations: React.FC<AspirationsProps> = ({ profile }) => {
  return (
    <section className="py-20 bg-[#FFF5F7] text-[#49383D] relative overflow-hidden border-t border-[#F2DDE2]">
      {/* Radiant Glows in Soft Pink Pastel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-gradient-to-tr from-[#F4B6C2]/20 via-[#FCE4EC]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Aspirations Banner Container */}
        <div className="relative rounded-3xl bg-white border border-[#F2DDE2] p-8 sm:p-12 lg:p-16 shadow-md shadow-[#F4B6C2]/15 backdrop-blur-xl overflow-hidden">
          
          {/* Subtle decorative dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.2] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #D98FA1 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5F7] border border-[#F2DDE2] text-[#D98FA1] text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-3.5 h-3.5 text-[#D98FA1]" />
                <span>Visi & Cita-Cita Masa Depan</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#49383D] tracking-tight leading-tight">
                {profile.aspirationTitle}
              </h2>

              <blockquote className="text-base sm:text-lg text-[#49383D] leading-relaxed font-normal bg-[#FFF5F7] p-5 rounded-2xl border border-[#F2DDE2]">
                &ldquo;{profile.aspirationText}&rdquo;
              </blockquote>

              {/* Three Strategic Aspirations Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
                  <div className="flex items-center gap-2 text-[#D98FA1] mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#49383D]">Teknologi SI</span>
                  </div>
                  <p className="text-xs text-[#8A7C81] leading-normal">
                    Menguasai integrasi data, efisiensi alur informasi, dan solusi software terapan.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
                  <div className="flex items-center gap-2 text-[#D98FA1] mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#49383D]">Bisnis Kreatif</span>
                  </div>
                  <p className="text-xs text-[#8A7C81] leading-normal">
                    Menghasilkan ide wirausaha digital yang berdaya saing dan relevan dengan pasar.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF5F7] border border-[#F2DDE2]">
                  <div className="flex items-center gap-2 text-[#D98FA1] mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#49383D]">Manfaat Nyata</span>
                  </div>
                  <p className="text-xs text-[#8A7C81] leading-normal">
                    Menciptakan peluang kerja dan solusi yang mempermudah kehidupan sesama.
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Digital Entrepreneurship & Tech Illustration Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Soft pink glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-[#F4B6C2]/30 blur-2xl transform scale-105" />

                {/* Conceptual Graphic Card */}
                <div className="relative rounded-3xl bg-[#FFF5F7] border border-[#F2DDE2] p-6 sm:p-8 shadow-sm">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F2DDE2]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#F4B6C2]" />
                      <div className="w-3 h-3 rounded-full bg-[#D98FA1]" />
                      <div className="w-3 h-3 rounded-full bg-[#E8B4C0]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8A7C81] font-semibold">
                      Vision_2026.app
                    </span>
                  </div>

                  {/* Visual Node Diagram */}
                  <div className="my-6 space-y-3.5">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                          <Rocket className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-[#49383D]">Inovasi Digital</p>
                          <p className="text-[11px] text-[#8A7C81]">Pengembangan Solusi</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#D98FA1]" />
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D98FA1]/40 shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFF0F3] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-[#49383D]">Kewirausahaan Mandiri</p>
                          <p className="text-[11px] text-[#D98FA1] font-medium">Menciptakan Peluang</p>
                        </div>
                      </div>
                      <Sparkles className="w-4 h-4 text-[#D98FA1]" />
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#F2DDE2] shadow-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFF5F7] border border-[#F2DDE2] flex items-center justify-center text-[#D98FA1]">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-[#49383D]">Dampak Sosial Positif</p>
                          <p className="text-[11px] text-[#8A7C81]">Pemberdayaan Masyarakat</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#D98FA1] font-semibold bg-[#FFF5F7] px-2 py-0.5 rounded border border-[#F2DDE2]">Bermanfaat</span>
                    </div>
                  </div>

                  {/* Card bottom text */}
                  <div className="text-center pt-2 text-[11px] text-[#8A7C81] border-t border-[#F2DDE2]">
                    Kombinasi Sains Sistem Informasi & Nilai Bisnis Etis
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
