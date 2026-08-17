export type Language = 'EN' | 'ID';

export interface PersonalInfoLocale {
  name: string;
  brandName: string;
  title: string;
  greeting: string;
  heroName: string;
  heroDescription: string;
  aboutHeadline: string;
  aboutParagraph: string;
  statementQuote: string;
  contactHeadline: string;
  contactDescription: string;
}

export interface EducationItemLocale {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface AwardItemLocale {
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
}

export interface WorkExperienceItemLocale {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techUsed: string[];
}

export interface ProjectItemLocale {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tech: string[];
  image: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface SkillCategoryLocale {
  category: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export interface OrganizationItemLocale {
  id: string;
  name: string;
  role: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
}

export interface CertificateItemLocale {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
  image: string;
  link?: string;
  skillsBadge: string[];
}

export const socialLinks = {
  phone: "+62 812-1311-0727",
  email: "ahmadsadamizzatulloh@gmail.com",
  github: "https://github.com/Sadam-142",
  instagram: "https://www.instagram.com/sadam_attirmidzi",
  linkedin: "https://www.linkedin.com/in/sadam-attirmidzi/",
};

export const personalInfo: Record<Language, PersonalInfoLocale> = {
  EN: {
    name: "Ahmad Sadam Izzatulloh",
    brandName: "SADAM",
    title: "Software Engineer & Web Developer",
    greeting: "Hi! I am",
    heroName: "Ahmad Sadam Izzatulloh",
    heroDescription:
      "Software Engineer & Web Developer crafting responsive, high-performance web applications.",
    aboutHeadline: "Driven by Code.\nEngineered for Efficiency.",
    aboutParagraph:
      "Information Technology graduate with hands-on Software Engineering experience. Experienced Research Intern at Sekretariat Daerah Provinsi Jawa Tengah, successfully building government web system (SIDAK). Proficient across the entire SDLC with strong analytical, problem-solving, and leadership skills.",
    statementQuote:
      "Good software engineering isn't just writing code.\nIt's creating structured, reliable solutions that solve real problems.",
    contactHeadline: "Open for Software Engineering &\nFull-Time Opportunities.",
    contactDescription:
      "Actively seeking opportunities to build scalable web applications and add value to your engineering team. Feel free to reach out directly.",
  },
  ID: {
    name: "Ahmad Sadam Izzatulloh",
    brandName: "SADAM",
    title: "Software Engineer & Web Developer",
    greeting: "Halo! Saya",
    heroName: "Ahmad Sadam Izzatulloh",
    heroDescription:
      "Software Engineer & Web Developer yang merancang dan mengembangkan aplikasi web responsif berkinerja tinggi.",
    aboutHeadline: "Analitis Secara Berpikir.\nPresisi Dalam Mengembangkan.",
    aboutParagraph:
      "Lulusan baru Teknologi Informasi UIN Walisongo Semarang yang memiliki pemahaman dan pengalaman praktis dalam pengembangan aplikasi web Software Engineer / Web Development. Memiliki pengalaman magang di Sekretariat Daerah Provinsi Jawa Tengah, berhasil merancang dan mengembangkan sistem informasi pemerintahan berbasis web SIDAK. Terampil dalam seluruh siklus SDLC dengan kemampuan problem-solving dan kepemimpinan yang kuat.",
    statementQuote:
      "Pengembangan perangkat lunak yang baik bukan sekadar menulis kode.\nMelainkan merancang sistem yang terstruktur, efisien, dan mudah dirawat.",
    contactHeadline: "Terbuka Untuk Peluang Kerja &\nRekrutmen Software Engineer.",
    contactDescription:
      "Saya siap memberikan kontribusi terbaik dalam pengembangan aplikasi web dan sistem perangkat lunak di perusahaan Anda. Silakan hubungi saya secara langsung.",
  },
};

export const educationData: Record<Language, EducationItemLocale[]> = {
  EN: [
    {
      institution: "UIN Walisongo Semarang",
      degree: "Bachelor of Computer, Information Technology (S.Kom)",
      gpa: "GPA 3.71 / 4.00 (High Honors)",
      period: "Jul 2022 – Jun 2026",
      description:
        "Comprehensive academic foundation in Software Engineering, Web Application Architecture, Database Management, and SDLC methodologies.",
      highlights: [
        "Graduated with High Honors (GPA 3.71 / 4.00)",
        "Specialized in Web Software Development & System Architecture",
        "Active leader across campus student organizations and developer communities",
      ],
    },
  ],
  ID: [
    {
      institution: "UIN Walisongo Semarang",
      degree: "Sarjana Komputer (S.Kom) - Teknologi Informasi",
      gpa: "IPK 3.71 / 4.00 (Predikat Sangat Memuaskan)",
      period: "Jul 2022 – Jun 2026",
      description:
        "Fondasi akademik mendalam mencakup Software Engineering, Arsitektur Aplikasi Web, Pengelolaan Database, dan Metodologi Pengembangan SDLC.",
      highlights: [
        "Lulus dengan Predikat Sangat Memuaskan (IPK 3.71 / 4.00)",
        "Spesialisasi pada Pengembangan Perangkat Lunak Web & Arsitektur Sistem",
        "Aktif dalam kepemimpinan berbagai organisasi kemahasiswaan & komunitas developer",
      ],
    },
  ],
};

export const awardsData: Record<Language, AwardItemLocale[]> = {
  EN: [
    {
      title: "Bank Indonesia Scholarship Awardee (GenBI)",
      issuer: "Bank Indonesia (BI)",
      year: "2025",
      description:
        "Awarded competitive national scholarship by Central Bank of Indonesia for academic excellence, active leadership, and social contribution.",
      badge: "Prestigious Scholarship",
    },
  ],
  ID: [
    {
      title: "Penerima Beasiswa Bank Indonesia (GenBI)",
      issuer: "Bank Indonesia (BI)",
      year: "2025",
      description:
        "Penghargaan beasiswa prestasi tingkat nasional dari Bank Indonesia atas pencapaian akademik tinggi, kepemimpinan aktif, dan dedikasi sosial.",
      badge: "Beasiswa Prestasi BI",
    },
  ],
};

export const workExperienceData: Record<Language, WorkExperienceItemLocale[]> = {
  EN: [
    {
      company: "Sekretariat Daerah Provinsi Jawa Tengah (Setda Jateng)",
      role: "Research Intern / Web Developer",
      period: "Des 2024 – Feb 2025",
      location: "Semarang, Indonesia",
      description:
        "Designed and engineered government web system (SIDAK) for tracking budget realization and monitoring physical project progress.",
      highlights: [
        "Built responsive frontend interfaces and intuitive user flows for government officers",
        "Integrated budget calculation algorithms & automated Excel report generators",
        "Collaborated directly with DISKOMINFO team in public sector IT environment",
      ],
      techUsed: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Excel Export"],
    },
  ],
  ID: [
    {
      company: "Sekretariat Daerah Provinsi Jawa Tengah (Setda Jateng)",
      role: "Research Intern / Web Developer",
      period: "Des 2024 – Feb 2025",
      location: "Semarang, Indonesia",
      description:
        "Merancang dan mengembangkan aplikasi web pemerintahan (SIDAK) untuk pengelolaan dan pemantauan realisasi fisik serta keuangan proyek provinsi.",
      highlights: [
        "Mengembangkan UI responsif & user flow intuitif untuk staf internal birokrasi pemerintahan",
        "Mengintegrasikan algoritma penghitungan anggaran & otomatisasi ekspor laporan Excel",
        "Bekerja langsung di lingkungan teknis pemerintahan & tim DISKOMINFO Jateng",
      ],
      techUsed: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Excel Export"],
    },
  ],
};

export const projects: Record<Language, ProjectItemLocale[]> = {
  EN: [
    {
      id: "sidak-setda",
      title: "SIDAK (Physical & Financial Realization Monitoring System)",
      shortDescription:
        "Real-time government web application built with Laravel to monitor budget realization and project progress.",
      fullDescription:
        "Developed for Sekretariat Daerah Provinsi Jawa Tengah to streamline budget monitoring and physical progress tracking. Features multi-user role management, monthly target tracking, and automated report exports to Excel format.",
      category: "Government Web System",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Excel Export"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      demoUrl: "https://github.com/Sadam-142",
      githubUrl: "https://github.com/Sadam-142",
      highlights: [
        "Real-time financial and physical project realization tracking dashboard",
        "Multi-level authorization & user access control for government staff",
        "Automated data recap and report generation in Excel format",
      ],
    },
    {
      id: "pwa-presensi-ukm",
      title: "UKM Registration & Attendance System (Fullstack PWA)",
      shortDescription:
        "Fullstack Monorepo PWA with offline-first architecture for seamless member registration & attendance.",
      fullDescription:
        "Built using Next.js 16, React 19, Express.js 5, and Serwist PWA. Features offline caching (IndexedDB & Service Worker) for uninterrupted attendance tracking, interactive analytic dashboards (Recharts), JWT auth, Cloudinary uploads, and PDF/Excel exports.",
      category: "Fullstack Monorepo PWA",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express.js 5",
        "Bun",
        "PWA (Serwist)",
        "LibSQL",
        "Cloudinary",
        "Recharts",
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      demoUrl: "https://github.com/Sadam-142",
      githubUrl: "https://github.com/Sadam-142",
      highlights: [
        "Offline-first PWA architecture with Service Worker & IndexedDB sync",
        "Interactive real-time attendance analytics dashboard with Recharts",
        "Automated PDF and Excel report generation with JWT authentication",
      ],
    },
  ],
  ID: [
    {
      id: "sidak-setda",
      title: "SIDAK (Sistem Monitoring Realisasi Fisik & Keuangan)",
      shortDescription:
        "Aplikasi web pemerintahan berbasis Laravel untuk memantau realisasi anggaran dan progress fisik proyek secara real-time.",
      fullDescription:
        "Dikembangkan di Sekretariat Daerah Provinsi Jawa Tengah untuk mempermudah monitoring anggaran dan pencapaian fisik proyek. Dilengkapi fitur manajemen multi-user, pelacakan capaian bulanan, dan ekspor laporan otomatis ke Excel.",
      category: "Sistem Informasi Pemerintahan",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Excel Export"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      demoUrl: "https://github.com/Sadam-142",
      githubUrl: "https://github.com/Sadam-142",
      highlights: [
        "Dashboard pemantauan realisasi fisik dan keuangan proyek secara real-time",
        "Otorisasi multi-level untuk staf internal birokrasi pemerintahan",
        "Rekapitulasi dan ekspor otomatis laporan berkala dalam format Excel",
      ],
    },
    {
      id: "pwa-presensi-ukm",
      title: "Sistem Pendaftaran & Presensi UKM (Fullstack PWA)",
      shortDescription:
        "Aplikasi PWA Fullstack berbasis Monorepo dengan arsitektur offline-first untuk pendaftaran dan presensi tanpa kendala jaringan.",
      fullDescription:
        "Membangun PWA berbasis Next.js 16, React 19, TypeScript, Express.js 5, Bun, Serwist PWA, dan LibSQL. Dilengkapi caching offline (IndexedDB & Service Worker), Dashboard Analitik interaktif (Recharts), JWT auth, Cloudinary, serta ekspor PDF & Excel.",
      category: "Fullstack Monorepo PWA",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express.js 5",
        "Bun",
        "PWA (Serwist)",
        "LibSQL",
        "Cloudinary",
        "Recharts",
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      demoUrl: "https://github.com/Sadam-142",
      githubUrl: "https://github.com/Sadam-142",
      highlights: [
        "Arsitektur PWA offline-first dengan synchronisasi IndexedDB & Service Worker",
        "Dashboard analitik tren kehadiran anggota secara real-time dengan Recharts",
        "Otomatisasi ekspor laporan PDF dan Excel dengan autentikasi JWT aman",
      ],
    },
  ],
};

export const organizationData: Record<Language, OrganizationItemLocale[]> = {
  EN: [
    {
      id: "genbi",
      name: "GenBI Komisariat UIN Walisongo",
      role: "Public Relations Staff & Event Chairman",
      period: "Mar 2025 – Mei 2026",
      category: "Generasi Baru Indonesia (Bank Indonesia)",
      description:
        "Managed organizational PR, public communications, and served as Event Chairman for the official Bank Indonesia Scholarship Socialization (April 2026).",
      highlights: [
        "Led cross-functional committee for Bank Indonesia official scholarship event",
        "Coordinated public relations, branding, and student engagement strategies",
      ],
    },
    {
      id: "ukm-risalah",
      name: "UKM Risalah UIN Walisongo",
      role: "Vice Chairman 1 (Ketua 1)",
      period: "Jan 2025 – Des 2025",
      category: "Student Activity Unit",
      description:
        "Assisted the General Chairman in supervising internal divisions, organizational strategy, and strategic program alignments.",
      highlights: [
        "Supervised operational programs across internal departments",
        "Strengthened organizational governance and member participation",
      ],
    },
    {
      id: "ldk-arofah",
      name: "LDK Arofah UIN Walisongo",
      role: "Vice Chairman 2 (Ketua 2)",
      period: "Jan 2025 – Des 2025",
      category: "Campus Executive Organization",
      description:
        "Represented LDK Arofah in campus leadership forums and established external partnerships with campus administration & youth networks.",
      highlights: [
        "Managed external institutional relations with campus administration",
        "Coordinated student welfare and leadership development initiatives",
      ],
    },
    {
      id: "gdsc",
      name: "Google Developer Student Clubs (GDSC)",
      role: "Frontend Development Member",
      period: "Jan 2023 – Mei 2024",
      category: "UIN Walisongo Chapter",
      description:
        "Participated in developer workshops, technical code sprints, and modern frontend development with HTML, CSS, JavaScript, and React.",
      highlights: [
        "Learned industry-standard frontend web development workflows",
        "Collaborated in developer study jams and hackathons",
      ],
    },
    {
      id: "hmj-ti",
      name: "HMJ Teknologi Informasi UIN Walisongo",
      role: "Education & Reasoning Staff (Pendidikan & Penalaran)",
      period: "Jan 2023 – Des 2023",
      category: "Department Student Association",
      description:
        "Organized academic seminars, technology workshops, and student skill enhancement programs for IT students.",
      highlights: [
        "Executed tech seminars and student reasoning workshops",
        "Fostered academic and technical growth among IT freshmen",
      ],
    },
    {
      id: "study-club",
      name: "Study Club Development UIN Walisongo",
      role: "Web Development Administrator",
      period: "Feb 2023 – Mar 2023",
      category: "Tech Learning Community",
      description:
        "Managed learning schedules, mentored peer students in web development basics, and curated technical study resources.",
      highlights: [
        "Facilitated peer-to-peer web development learning sessions",
        "Curated introductory HTML, CSS, and JS study roadmaps",
      ],
    },
  ],
  ID: [
    {
      id: "genbi",
      name: "GenBI Komisariat UIN Walisongo",
      role: "Staf Public Relations & Ketua Pelaksana Sosialisasi",
      period: "Mar 2025 – Mei 2026",
      category: "Generasi Baru Indonesia (Bank Indonesia)",
      description:
        "Bertanggung jawab dalam publikasi & komunikasi organisasi serta menjabat sebagai Ketua Pelaksana Sosialisasi Beasiswa Bank Indonesia (April 2026).",
      highlights: [
        "Memimpin koordinasi panitia pelaksana acara resmi Beasiswa Bank Indonesia",
        "Mengelola strategi komunikasi publik, branding, dan engagement mahasiswa",
      ],
    },
    {
      id: "ukm-risalah",
      name: "UKM Risalah UIN Walisongo",
      role: "Ketua 1",
      period: "Jan 2025 – Des 2025",
      category: "Unit Kegiatan Mahasiswa",
      description:
        "Membantu Ketua Umum dalam mengawasi operasional departemen internal, strategi organisasi, serta efektivitas pelaksanaan program kerja.",
      highlights: [
        "Mengkoordinasikan bidang internal agar program kerja berjalan sesuai target",
        "Memperkuat tata kelola kepengurusan dan partisipasi anggota",
      ],
    },
    {
      id: "ldk-arofah",
      name: "LDK Arofah UIN Walisongo",
      role: "Ketua 2",
      period: "Jan 2025 – Des 2025",
      category: "Organisasi Kemahasiswaan",
      description:
        "Mewakili LDK Arofah dalam forum pimpinan kampus serta menjalin jejaring kolaborasi dengan birokrasi pimpinan dan jaringan pemuda eksternal.",
      highlights: [
        "Menjalin kemitraan dan komunikasi resmi dengan birokrasi pimpinan kampus",
        "Mengkoordinasikan program pembinaan kepemimpinan mahasiswa",
      ],
    },
    {
      id: "gdsc",
      name: "Google Developer Student Clubs (GDSC)",
      role: "Frontend Development Member",
      period: "Jan 2023 – Mei 2024",
      category: "UIN Walisongo Chapter",
      description:
        "Aktif dalam workshop developer, tech talk, dan praktik pembuatan antarmuka web modern menggunakan HTML, CSS, JS, dan React.",
      highlights: [
        "Mempelajari standar industri frontend web development & tools Google",
        "Berkolaborasi dalam sesi coding sprint sesama developer mahasiswa",
      ],
    },
    {
      id: "hmj-ti",
      name: "HMJ Teknologi Informasi UIN Walisongo",
      role: "Staf Divisi Pendidikan & Penalaran",
      period: "Jan 2023 – Des 2023",
      category: "Himpunan Mahasiswa Jurusan",
      description:
        "Merancang dan menyelenggarakan seminar teknologi, workshop akademik, serta kegiatan peningkatan keahlian bagi mahasiswa IT.",
      highlights: [
        "Menyelenggarakan seminar teknologi & pelatihan penalaran akademik",
        "Mendorong pengembangan skill teknis mahasiswa baru Teknologi Informasi",
      ],
    },
    {
      id: "study-club",
      name: "Study Club Development UIN Walisongo",
      role: "Administrator Web Development",
      period: "Feb 2023 – Mar 2023",
      category: "Komunitas Belajar Teknologi",
      description:
        "Mengelola jadwal belajar, mendampingi anggota dalam dasar web development, serta menyusun modul materi pemrograman.",
      highlights: [
        "Mendampingi sesi pembelajaran peer-to-peer web development",
        "Menyusun kurikulum dasar HTML, CSS, dan JavaScript",
      ],
    },
  ],
};

export const skillCategories: Record<Language, SkillCategoryLocale[]> = {
  EN: [
    {
      category: "Teknologi & Framework (Technical Skills)",
      description: "Technologies I rely on to build scalable web applications.",
      iconName: "Code2",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Next.js" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "MySQL" },
      ],
    },
    {
      category: "Professional Soft Skills",
      description: "Core interpersonal & problem-solving abilities.",
      iconName: "Palette",
      skills: [
        { name: "Analytical & Logical Thinking" },
        { name: "Effective Time Management" },
        { name: "Team Communication & Collaboration" },
        { name: "Systematic Problem Solving" },
        { name: "Organizational Leadership" },
      ],
    },
    {
      category: "Tools & Infrastructure Dev",
      description: "Development environment, deployment & integration tools.",
      iconName: "Wrench",
      skills: [
        { name: "VS Code" },
        { name: "Git & GitHub" },
        { name: "Cloudinary" },
        { name: "REST API Integration" },
      ],
    },
    {
      category: "Languages & Certifications",
      description: "Language proficiency & certified skills.",
      iconName: "Sparkles",
      skills: [
        { name: "Indonesian (Native)" },
        { name: "English (Professional Working Proficiency)" },
        { name: "BNSP Certified Advertising Specialist" },
      ],
    },
  ],
  ID: [
    {
      category: "Teknologi & Framework (Technical Skills)",
      description: "Teknologi yang saya gunakan untuk membangun aplikasi web modern.",
      iconName: "Code2",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Next.js" },
        { name: "PHP" },
        { name: "Laravel" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "MySQL" },
      ],
    },
    {
      category: "Soft Skills & Kepemimpinan",
      description: "Kemampuan interpersonal, analitis, dan manajerial.",
      iconName: "Palette",
      skills: [
        { name: "Kemampuan Berpikir Analitis & Logis" },
        { name: "Manajemen Waktu yang Efektif" },
        { name: "Komunikasi & Kolaborasi Tim" },
        { name: "Pemecahan Masalah Sistematis" },
        { name: "Berorganisasi & Kepemimpinan" },
      ],
    },
    {
      category: "Tools & Infrastruktur Dev",
      description: "Lingkungan pengembangan, pengujian, & penyebaran sistem.",
      iconName: "Wrench",
      skills: [
        { name: "VS Code" },
        { name: "Git & GitHub" },
        { name: "Cloudinary" },
        { name: "Integrasi REST API" },
      ],
    },
    {
      category: "Bahasa & Sertifikasi",
      description: "Penguasaan bahasa & sertifikasi profesional.",
      iconName: "Sparkles",
      skills: [
        { name: "Bahasa Indonesia (Native)" },
        { name: "Bahasa Inggris (Professional Working)" },
        { name: "BNSP Sertifikasi Keahlian Periklanan" },
      ],
    },
  ],
};

export const certificates: Record<Language, CertificateItemLocale[]> = {
  EN: [
    {
      id: "cert-bnsp",
      title: "BNSP National Certification - Advertising Specialist",
      organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2025 - 2028",
      credentialId: "BNSP-ADV-2025-981",
      image: "/sertif/SERTIFIKAT BNSP_page-0001.webp",
      skillsBadge: ["BNSP Certified", "Advertising", "Digital Marketing"],
    },
    {
      id: "cert-setda-magang",
      title: "Government Internship Certificate - Setda Jateng",
      organization: "Sekretariat Daerah Provinsi Jawa Tengah",
      year: "2025",
      credentialId: "SETDA-JATENG-2025-08",
      image: "/sertif/SR_Magang_page-0001.webp",
      skillsBadge: ["Government IT", "SIDAK", "Web Systems"],
    },
    {
      id: "cert-frontend-dev",
      title: "Frontend Web Development Certification",
      organization: "Study Club Tech Community",
      year: "2023",
      credentialId: "SC-FEDEV-2023-142",
      image: "/sertif/Ahmad Sadam Izzatulloh - E-Certif SC Frontend Development_page-0001.webp",
      skillsBadge: ["Frontend Dev", "React.js", "JavaScript ES6+"],
    },
    {
      id: "cert-data-pivot",
      title: "Data Analytics & Excel Pivot Table Certification",
      organization: "Study Club Data & Software",
      year: "2023",
      credentialId: "SC-PIVOT-2023-09",
      image: "/sertif/Ahmad Sadam Izzatulloh  - E-Certif SC Pivot Table_page-0001.webp",
      skillsBadge: ["Data Analytics", "Excel Pivot Table", "Data Analysis"],
    },
    {
      id: "cert-english-pare",
      title: "English Intensive Communication Certification",
      organization: "Mr. Language - Kampung Inggris Pare",
      year: "2022 - 2023",
      credentialId: "ENG-PARE-2023-014",
      image: "/sertif/Sertifikat Bahasa Inggris- Ahmad Sadam Izzatulloh .webp",
      skillsBadge: ["English Proficiency", "Public Speaking", "Communication"],
    },
    {
      id: "cert-toefl",
      title: "TOEFL English Proficiency Certification",
      organization: "Institutional Assessment",
      year: "2023",
      credentialId: "TOEFL-2023-882",
      image: "/sertif/Sertifikat_TOEFL.webp",
      skillsBadge: ["TOEFL Certified", "English Assessment", "Listening & Reading"],
    },
    {
      id: "cert-imka",
      title: "IMKA Student Competency Certificate",
      organization: "UIN Walisongo Semarang",
      year: "2024",
      credentialId: "IMKA-2208096085",
      image: "/sertif/Sertifikat IMKA 2208096085_page-0001.webp",
      skillsBadge: ["Academic Competency", "IMKA Certificate", "UIN Walisongo"],
    },
    {
      id: "cert-ptps-bawaslu",
      title: "Bawaslu Election Officer Certification (PTPS)",
      organization: "Badan Pengawas Pemilihan Umum (Bawaslu)",
      year: "2024",
      credentialId: "PTPS-BAWASLU-2024-41",
      image: "/sertif/PTPS-AHMAD SADAM IZZATULLOH_page-0001.webp",
      skillsBadge: ["Bawaslu PTPS", "Election Observer", "Public Service"],
    },
    {
      id: "cert-gdsc-member",
      title: "Google Developer Student Clubs (GDSC) Member Certificate",
      organization: "Google Developer Student Clubs (GDSC UIN Walisongo)",
      year: "2023 - 2024",
      credentialId: "GDSC-MEM-2024",
      image: "/sertif/Ahmad Sadam Izzatulloh-1_page-0001.webp",
      skillsBadge: ["GDSC Member", "Google Tech", "Developer Community"],
    },
    {
      id: "cert-ldk-arofah",
      title: "Organizational Committee & Event Leadership Certificate",
      organization: "LDK Arofah UIN Walisongo",
      year: "2025",
      credentialId: "LDK-AROFAH-2025-11",
      image: "/sertif/Sertifikat panitia HBH LDK_page-0001.webp",
      skillsBadge: ["Event Management", "LDK Arofah", "Leadership"],
    },
    {
      id: "cert-ketua-risalah",
      title: "Executive Organizational Leadership Certificate (Ketua 1)",
      organization: "UKM Risalah UIN Walisongo",
      year: "2025",
      credentialId: "UKM-RISALAH-2025-01",
      image: "/sertif/Sertifikat Ketua_page-0001.webp",
      skillsBadge: ["Organizational Leadership", "Ketua 1", "Management"],
    },
    {
      id: "cert-hmj-ti",
      title: "IT Department Student Association Certificate",
      organization: "HMJ Teknologi Informasi UIN Walisongo",
      year: "2023",
      credentialId: "HMJ-TI-2023-05",
      image: "/sertif/Sertifikat_HMJ.webp",
      skillsBadge: ["HMJ TI", "Education Staff", "Academic Events"],
    },
    {
      id: "cert-kajian-fiqih",
      title: "Islamic Studies & Fiqh Seminar Certificate",
      organization: "Lembaga Kajian UIN Walisongo",
      year: "2024",
      credentialId: "KAJIAN-FIQIH-2024-12",
      image: "/sertif/Sertifikat Kajian Fiqih.webp",
      skillsBadge: ["Islamic Studies", "Public Lecture"],
    },
    {
      id: "cert-prestasi-mahasiswa",
      title: "Student Academic & Leadership Achievement Certificate",
      organization: "UIN Walisongo Semarang",
      year: "2025",
      credentialId: "ACHIEVE-UIN-2025-99",
      image: "/sertif/Ahmad Sadam Izzatulloh.webp",
      skillsBadge: ["Academic Award", "Leadership", "UIN Walisongo"],
    },
  ],
  ID: [
    {
      id: "cert-bnsp",
      title: "Sertifikasi Profesi Keahlian Periklanan BNSP",
      organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2025 - 2028",
      credentialId: "BNSP-ADV-2025-981",
      image: "/sertif/SERTIFIKAT BNSP_page-0001.webp",
      skillsBadge: ["Sertifikasi BNSP", "Periklanan", "Digital Marketing"],
    },
    {
      id: "cert-setda-magang",
      title: "Sertifikat Magang Riset & Web Developer Setda Jateng",
      organization: "Sekretariat Daerah Provinsi Jawa Tengah",
      year: "2025",
      credentialId: "SETDA-JATENG-2025-08",
      image: "/sertif/SR_Magang_page-0001.webp",
      skillsBadge: ["Magang Setda", "Sistem SIDAK", "Web Developer"],
    },
    {
      id: "cert-frontend-dev",
      title: "Sertifikat Frontend Web Development Masterclass",
      organization: "Study Club Tech Community",
      year: "2023",
      credentialId: "SC-FEDEV-2023-142",
      image: "/sertif/Ahmad Sadam Izzatulloh - E-Certif SC Frontend Development_page-0001.webp",
      skillsBadge: ["Frontend Dev", "React.js", "JavaScript ES6+"],
    },
    {
      id: "cert-data-pivot",
      title: "Sertifikat Data Analytics & Excel Pivot Table",
      organization: "Study Club Data & Software",
      year: "2023",
      credentialId: "SC-PIVOT-2023-09",
      image: "/sertif/Ahmad Sadam Izzatulloh  - E-Certif SC Pivot Table_page-0001.webp",
      skillsBadge: ["Data Analytics", "Excel Pivot Table", "Pengolahan Data"],
    },
    {
      id: "cert-english-pare",
      title: "Sertifikat Bahasa Inggris Intensif (Kampung Inggris)",
      organization: "Mr. Language - Kampung Inggris Pare, Kediri",
      year: "2022 - 2023",
      credentialId: "ENG-PARE-2023-014",
      image: "/sertif/Sertifikat Bahasa Inggris- Ahmad Sadam Izzatulloh .webp",
      skillsBadge: ["Bahasa Inggris", "Public Speaking", "Komunikasi"],
    },
    {
      id: "cert-toefl",
      title: "Sertifikat Tes TOEFL (Test of English as a Foreign Language)",
      organization: "Institutional English Assessment",
      year: "2023",
      credentialId: "TOEFL-2023-882",
      image: "/sertif/Sertifikat_TOEFL.webp",
      skillsBadge: ["Sertifikat TOEFL", "English Assessment", "Listening & Reading"],
    },
    {
      id: "cert-imka",
      title: "Sertifikat Kompetensi Mahasiswa (IMKA UIN Walisongo)",
      organization: "UIN Walisongo Semarang",
      year: "2024",
      credentialId: "IMKA-2208096085",
      image: "/sertif/Sertifikat IMKA 2208096085_page-0001.webp",
      skillsBadge: ["Sertifikat IMKA", "Kompetensi Mahasiswa", "Akademik"],
    },
    {
      id: "cert-ptps-bawaslu",
      title: "Sertifikat Pengawas TPS Pemilu (PTPS Bawaslu)",
      organization: "Badan Pengawas Pemilihan Umum (Bawaslu)",
      year: "2024",
      credentialId: "PTPS-BAWASLU-2024-41",
      image: "/sertif/PTPS-AHMAD SADAM IZZATULLOH_page-0001.webp",
      skillsBadge: ["PTPS Bawaslu", "Pengawas Pemilu", "Integritas"],
    },
    {
      id: "cert-gdsc-member",
      title: "Sertifikat Keanggotaan Google Developer Student Clubs (GDSC)",
      organization: "Google Developer Student Clubs (GDSC UIN Walisongo)",
      year: "2023 - 2024",
      credentialId: "GDSC-MEM-2024",
      image: "/sertif/Ahmad Sadam Izzatulloh-1_page-0001.webp",
      skillsBadge: ["Anggota GDSC", "Teknologi Google", "Komunitas Developer"],
    },
    {
      id: "cert-ldk-arofah",
      title: "Sertifikat Kepanitiaan & Pengurus LDK Arofah",
      organization: "LDK Arofah UIN Walisongo",
      year: "2025",
      credentialId: "LDK-AROFAH-2025-11",
      image: "/sertif/Sertifikat panitia HBH LDK_page-0001.webp",
      skillsBadge: ["Panitia HBH", "LDK Arofah", "Manajemen Acara"],
    },
    {
      id: "cert-ketua-risalah",
      title: "Sertifikat Kepemimpinan Ketua 1 UKM Risalah",
      organization: "UKM Risalah UIN Walisongo",
      year: "2025",
      credentialId: "UKM-RISALAH-2025-01",
      image: "/sertif/Sertifikat Ketua_page-0001.webp",
      skillsBadge: ["Kepemimpinan Organisasi", "Ketua 1", "Tata Kelola"],
    },
    {
      id: "cert-hmj-ti",
      title: "Sertifikat Pengurus HMJ Teknologi Informasi",
      organization: "HMJ Teknologi Informasi UIN Walisongo",
      year: "2023",
      credentialId: "HMJ-TI-2023-05",
      image: "/sertif/Sertifikat_HMJ.webp",
      skillsBadge: ["HMJ TI", "Staf Pendidikan", "Acara Teknologi"],
    },
    {
      id: "cert-kajian-fiqih",
      title: "Sertifikat Webinar & Kajian Fiqih",
      organization: "Lembaga Kajian UIN Walisongo",
      year: "2024",
      credentialId: "KAJIAN-FIQIH-2024-12",
      image: "/sertif/Sertifikat Kajian Fiqih.webp",
      skillsBadge: ["Kajian Keilmuan", "Pendidikan"],
    },
    {
      id: "cert-prestasi-mahasiswa",
      title: "Sertifikat Penghargaan & Prestasi Mahasiswa",
      organization: "UIN Walisongo Semarang",
      year: "2025",
      credentialId: "ACHIEVE-UIN-2025-99",
      image: "/sertif/Ahmad Sadam Izzatulloh.webp",
      skillsBadge: ["Penghargaan", "Kepemimpinan", "UIN Walisongo"],
    },
  ],
};
