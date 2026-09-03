"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Network, Database, Globe, User, Mail, 
  Layers, Zap, Menu, X, ArrowUpRight, GraduationCap,
  Play
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);  
  return (
    <div className="min-h-screen text-zinc-300 font-sans selection:bg-cyan-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/5 font-medium text-[10px] uppercase tracking-[0.2em]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-bold">
          <span className="text-white text-xl">LUTFI.</span>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievement</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacts</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#050505] border-b border-white/5 p-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

  <motion.main 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="max-w-6xl mx-auto px-6 pt-32 pb-20"
>
{/* LANDING SECTION - HEADLINE + FOTO MELAYANG DENGAN BADGE */}
<section className="min-h-[80vh] flex items-center mb-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
    
    {/* TEKS KIRI */}
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight mb-6">
        From a Concern <span className="text-cyan-400">to</span> A Real Technology
      </h1>
      <p className="text-zinc-400 leading-relaxed max-w-md mb-8 texat-justify">
        My name is Lutfi. I’m a Telecommunications Engineering graduate with a passion for the Internet of Things, edge computing, and Network Infrastructure—all aimed at solving real-world problems.
      </p>
      <div className="flex flex-wrap gap-4">
        <a 
          href="#projects" 
          className="bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-2"
        >
          View Projects <ArrowUpRight size={14} />
        </a>
        <button 
          onClick={() => setIsContactOpen(true)}
          className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all"
        >
          Contact Me
        </button>
      </div>
    </div>

    {/* FOTO KANAN + BADGE MELAYANG */}
    <div className="relative flex items-center justify-center h-[400px]">
    {/* Ring 1 (dalam) - IoT Engineer (jam 12) & Edge Computing (jam 6) */}
    <div className="absolute w-72 h-72 rounded-full border border-dashed border-white-500/20 animate-spin-slow">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white-500/30 rounded-full p-2">
        <Cpu size={16} className="text-cyan-400" />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-cyan-500/30 rounded-full p-2">
        <Network size={16} className="text-cyan-400" />
      </div>
    </div>

    {/* Ring 2 (luar) - Project Management (jam 9) & Network Infrastructure (jam 6) */}
    <div className="absolute w-96 h-96 rounded-full border border-dashed border-white-500/10 animate-spin-slow-reverse">
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-zinc-900 border border-white-500/30 rounded-full p-2">
        <Layers size={16} className="text-cyan-400" />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-cyan-500/30 rounded-full p-2">
        <Globe size={16} className="text-cyan-400" />
      </div>
    </div>
      {/* Foto Profil Bulat */}
      <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-10">
        <img 
          src="/FotoProfile.jpg" 
          alt="Muhammad Lutfi Raihan Senjaya" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Badge Melayang */}
      <div className="absolute top-6 left-4 bg-zinc-900 border border-white/10 rounded-full px-4 py-2 text-xs font-bold text-cyan-400 shadow-xl">
        IoT Engineer
      </div>
      <div className="absolute top-16 right-0 bg-zinc-900 border border-white/10 rounded-full px-4 py-2 text-xs font-bold text-cyan-400 shadow-xl">
        Project Management
      </div>
      <div className="absolute bottom-16 left-0 bg-zinc-900 border border-white/10 rounded-full px-3 py-1 text-xs font-bold text-cyan-400 shadow-xl">
        Edge Computing & Embedded Systems
      </div>
      <div className="absolute bottom-6 right-4 bg-zinc-900 border border-white/10 rounded-full px-4 py-2 text-xs font-bold text-cyan-400 shadow-xl">
        Network Infrastructure
      </div>

    </div>
  </div>
</section>
  
 {/* HERO SECTION - FOTO + BIO + STATISTIK JADI SATU */}
<section id="about" className="mb-40 scroll-mt-24">
  <div className="flex flex-col md:flex-row items-start gap-10">
    <div className="w-40 h-52 md:w-56 md:h-72 rounded-[2rem] overflow-hidden border border-white/10 shrink-0">
      <img 
        src="/FotoProfile.jpg" 
        alt="Muhammad Lutfi Raihan Senjaya" 
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
        Muhammad Lutfi Raihan Senjaya
      </h1>
      <p className="text-cyan-400 font-bold text-sm mt-3">Bachelor of Engineering in Telecommunication Engineering</p>

      <div className="flex items-center gap-2 textwhite text-xs font-medium mt-3 mb-6">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        Bandung, Indonesia
      </div>


      {/* KOTAK STATISTIK */}
     <div className="grid grid-cols-3 gap-3 max-w-sm mb-8">
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.5}}
    className="bg-zinc-900/40 border border-white/5 rounded-2xl py-4 text-center hover:border-cyan-500/30 cursor-pointer"
  >
    <p className="text-white text-xl font-bold">2<span className="text-cyan-400">+</span></p>
    <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest">Projects</p>
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.5 }}
    className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl py-4 text-center cursor-pointer"
  >
    <p className="text-white text-xl font-bold">1</p>
    <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest">Internship</p>
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.5}}
    className="bg-zinc-900/40 border border-white/5 rounded-2xl py-4 text-center hover:border-cyan-500/30 cursor-pointer"
  >
    <p className="text-white text-xl font-bold">3</p>
    <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest">Orgs</p>
  </motion.div>
</div>

      {/* ABOUT ME - DIGABUNG DI SINI */}
      <div>
        <div className="flex items-center gap-2 text-cyan-500 mb-4 font-bold text-[10px] uppercase tracking-[0.3em]">
          <div className="w-8 h-[1px] bg-cyan-500"></div> About Me
        </div>
        <p className="text-white leading-relaxed text-justify">
          Lulusan S1 Teknik Telekomunikasi dari Universitas Telkom (IPK 3.25/4.00) dengan spesialisasi di bidang IoT, Edge Computing, dan Infrastruktur Jaringan. 
          Memiliki pengalaman dalam mengoptimalkan jaringan telekomunikasi serta merancang solusi otomasi hardware. 
          Pengalaman teknis ini mencakup penerapan sistem AI tertanam pada perangkat dengan sumber daya terbatas, dan pengembangan proyek Smart Rain Shield berbasis mikrokontroler (IoT) yang terintegrasi dengan platform Blynk untuk pemantauan jarak jauh. 
          Memadukan keterampilan pemecahan masalah teknis yang mumpuni dengan rekam jejak kepemimpinan lapangan yang terbukti; berpengalaman sebagai Kepala Divisi Logistik di organisasi PERFECT dan PERMIB dalam memimpin belasan staf, mengelola anggaran operasional, serta berkoordinasi dengan vendor untuk menyukseskan acara berskala besar.
          Berkomitmen tinggi untuk membawa inovasi, keandalan teknis, dan efisiensi operasional guna memberikan kontribusi nyata bagi perusahaan, khususnya dalam lingkungan kerja yang dinamis dan penuh tantangan.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-40 scroll-mt-24">
          <div className="flex items-center gap-2 text-cyan-500 mb-6 font-bold text-[10px] uppercase tracking-[0.3em]">
            <div className="w-8 h-[1px] bg-cyan-500"></div> Professional Experience
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* KOLOM TEKS (KIRI) */}
            <div className="lg:col-span-6 font-sans">
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">
                  PT Telkom Infrastruktur Indonesia
                </h3>
                <span className="text-white font-mono font-bold uppercase">Jun – Aug 2025</span>
              </div>

              <ul className="text-white space-y-7 text-sm leading-relaxed font-medium text-justify">
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
                  <span>
                    Mengelola dan memproses pesanan layanan jaringan untuk wilayah <strong className="text-cyan-400 uppercase tracking-widest">Regional 3 (Jawa Barat)</strong> dengan memanfaatkan sistem <strong className="text-cyan-400 font-bold">Engineering Network Order Management (ENOM)</strong>.
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">02.</span>
                  <span>
                    Melakukan rekapitulasi data teknis untuk <strong className="text-cyan-400 uppercase font-bold">Node B, Catalyst, dan VLAN 5G</strong> guna memastikan keakuratan input parameter sebelum menyelesaikan penutupan pesanan.
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">03.</span>
                  <span>
                    Melakukan validasi teknis terhadap parameter jaringan, termasuk <strong className="text-white font-medium">frekuensi, bandwidth, dan kondisi tautan radio aktif</strong>, dengan memanfaatkan <strong className="text-cyan-400 uppercase tracking-widest">Network Management System (NMS)</strong>.
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">04.</span>
                  <span>
                    Melakukan operasi lapangan bersama tim <strong className="text-cyan-400 uppercase font-bold tracking-widest">Telkom Akses</strong> untuk mengamati implementasi jaringan optik, termasuk penarikan kabel dari <strong className="text-cyan-400">ODC ke ODP</strong>, serta distribusi ke <strong className="text-cyan-400">ONT dan BTS</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* KOLOM FOTO DOKUMENTASI (KANAN) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/magang1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dokumentasi Lapangan 1" />
              </div>

              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/magang2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dokumentasi Lapangan 2" />
              </div>

              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/magang3.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dokumentasi Lapangan 3" />
              </div>

              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/magang4.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Dokumentasi Lapangan 4" />
              </div>
            </div>

          </div>

          {/* ORGANISASI 1: PERFECT - Deputy Coordinator Logistics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-white/5 pt-32 mt-32">
            
            {/* FOTO (KIRI) */}
            <div className="lg:col-span-6 lg:order-1 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/perfectdeputy1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="PERFECT 2024 Dokumentasi 1" />
              </div>
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/perfectdeputy2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="PERFECT 2024 Dokumentasi 2" />
              </div>
            </div>

            {/* TEKS (KANAN) */}
            <div className="lg:col-span-6 lg:order-2 font-sans">
              <span className="text-cyan-500 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold underline underline-offset-8 decoration-cyan-500/30">Committee Experience</span>
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">PERFECT (Permib Freedom In Creativity)</h3>
                <span className="text-white font-mono font-bold uppercase">Jan – Mar 2024</span>
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Deputy Coordinator of the Logistics Division</p>

              <ul className="text-white space-y-5 text-sm leading-relaxed font-medium text-justify">
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
                  <span>Membantu memimpin tim logistik yang terdiri dari <strong className="text-cyan-400 font-bold uppercase tracking-widest">14 anggota</strong> dengan mendelegasikan tugas lapangan dan teknis secara efektif demi kelancaran alur kerja.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">02.</span>
                  <span>Menyusun dan mengelola anggaran logistik untuk <strong className="text-cyan-400 font-bold">3 acara besar</strong> (Try Out, Seminar, dan Wondercup), dengan pengawasan pengeluaran ketat untuk mencegah pemborosan anggaran.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">03.</span>
                  <span>Berkoordinasi langsung dengan vendor eksternal dan manajemen fasilitas kampus untuk mengamankan lokasi acara serta memastikan peralatan tersedia sesuai jadwal.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ORGANISASI 2: PERMIB PMB - Head of Logistics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-white/5 pt-32 mt-32">
            
            {/* TEKS (KIRI) */}
            <div className="lg:col-span-6 lg:order-1 font-sans">
              <span className="text-cyan-500 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold underline underline-offset-8 decoration-cyan-500/30">Committee Experience</span>
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">PERMIB PMB</h3>
                <span className="text-white font-mono font-bold uppercase">Sep – Nov 2023</span>
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Head of the Logistics Division</p>

              <ul className="text-white space-y-5 text-sm leading-relaxed font-medium text-justify">
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
                  <span>Memimpin tim logistik beranggotakan <strong className="text-cyan-400 font-bold uppercase tracking-widest">22 orang</strong> dengan menyusun daftar tugas terperinci, memastikan setup dan teardown venue acara berjalan efisien dan tepat waktu.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">02.</span>
                  <span>Mengelola pengadaan dan distribusi peralatan logistik (termasuk panggung dan sound system) untuk acara mahasiswa yang dihadiri lebih dari <strong className="text-cyan-400 font-bold">50 peserta</strong> tanpa kendala teknis.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">03.</span>
                  <span>Menyusun dan mengawasi anggaran logistik acara PMB serta bernegosiasi dengan supplier untuk mengoptimalkan biaya tanpa mengorbankan kualitas peralatan.</span>
                </li>
              </ul>
            </div>

            {/* FOTO (KANAN) */}
            <div className="lg:col-span-6 lg:order-2 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/pmb1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="PERMIB PMB Dokumentasi 1" />
              </div>
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                <img src="/pmb2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="PERMIB PMB Dokumentasi 2" />
              </div>
            </div>
          </div>

          {/* ORGANISASI 3: PERFECT - Junior Committee Member */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-white/5 pt-32 mt-32">
            
            {/* FOTO (KIRI) - TINGGI DISAMAKAN, LEBAR MENYESUAIKAN RASIO ASLI MASING-MASING */}
            <div className="lg:col-span-6 lg:order-1 flex gap-3 justify-center">
              <div className="h-80 bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group flex items-center justify-center">
                <img src="/perfect1.jpg" className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" alt="PERFECT 2023 Dokumentasi 1" />
              </div>
              <div className="h-80 bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group flex items-center justify-center">
                <img src="/perfect2.jpg" className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" alt="PERFECT 2023 Dokumentasi 2" />
              </div>
            </div>

            {/* TEKS (KANAN) */}
            <div className="lg:col-span-6 lg:order-2 font-sans">
              <span className="text-cyan-500 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold underline underline-offset-8 decoration-cyan-500/30">Committee Experience</span>
              <div className="flex flex-col md:flex-row justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">PERFECT (Permib Freedom In Creativity)</h3>
                <span className="text-white font-mono font-bold uppercase">Jan – Mar 2023</span>
              </div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Junior Committee Member</p>

              <ul className="text-white space-y-5 text-sm leading-relaxed font-medium">
                <li className="flex items-start gap-4">
                  <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
                  <span>Berperan sebagai <strong className="text-cyan-400 uppercase tracking-widest">Person in Charge (PIC)</strong> logistik untuk Divisi Dana Usaha, secara proaktif berkoordinasi untuk mengidentifikasi dan memenuhi kebutuhan peralatan esensial acara.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

{/* PROJECTS SECTION */}
        <section id="projects" className="mb-40 scroll-mt-24 font-sans">
          <h2 className="text-3xl font-bold text-white mb-0 uppercase tracking-widest">Projects</h2>
          
          <div className="grid grid-cols-1 gap-10">
            
      {/* PROJECT 1 - FULL PACK (4 POIN TEGAK + FOTO ZIGZAG) */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
             {/* KOLOM TEKS (KIRI) - TEKS PUTIH & HIGHLIGHT PERSEN CYAN */}
<div className="lg:col-span-6 font-sans">
  <span className="text-cyan-500 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold underline underline-offset-8 decoration-cyan-500/30 font-sans">Proyek 01 / AI & Edge Computing</span>
  <h3 className="text-3xl font-bold text-white mb-10 tracking-tighter uppercase font-sans">PEST DETECTION SYSTEM</h3>
  
  {/* Menggunakan text-white agar tulisan jadi putih bersih */}
  <ul className="text-white space-y-7 text-sm leading-relaxed font-medium">
    {/* Poin 01 */}
    <li className="flex items-start gap-4">
      <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
      <span>
        Implementasi sistem <strong className="text-cyan-400 uppercase tracking-widest">Edge Computing</strong> pada ESP32-CAM dengan kompresi model MobileNetV2 hingga <strong className="text-cyan-400 font-bold">90% (8 MB → 950 KB)</strong> melalui TensorFlow Lite dan kuantisasi INT8.
      </span>
    </li>

    {/* Poin 02 */}
    <li className="flex items-start gap-4">
      <span className="text-cyan-500 font-bold mt-1 text-xs">02.</span>
      <span>
        Pencapaian akurasi pelatihan sebesar <strong className="text-cyan-400 font-bold">87%</strong> dan skor kepercayaan pengujian langsung hingga <strong className="text-cyan-400 font-bold">86%</strong> menggunakan 1.800 dataset gambar hama hortikultura di Google Colab.
      </span>
    </li>

    {/* Poin 03 */}
    <li className="flex items-start gap-4">
      <span className="text-cyan-500 font-bold mt-1 text-xs">03.</span>
      <span>
        Pembangunan sistem peringatan waktu nyata menggunakan buzzer (71,7 dB) dengan algoritma <strong className="text-cyan-400 uppercase font-bold tracking-widest">Majority Voting</strong> (15 bingkai per siklus) untuk menjamin validitas deteksi secara presisi.
      </span>
    </li>

    {/* Poin 04 */}
    <li className="flex items-start gap-4">
      <span className="text-cyan-500 font-bold mt-1 text-xs">04.</span>
      <span>
        Optimalisasi efisiensi daya hingga <strong className="text-cyan-400">94%</strong> (164,67 mA menjadi 9,67 mA) dengan menerapkan protokol <strong className="text-cyan-400 uppercase font-bold tracking-widest">Sleep Mode </strong> pada ESP32-CAM.
      </span>
    </li>
  </ul>
</div>

     {/* KOLOM FOTO (KANAN) - VERSI SIMETRIS RATA ATAS & BAWAH */}
<div className="lg:col-span-6 grid grid-cols-2 gap-4 font-bold uppercase tracking-widest leading-tight">
  
  {/* Foto 1 - Kiri Atas */}
  <div className="aspect-square bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
    <img src="/CapstoneDesign.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Desain Sistem" />
  </div>

  {/* Foto 2 - Kanan Atas (Sejajar Foto 1) */}
  <div className="aspect-square bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
    <img src="/test1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Pengambilan Data" />
  </div>

  {/* Foto 3 - Kiri Bawah */}
  <div className="aspect-square bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group font-bold italic leading-relaxed">
    <img src="/FotoAlat.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Prototipe Alat" />
  </div>

  {/* KOTAK DOKUMENTASI - Kanan Bawah (Sejajar Foto 3) */}
  <div className="relative aspect-square rounded-[2rem] border border-cyan-500/30 overflow-hidden shadow-2xl group/doc font-bold italic">
    
    {/* GAMBAR COVER (Background) */}
    <img 
      src="/FotoAlat.jpg" 
      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover/doc:scale-110 transition-transform duration-700" 
      alt="Cover Video" 
    />
    
    {/* Overlay Gelap */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

    {/* Konten Teks & Tombol */}
    <div className="relative h-full flex flex-col justify-between p-6 z-10">
      <div>
        <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Dokumentasi</p>
        <h4 className="text-white text-base font-bold leading-tight uppercase tracking-tighter italic">Lihat Demo <br /> Operasional Alat</h4>
      </div>
      
      <a 
        href="https://www.youtube.com/watch?v=TZpVRWGE9f0" 
        target="_blank" 
        className="flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95"
      >
        <Play size={12} fill="currentColor" /> Putar Video
      </a>
    </div>
  </div>
</div>
</div>
            {/* PROJECT 2: SMART RAIN SHIELD */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/5 pt-32">
              
              {/* TEKS (KANAN SECARA VISUAL) */}
              <div className="lg:col-span-5 lg:order-2">
                <span className="text-cyan-500 font-mono text-[10px] mb-4 block tracking-[0.4em] uppercase font-bold underline underline-offset-8 decoration-cyan-500/30 font-sans">Proyek 02 / IoT System</span>
                <h3 className="text-4xl font-bold text-white mb-10 tracking-tighter uppercase font-sans leading-relaxed">Smart Rain Shield</h3>
                
                <ul className="text-white space-y-5 text-sm leading-relaxed font-medium text-justify">
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-bold mt-1 text-xs">01.</span>
                    <span>Pengembangan prototipe pelindung jemuran otomatis menggunakan mikrokontroler <strong className="text-cyan-400 uppercase">ESP32-WROOM-32</strong> untuk perlindungan aset rumah tangga dari cuaca buruk.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-bold mt-1 text-xs">02.</span>
                    <span>Integrasi sensor hujan <strong className="text-cyan-400 uppercase font-bold tracking-widest uppercase">MH-RD</strong> dan motor servo <strong className="text-cyan-400 uppercase font-bold">SG90</strong> untuk menggerakan penutup secara otomatis (menutup hingga sudut 0 derajat saat hujan dan membuka hingga sudut 90 derajat saat cuaca cerah).</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-bold mt-1 text-xs">03.</span>
                    <span>Implementasi fitur <strong className="text-cyan-400 uppercase tracking-widest font-bold">Manual Override</strong> yang memungkinkan pengguna mengendalikan perangkat secara manual melalui aplikasi seluler.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-cyan-500 font-bold mt-1 text-xs">04.</span>
                    <span>Konektivitas sistem dengan platform <strong className="text-cyan-400 uppercase font-bold">Blynk IoT</strong> untuk pemantauan status cuaca dan kontrol perangkat jarak jauh secara waktu nyata.</span>
                  </li>
                </ul>
              </div>

              {/* FOTO (KIRI SECARA VISUAL) - 2 FOTO + 1 VIDEO BANNER */}
              <div className="lg:col-span-7 lg:order-1 grid grid-cols-2 gap-4">

                {/* Foto 1 */}
                <div className="aspect-square bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                  <img src="/rainshield1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Prototipe Smart Rain Shield" />
                </div>

                {/* Foto 2 */}
                <div className="aspect-square bg-zinc-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl transition-all hover:border-cyan-500/50 group">
                  <img src="/rainshield2.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Implementasi Smart Rain Shield" />
                </div>

                {/* KOTAK DOKUMENTASI VIDEO - FULL WIDTH, CEPER */}
                <div className="col-span-2 relative h-40 rounded-[2rem] border border-cyan-500/30 overflow-hidden shadow-2xl group/doc">
                  
                  <img 
                    src="/rainshield1.jpg" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover/doc:scale-110 transition-transform duration-700" 
                    alt="Cover Video Smart Rain Shield" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    <div>
                      <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Dokumentasi</p>
                      <h4 className="text-white text-base font-bold leading-tight uppercase tracking-tighter italic">Lihat Demo <br /> Operasional Alat</h4>
                    </div>
                    
                    <a 
                      href="https://drive.google.com/file/d/14lUHqmY0uTp9lw807PfbAtpU5MQI2JhG/view?usp=sharing" 
                      target="_blank" 
                      className="flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 w-fit px-6"
                    >
                      <Play size={12} fill="currentColor" /> Putar Video
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-40 scroll-mt-24">
          <div className="flex items-center gap-2 text-cyan-500 mb-10 font-bold text-[10px] uppercase tracking-[0.3em]">
            <div className="w-8 h-[1px] bg-cyan-500"></div> Skills
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
  <Cpu size={16} className="text-cyan-400" /> Hard Skills
</h3>
              <div className="flex flex-wrap gap-2">
                {["Microsoft Office", "Canva", "Google Colab", "IoT Sensor & Hardware Integration", "NMS", "ENOM", "Telecommunication Network"].map((skill) => (
                 <span key={skill} className="text-white text-xs font-medium bg-zinc-900/40 border border-white/10 rounded-full px-4 py-2 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
  <User size={16} className="text-cyan-400" /> Soft Skills
</h3>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Problem Solving", "Public Speaking", "Critical Thinking", "Teamwork", "Management Planning", "Emotional Intelligence"].map((skill) => (
                  <span key={skill} className="text-white text-xs font-medium bg-zinc-900/40 border border-white/10 rounded-full px-4 py-2 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ACHIEVEMENTS SECTION - GABUNGAN AWARDS & CERTIFICATIONS */}
<section id="achievements" className="mb-40 scroll-mt-24">
  <h2 className="text-3xl font-bold text-white mb-16 uppercase tracking-widest">Achievements</h2>

  {/* SUB-BAGIAN 1: AWARDS */}
  <div className="mb-20">
    <div className="flex items-center gap-2 text-cyan-500 mb-8 font-bold text-[10px] uppercase tracking-[0.3em]">
      <div className="w-8 h-[1px] bg-cyan-500"></div> Awards
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5">
        <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">2023</span>
        <h3 className="text-white text-lg font-bold mt-2 uppercase">Inspiring Member Junior Male</h3>
        <p className="text-zinc-400 text-sm mt-2">PERFECT (Permib Freedom In Creativity)</p>
      </div>
      {/* Tambah kotak award lain di sini kalau ada */}
    </div>
  </div>

  {/* SUB-BAGIAN 2: CERTIFICATIONS (COURSE & TRAINING) */}
  <div>
    <div className="flex items-center gap-2 text-cyan-500 mb-8 font-bold text-[10px] uppercase tracking-[0.3em]">
      <div className="w-8 h-[1px] bg-cyan-500"></div> Course & Training
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          image: "/googleessential.jpg",
          title: "Google AI Essentials",
          provider: "Google",
          desc: "Mempelajari dasar-dasar kecerdasan buatan, termasuk cara kerja AI dan penerapannya di berbagai bidang."
        },
        {
          image: "/wireless.jpg",
          title: "Wireless Communication for Everybody",
          provider: "Yonsei University",
          desc: "Memahami konsep dasar komunikasi nirkabel, mulai dari prinsip transmisi sinyal hingga sistem jaringan modern."
        },
        {
          image: "/comptia.jpg",
          title: "CompTIA Network+ (N10-008)",
          provider: "Packt",
          desc: "Pelatihan komprehensif mengenai fundamental jaringan komputer, mempersiapkan sertifikasi CompTIA Network+."
        },
        {
          image: "/nvidia.jpg",
          title: "Introduction to Networking",
          provider: "NVIDIA",
          desc: "Pengenalan konsep jaringan komputer dasar, termasuk topologi, protokol, dan infrastruktur jaringan."
        },
        {
          image: "/iot.jpg",
          title: "Introduction to the Internet of Things and Embedded Systems",
          provider: "UC Irvine",
          desc: "Mempelajari dasar-dasar IoT dan embedded system, mencakup sensor, mikrokontroler, dan konektivitas perangkat."
        },
        {
          image: "/arduino.jpg",
          title: "Interfacing with the Arduino",
          provider: "UC Irvine",
          desc: "Praktik pemrograman dan interfacing perangkat keras menggunakan mikrokontroler Arduino."
        },
        {
          image: "/manpro.jpg",
          title: "Introduction to Project Management",
          provider: "IBM",
          desc: "Memahami dasar-dasar manajemen proyek, termasuk perencanaan, eksekusi, dan pengendalian proyek."
        },
        {
          image: "/hardwareos.jpg",
          title: "Introduction to Hardware and Operating Systems",
          provider: "IBM",
          desc: "Pengenalan komponen perangkat keras komputer serta cara kerja sistem operasi secara umum."
        },
        {
          image: "/skillup.jpg",
          title: "Project Management Foundations, Initiation, and Planning",
          provider: "SkillUp",
          desc: "Pendalaman tahap inisiasi dan perencanaan dalam siklus manajemen proyek secara profesional."
        },
      ].map((course, index) => (
        <div 
          key={index}
          className="bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
        >
          <div className="aspect-[4/3] bg-zinc-900 overflow-hidden">
            <img 
              src={course.image} 
              className="w-full h-full object-cover" 
              alt={course.title} 
            />
          </div>
          <div className="p-6">
            <h3 className="text-white text-base font-bold leading-snug mb-2">{course.title}</h3>
            <p className="text-cyan-400 text-xs font-bold mb-3">{course.provider}</p>
            <p className="text-zinc-400 text-sm leading-relaxed text-justify">{course.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* CONTACT / FOOTER */}
        <footer id="contact" className="pt-20 border-t border-white/5 text-center px-6 scroll-mt-24">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter italic font-serif">Let's Connect.</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button 
            onClick={() => setIsContactOpen(true)}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all"
          >
            Contact Me
          </button>
        </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            <div className="flex items-center gap-2"><GraduationCap size={12}/> Universitas Telkom</div>
            <div>MUHAMMAD LUTFI RAIHAN SENJAYA</div>
          </div>
        </footer>
        {/* CONTACT MODAL - STYLE LINKTREE */}
        {isContactOpen && (
          <div 
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
            onClick={() => setIsContactOpen(false)}
          >
           <div 
              className="bg-[#0a0e1a]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 w-full max-w-sm relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 mx-auto mb-4">
                  <img src="/FotoProfile.jpg" className="w-full h-full object-cover object-top" alt="Muhammad Lutfi Raihan Senjaya" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">Muhammad Lutfi Raihan Senjaya</h3>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:lutfi.messi100@gmail.com" 
                  className="flex items-center gap-3 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-white/10 rounded-2xl px-5 py-4 transition-all group"
                >
                  <Mail size={18} className="text-cyan-400" />
                  <div className="text-left">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">Email</p>
                    <p className="text-zinc-500 text-xs">lutfi.messi100@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/muhammad-lutfi-raihan/" 
                  target="_blank"
                  className="flex items-center gap-3 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-white/10 rounded-2xl px-5 py-4 transition-all group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <div className="text-left">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">LinkedIn</p>
                    <p className="text-zinc-500 text-xs">muhammad-lutfi-raihan</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/lutfimessi100-gif" 
                  target="_blank"
                  className="flex items-center gap-3 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/50 border border-white/10 rounded-2xl px-5 py-4 transition-all group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <div className="text-left">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">GitHub</p>
                    <p className="text-zinc-500 text-xs">lutfimessi100-gif</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.main>         
    </div>
  );
}
