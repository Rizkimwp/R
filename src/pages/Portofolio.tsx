import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, DownloadCloud, Github, Linkedin, Instagram, ArrowRight, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';

const data = {
    name: 'Rizky Maulana W.',
    title: 'Fullstack Developer — React, Nest, Flutter, Laravel',
    short: `Saya membangun aplikasi web dan mobile berbasis AI dengan fokus pada pengalaman pengguna, kinerja, dan maintainability.`,
    resume: '#',
    social: {
        github: 'https://github.com/Rizkimwp',
        linkedin: 'https://www.linkedin.com/in/rizki-maulana-w-a2a923228/',
        instagram: 'https://www.instagram.com/rizkimwp/',
        youtube: 'https://www.youtube.com/@Rizkimwp',
        tiktok: 'https://www.tiktok.com/@rizkimwp',
    },
    experiences: [
        {
            role: 'Fullstack Developer',
            company: 'PT Wonokoyo Jaya Kusuma',
            period: 'Jan 2025 — Sekarang',
            desc: 'Sebagai Fullstack Developer di Wonokoyo Group, saya merancang, mengembangkan, dan memelihara aplikasi web dan mobile menggunakan Flutter, React, NestJS, dan Laravel. Saya menangani analisis kebutuhan sistem, perancangan database, pembuatan flowchart dan wireframe UI/UX, pembangunan antarmuka web responsif, pengembangan REST API, serta pemeliharaan aplikasi dan server untuk mendukung proses bisnis yang efisien dan terintegrasi.',
            tech: ['React', 'TypeScript', 'Laravel', 'Tailwind', 'NestJS', 'Flutter', 'Python', 'Github'],
            url: 'https://wjkcikande.com/'
        },
        {
            role: 'Frontend Developer',
            company: 'Foundation Sasmita Jaya ',
            period: 'Jan 2024 — Jun 2024',
            desc: 'Merancang antarmuka pengguna dan mengembangkan aplikasi sistem penerimaan mahasiswa menggunakan React dan Material UI, memanfaatkan RESTful API dari backend, serta membuat dokumentasi teknis dan panduan pengguna dengan Microsoft Word. Selain itu, mengelola tugas dan alur kerja menggunakan Trello.',
            tech: ['React', 'TypeScript', 'Material UI', 'Tailwind'],
            url: 'https://unpam.ac.id/'
        },
        {
            role: 'Information Technology Staff',
            company: 'Dinas Kesehatan Kab.Serang',
            period: 'Agustus 2023 — Desember 2023',
            desc: 'Merancang dan mengembangkan aplikasi sistem Puskesmas Cikande menggunakan Laravel dan Figma, membuat dokumentasi teknis, serta memastikan keamanan sistem aplikasi terjaga.',
            tech: ['Laravel', 'MySql', 'Jquery', 'Bootstrap'],
            url: 'https://dinkes.serangkab.go.id/'
        }
    ],
    projects: [
        {
            title: 'Company Profile PT Wonokoyo Jaya Kusuma',
            desc: 'Website company profile dilengkapi dengan blog dan career. dan memiliki fitur customer service chat menggunakan WhatsApp API.',
            tech: ['React', 'MySql', 'Typescript', 'Tailwind', 'Nest Js'],
            url: 'https://wjkcikande.com/'
        },
        {
            title: 'Company Profile Yayasan Daarel Muflihin',
            desc: '"Platform digital resmi Yayasan Daarel Muflihin yang dirancang untuk memperkuat branding institusi. Menampilkan profil lengkap, sistem pengelolaan konten (CMS) untuk blog dan publikasi karier, serta integrasi WhatsApp API untuk layanan bantuan responsif."',
            tech: ['React', 'MySql', 'Typescript', 'Tailwind', 'Nest Js'],
            url: 'https://daarelmuflihin.id/'
        },
        {
            title: 'PPDB App Platform',
            desc: 'Platform penerimaan siswa baru online lengkap dengan dashboard admin dan siswa.',
            tech: ['React', 'Material UI', 'NestJS', 'PostgreSQL'],
            url: 'https://smpit.daarelmuflihin.id/'
        },
        {
            title: 'Fulusly App',
            desc: 'Sistem manajemen keuangan pribadi yang terintegrasi dengan Bot Telegram untuk pencatatan transaksi secara instan. Memungkinkan pengguna memantau arus kas, kategori pengeluaran, dan laporan finansial harian langsung melalui aplikasi pesan.',
            tech: ['Laravel', 'Mysql', 'Tailwind', 'Next JS', 'Telegram Bot API'],
            url: 'https://fulusly.my.id/'
        },
        {
            title: 'WhatsApp Group Agregator',
            desc: 'Sistem ekstraksi otomatis untuk memantau tautan dari grup WhatsApp dan merangkum inti konten secara instan.',
            tech: ['Python', 'MySQL', 'Tailwind', 'Node JS', 'Next Js', 'Open AI', 'Grock V1'], // Tambahkan 'Python' atau 'OpenAI' jika ada
            url: 'https://agregator.womanager.id/'
        },
    ]
};

interface SectionProps {
    children: React.ReactNode;
    id: string;
    title?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, title, className = "" }) => (
    <section id={id} className={`max-w-3xl mx-auto px-6 py-12 ${className}`}>
        {/* Title hanya muncul di mobile */}
        {title && <h2 className="block mb-6 text-2xl font-bold lg:hidden">{title}</h2>}

        {children}
    </section>
);


export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("about");
    const sections = ["about", "experience", "projects"];
    const [cursorPos, setCursorPos] = useState({ x: 10, y: 10 });
    // IntersectionObserver untuk menandai section yang aktif
    useEffect(() => {
        const sectionEls = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.6 }
        );
        sectionEls.forEach((el) => observer.observe(el));

        return () => sectionEls.forEach((el) => observer.unobserve(el));
    }, []);

    // Scroll smooth saat klik sidebar link
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    // Tangkap posisi cursor di main
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    return (
        <div className="w-screen mx-auto bg-[#0a192f] text-abu relative" onMouseMove={handleMouseMove}>
            <div className="container flex mx-auto">
                {/* Sidebar kiri */}
                {/* Section muncul hanya di mobile */}


                <aside className="sticky top-0 flex-col justify-between hidden h-screen p-8 lg:flex lg:w-1/3 xl:w-1/4">
                    <div>
                        <h1 className="text-3xl font-bold">{data.name}</h1>
                        <h2 className="mt-2 text-lg text-slate-300">{data.title}</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">{data.short}</p>

                        <nav className="relative mt-12 space-y-4 text-sm">
                            {sections.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => handleClick(section)}
                                    className={`block w-full text-left transition-all duration-300 hover:text-white hover:translate-x-2 ${activeSection === section ? "text-[#51CBCF] font-bold" : "text-slate-400"
                                        }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    {activeSection === section && (
                                        <motion.div
                                            layoutId="underline"
                                            className="h-0.5 w-full bg-[#51CBCF] mt-1 rounded"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="flex gap-4 mt-12 text-slate-400">
                        <a href={data.social.github} className="hover:text-white"><Github size={20} /></a>
                        <a href={data.social.linkedin} className="hover:text-white"><Linkedin size={20} /></a>
                        <a href={data.social.instagram} className="hover:text-white"><Instagram size={20} /></a>
                        <a href={data.social.youtube} className="hover:text-white"><Youtube size={20} /></a>
                        <a href={data.social.tiktok} className="hover:text-white"><FaTiktok size={20} /></a>
                        <a
                            href="/asset/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DownloadCloud size={20} />
                        </a>


                    </div>
                </aside>


                {/* Konten kanan scrollable */}
                <main className="flex-1 px-4 pt-10 lg:px-8" >

                    {/* 🔥 Cursor Glow Effect (lebih smooth) */}
                    <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl"
                        style={{
                            background: `radial-gradient(circle 600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(81,203,207,0.12), transparent 70%)`,
                            transition: "background 0.15s ease-out",
                        }}
                    />

                    {/* 🔥 Mobile Header */}
                    <div className="flex flex-col p-6 border lg:hidden backdrop-blur-md bg-white/5 rounded-xl border-white/10">
                        <h1 className="text-3xl font-bold text-white">{data.name}</h1>
                        <h2 className="mt-2 text-lg text-[#51CBCF]">{data.title}</h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">{data.short}</p>

                        <div className="flex gap-4 mt-6 text-slate-400">
                            {[
                                { icon: <Github size={20} />, link: data.social.github },
                                { icon: <Linkedin size={20} />, link: data.social.linkedin },
                                { icon: <Instagram size={20} />, link: data.social.instagram },
                                { icon: <Youtube size={20} />, link: data.social.youtube },
                                { icon: <FaTiktok size={20} />, link: data.social.tiktok },
                            ].map((item, i) => (
                                <a key={i} href={item.link} className="transition hover:text-white hover:scale-110">
                                    {item.icon}
                                </a>
                            ))}

                            <a
                                href="/asset/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white hover:scale-110"
                            >
                                <DownloadCloud size={20} />
                            </a>
                        </div>
                    </div>

                    {/* 🔥 About */}
                    <Section id="about" title="About">
                        <p className="leading-relaxed text-slate-300 text-[15px]">
                            Saya seorang pengembang yang bersemangat menciptakan antarmuka pengguna yang mudah diakses dan sempurna,
                            memadukan desain dengan rekayasa yang tangguh.

                            <br /><br />

                            Saya berpengalaman 2 tahun sebagai <span className="font-semibold text-white">Fullstack Developer</span>, sekarang di
                            <span className="font-semibold text-[#51CBCF]"> PT Wonokoyo Jaya Kusuma</span>, berfokus pada pengembangan Automation
                            aplikasi web, mobile, dan API backend untuk meningkatkan efisiensi produksi.

                            <br /><br />

                            Saya juga aktif berbagi di <span className="font-semibold text-white">GitHub</span> dan
                            <span className="font-semibold text-white"> Platform Media Sosial</span>.

                            <br /><br />

                            Di waktu luang, saya suka olahraga angkat beban, belajar hal baru, dan mengeksplorasi teknologi terkini untuk terus berkembang sebagai pengembang.
                        </p>
                    </Section>

                    {/* 🔥 GitHub Section (lebih standout) */}
                    <Section id="github" title="GitHub Activity">
                        <div className="p-4 border rounded-xl bg-white/5 border-white/10 backdrop-blur-md">
                            <GitHubCalendar username="Rizkimwp" />
                        </div>
                    </Section>

                    {/* 🔥 Experience */}
                    <Section id="experience" title="Experience">
                        <div className="space-y-6">
                            {data.experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 transition border rounded-xl border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="text-xs text-slate-400">{exp.period}</div>

                                    <h3 className="flex items-center gap-2 mt-2 font-medium text-white">
                                        <a
                                            href={exp.url}
                                            target="_blank"
                                            className="flex items-center gap-1 text-[#51CBCF] hover:underline"
                                        >
                                            {exp.role} - {exp.company}
                                            <ArrowRight className="transition group-hover:-rotate-45" size={16} />
                                        </a>
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{exp.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 border border-[#51CBCF]/30 rounded-md text-[#51CBCF] bg-[#51CBCF]/10"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* 🔥 Projects */}
                    <Section id="projects" title="Projects">
                        <div className="grid gap-6 md:grid-cols-2">
                            {data.projects.map((p, idx) => (
                                <article
                                    key={idx}
                                    className="p-6 transition border rounded-xl bg-white/5 border-white/10 backdrop-blur-md hover:shadow-xl hover:-translate-y-1"
                                >
                                    <h3 className="text-lg font-semibold text-white">
                                        <a href={p.url} target="_blank" className="hover:underline">
                                            {p.title}
                                        </a>
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-3 text-xs">
                                        {p.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 border rounded-md text-slate-300 border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Section>

                    {/* 🔥 Footer */}
                    <footer className="py-12 text-sm text-center border-t border-white/10 text-slate-500">
                        © {new Date().getFullYear()} {data.name}
                    </footer>
                </main>
            </div>
        </div>
    );
}
