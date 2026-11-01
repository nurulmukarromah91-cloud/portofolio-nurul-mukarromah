import { PersonalProfile, SkillItem, ProjectItem, ExperienceItem, ContactDetails } from '../types/portfolio';

export const initialProfile: PersonalProfile = {
  name: 'Nurul Mukarromah',
  status: 'Mahasiswa',
  major: 'Sistem Informasi',
  university: 'Universitas Komputama',
  origin: 'Jawa Timur',
  domicile: 'Genteng',
  hobbies: ['Menulis', 'Menonton film & video edukasi teknologi'],
  headline: 'Belajar Teknologi, Menciptakan Peluang, Membangun Masa Depan.',
  subGreeting: 'Saya adalah mahasiswa Sistem Informasi yang tertarik pada teknologi, kreativitas, dan pengembangan bisnis digital.',
  aboutBio: 'Saya adalah mahasiswa Sistem Informasi yang memiliki semangat untuk terus belajar dan mengembangkan diri. Saya tertarik pada perkembangan teknologi, dunia digital, dan kreativitas. Melalui perkuliahan dan berbagai proyek, saya ingin meningkatkan kemampuan serta memperoleh pengalaman yang bermanfaat. Saya memiliki cita-cita menjadi pengusaha yang mampu memanfaatkan teknologi untuk menciptakan peluang dan memberikan manfaat bagi orang lain.',
  aspirationTitle: 'Langkah Kecil Menuju Masa Depan Besar.',
  aspirationText: 'Saya ingin terus berkembang di bidang Sistem Informasi, memperluas wawasan teknologi, dan membangun keterampilan yang berguna. Cita-cita saya adalah menjadi pengusaha yang mampu menggabungkan teknologi dan kreativitas untuk menciptakan bisnis digital yang inovatif serta bermanfaat bagi masyarakat.'
};

export const initialSkills: SkillItem[] = [
  {
    id: 'skill-word',
    name: 'Microsoft Word',
    category: 'Aplikasi & Desain',
    description: 'Penyusunan dokumen formal, makalah akademik, struktur laporan rapi, dan format penulisan ilmiah yang standar.',
    iconName: 'file-text'
  },
  {
    id: 'skill-ppt',
    name: 'Microsoft PowerPoint',
    category: 'Aplikasi & Desain',
    description: 'Pembuatan slide presentasi interaktif dengan komposisi visual yang harmonis dan alur materi yang runtut.',
    iconName: 'monitor'
  },
  {
    id: 'skill-canva',
    name: 'Canva dan Desain Presentasi',
    category: 'Aplikasi & Desain',
    description: 'Eksplorasi tata letak grafis kreatif, infografis pendukung presentasi, dan pemilihan palet warna yang estetik.',
    iconName: 'palette'
  },
  {
    id: 'skill-komunikasi',
    name: 'Komunikasi',
    category: 'Soft Skills',
    description: 'Penyampaian gagasan secara jelas dan persuasif, baik saat berbicara di depan kelas maupun diskusi kelompok.',
    iconName: 'message-square'
  },
  {
    id: 'skill-tim',
    name: 'Kerja Sama Tim',
    category: 'Soft Skills',
    description: 'Berkolaborasi secara aktif dalam tugas kelompok, menghargai sudut pandang rekan, dan bertanggung jawab atas bagian kerja.',
    iconName: 'users'
  },
  {
    id: 'skill-menulis',
    name: 'Menulis',
    category: 'Soft Skills',
    description: 'Keterampilan menyusun naskah, catatan ide, artikel, dan argumentasi tertulis dengan tata bahasa Indonesia yang baik.',
    iconName: 'pen-tool'
  },
  {
    id: 'skill-belajar',
    name: 'Kemampuan Belajar Teknologi Baru',
    category: 'Teknologi',
    description: 'Rasa ingin tahu yang tinggi dan kecepatan dalam beradaptasi dengan platform digital serta konsep sistem informasi mutakhir.',
    iconName: 'cpu'
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-pancasila',
    title: 'Presentasi Pendidikan Pancasila',
    category: 'Presentasi & Desain',
    description: 'Slide materi presentasi interaktif mengenai nilai-nilai kebangsaan dan implementasi etika dalam era transformasi digital.',
    details: 'Proyek akademik perkuliahan yang menekankan pada penyampaian nilai-nilai luhur Pancasila dengan bahasa visual modern. Slide dirancang dengan tata letak bersih agar materi mudah dipahami oleh audiens mahasiswa.',
    tools: ['Microsoft PowerPoint', 'Canva'],
    linkUrl: '',
    linkLabel: 'Tautan Materi / Berkas',
    dateOrSemester: 'Karya Akademik',
    thumbnailGradient: 'from-[#FFF0F3] via-[#FCE4EC] to-[#F8D7DE]',
    iconName: 'presentation'
  },
  {
    id: 'proj-pai',
    title: 'Makalah Pendidikan Agama Islam',
    category: 'Karya Tulis & Makalah',
    description: 'Penyusunan karya tulis komprehensif yang membahas integrasi nilai-nilai moral, spiritualitas, dan etika sosial di era modern.',
    details: 'Makalah riset akademik yang berfokus pada penguatan karakter, studi pustaka sistematis, dan sistematika penulisan ilmiah yang sesuai kaidah akademik di lingkungan kampus.',
    tools: ['Microsoft Word', 'Kajian Pustaka'],
    linkUrl: '',
    linkLabel: 'Tautan Dokumen / File',
    dateOrSemester: 'Karya Tulis Ilmiah',
    thumbnailGradient: 'from-[#FDF2F4] via-[#F9E1E7] to-[#F5D0D9]',
    iconName: 'file-text'
  },
  {
    id: 'proj-canva',
    title: 'Desain Presentasi Canva',
    category: 'Presentasi & Desain',
    description: 'Koleksi templat dan rancangan visual slide presentasi kreatif dengan tipografi elegan serta infografis informatif.',
    details: 'Eksplorasi estetika desain presentasi digital dengan memanfaatkan fitur Canva untuk keperluan perkuliahan, presentasi ide, dan materi edukatif dengan skema warna pink pastel yang lembut dan feminin.',
    tools: ['Canva', 'Desain Grafis'],
    linkUrl: '',
    linkLabel: 'Tautan Desain Canva',
    dateOrSemester: 'Eksplorasi Kreatif',
    thumbnailGradient: 'from-[#FFF5F7] via-[#FCE7EB] to-[#F4B6C2]/40',
    iconName: 'palette'
  },
  {
    id: 'proj-si',
    title: 'Tugas dan Proyek Sistem Informasi',
    category: 'Sistem Informasi & Bisnis',
    description: 'Analisis kebutuhan sistem, pemodelan alur data dasar, dan studi kasus penerapan teknologi informasi dalam organisasi.',
    details: 'Eksplorasi konsep dasar sistem informasi, identifikasi masalah operasional, dan usulan solusi teknologi untuk meningkatkan efisiensi proses informasi di tingkat dasar perkuliahan.',
    tools: ['Diagram Sistem', 'Dokumentasi SI', 'Analisis Data'],
    linkUrl: '',
    linkLabel: 'Tautan Tugas / Laporan',
    dateOrSemester: 'Proyek Perkuliahan',
    thumbnailGradient: 'from-[#FAF0F3] via-[#F8E2E8] to-[#E8B4C0]/40',
    iconName: 'database'
  },
  {
    id: 'proj-bisnis',
    title: 'Ide Bisnis Digital',
    category: 'Sistem Informasi & Bisnis',
    description: 'Rancangan konseptual model bisnis berbasis teknologi digital yang berorientasi pada penciptaan nilai dan peluang bagi masyarakat.',
    details: 'Penyusunan gagasan kewirausahaan digital yang memadukan keahlian teknologi informasi dan kreativitas untuk menjawab kebutuhan pasar lokal dengan solusi praktis dan berkelanjutan.',
    tools: ['Business Model Canvas', 'Riset Pasar', 'Presentasi Konsep'],
    linkUrl: '',
    linkLabel: 'Tautan Pitch Deck / Konsep',
    dateOrSemester: 'Pengembangan Inisiatif',
    thumbnailGradient: 'from-[#FFF0F5] via-[#FCE4EC] to-[#F1CAD2]',
    iconName: 'briefcase'
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-perkuliahan',
    activityName: 'Perkuliahan & Praktikum Sistem Informasi',
    role: 'Mahasiswa Aktif',
    period: 'Masa Perkuliahan Aktif',
    description: 'Mendalami bidang keilmuan sistem informasi di Universitas Komputama, meliputi logika komputasi, struktur data, pengolahan dokumen digital, dan pemahaman tata kelola teknologi.',
    category: 'Akademik',
    documentationNote: 'Kegiatan perkuliahan reguler dan pembelajaran di kampus'
  },
  {
    id: 'exp-kelompok',
    activityName: 'Kolaborasi Kelompok & Penyusunan Makalah Akademik',
    role: 'Anggota & Kontributor Penulisan',
    period: 'Penugasan Semester',
    description: 'Berperan aktif dalam diskusi tim, menyusun materi presentasi, dan merumuskan laporan ilmiah bersama rekan sejawat dengan pembagian peran yang terkoordinasi.',
    category: 'Kolaborasi',
    documentationNote: 'Karya bersama tugas mata kuliah umum dan kejuruan'
  },
  {
    id: 'exp-desain',
    activityName: 'Pengembangan Mandiri Desain & Media Presentasi',
    role: 'Inisiator Kreatif',
    period: 'Pengembangan Mandiri',
    description: 'Mengasah keterampilan visual melalui latihan berkala menggunakan Canva dan Microsoft PowerPoint untuk menghasilkan materi komunikasi yang menarik dan berstandar profesional.',
    category: 'Pengembangan Mandiri',
    documentationNote: 'Portofolio slide dan media edukatif'
  },
  {
    id: 'exp-seminar',
    activityName: 'Eksplorasi Wawasan Teknologi & Bisnis Digital',
    role: 'Peserta & Pembelajar Aktif',
    period: 'Kegiatan Berkelanjutan',
    description: 'Mengikuti perkembangan terkini seputar transformasi digital, peluang wirausaha muda, dan tren teknologi informasi melalui literatur serta sesi seminar kampus.',
    category: 'Kegiatan Kampus',
    documentationNote: 'Pengayaan wawasan mandiri di bidang teknologi bisnis'
  }
];

export const initialContact: ContactDetails = {
  email: 'nurulmukarromah91@gmail.com',
  whatsapp: '', // Sedia diisi oleh user
  instagram: '', // Sedia diisi oleh user
  linkedin: '',  // Sedia diisi oleh user
  location: 'Genteng, Jawa Timur'
};
