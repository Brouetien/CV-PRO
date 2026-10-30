import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Network,
  Activity,
  Wrench,
  Headphones,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Trophy,
  Menu,
  X,
  Send,
  Printer
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [skillValues, setSkillValues] = useState([0, 0, 0, 0, 0]);
  const skillsRef = useRef(null);

  // Coordonnées réelles vérifiées
  const contacts = {
    whatsapp: "https://wa.me/message/WQGRH5MF27PPI1",
    linkedin: "https://www.linkedin.com/in/ezechiel-etien-4b61ab287",
    email: "etienezechiel09@gmail.com"
  };

  const skillsData = [
    {
      id: 1,
      icon: Network,
      title: "1. Réseaux informatiques et télécommunications (FTTH, fibre optique, connectivité)",
      target: 92
    },
    {
      id: 2,
      icon: Wrench,
      title: "2. Maintenance informatique (diagnostic, dépannage, entretien équipements)",
      target: 88
    },
    {
      id: 3,
      icon: Headphones,
      title: "3. Support IT (assistance technique, résolution de problèmes)",
      target: 86
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "4. Formation informatique (pédagogie, vulgarisation, accompagnement utilisateurs)",
      target: 90
    },
    {
      id: 5,
      icon: Sparkles,
      title: "5. Création numérique et IA (outils d'IA, conception web, Vibe Coding)",
      target: 85
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !skillsAnimated) {
            setSkillsAnimated(true);

            const duration = 1800;
            const startTime = performance.now();

            const animateCounters = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setSkillValues(skillsData.map((s) => Math.round(s.target * easeOut)));

              if (progress < 1) {
                requestAnimationFrame(animateCounters);
              }
            };

            requestAnimationFrame(animateCounters);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skillsAnimated]);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#FAFAFD] text-slate-800 font-sans selection:bg-purple-600 selection:text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FAFAFD]/95 backdrop-blur-md border-b border-purple-100/70 py-3.5 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm sm:text-base shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              BE
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-purple-600 transition-colors">
                Brou Ezechiel
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-purple-600 font-semibold tracking-wider uppercase">
                Technicien NOC &bull; FTTH &bull; IA
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#a-propos" className="hover:text-purple-600 transition-colors">À propos</a>
            <a href="#services" className="hover:text-purple-600 transition-colors">Expertises</a>
            <a href="#experiences" className="hover:text-purple-600 transition-colors">Expériences</a>
            <a href="#competences" className="hover:text-purple-600 transition-colors">Compétences</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/CV_Brou_Etien_Jacques_Ezechiel.pdf"
              download="CV_Brou_Etien_Jacques_Ezechiel.pdf"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl flex items-center gap-1.5 sm:gap-2 shadow-md shadow-purple-500/20 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Télécharger CV</span>
              <span className="sm:hidden">CV PDF</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-purple-100 mt-3 flex flex-col gap-2.5 font-semibold text-sm text-slate-700">
            <a href="#a-propos" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-2 rounded-lg hover:bg-purple-50 hover:text-purple-700">À propos</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-2 rounded-lg hover:bg-purple-50 hover:text-purple-700">Expertises</a>
            <a href="#experiences" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-2 rounded-lg hover:bg-purple-50 hover:text-purple-700">Expériences</a>
            <a href="#competences" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-2 rounded-lg hover:bg-purple-50 hover:text-purple-700">Compétences</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1.5 px-2 rounded-lg hover:bg-purple-50 hover:text-purple-700">Contact</a>
            
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3 px-2">
              <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-emerald-50" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.94 7.36C8.77 7.36 8.5 7.42 8.27 7.67C8.04 7.92 7.38 8.54 7.38 9.81C7.38 11.08 8.31 12.3 8.44 12.47C8.57 12.64 10.23 15.34 12.83 16.38C15.01 17.26 15.46 17.08 15.93 17.04C16.41 17 17.47 16.41 17.69 15.78C17.91 15.15 17.91 14.61 17.84 14.49C17.77 14.37 17.58 14.31 17.3 14.17C17.02 14.03 15.65 13.35 15.4 13.25C15.14 13.15 14.95 13.1 14.77 13.38C14.58 13.65 14.05 14.31 13.88 14.5C13.72 14.7 13.55 14.72 13.27 14.58C12.99 14.44 12.1 14.14 11.04 13.2C10.22 12.46 9.66 11.56 9.5 11.28C9.33 11 9.48 10.85 9.62 10.71C9.75 10.59 9.9 10.39 10.04 10.22C10.18 10.05 10.23 9.94 10.32 9.75C10.41 9.56 10.37 9.4 10.3 9.26C10.23 9.12 9.69 7.73 9.44 7.18C9.22 6.64 8.98 6.72 8.81 6.71C8.65 6.71 8.46 6.71 8.27 6.71L8.94 7.36Z"/></svg>
              </a>
              <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-blue-50" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.37 9.74v-8.37H5.1v8.37h2.73z"/></svg>
              </a>
              <a href={`mailto:${contacts.email}`} className="p-2 rounded-xl bg-red-50" aria-label="Email">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#EA4335"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        
        <div className="absolute -top-12 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-indigo-100/50 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-5 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shrink-0"></span>
              <span className="truncate">RÉSEAUX &bull; FIBRE FTTH &bull; VIBE CODING &bull; IA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Connecter. Sécuriser. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Innover avec l'IA
              </span> <br />
              &amp; les Réseaux.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-7 sm:mb-8">
              Je suis <strong className="text-slate-900 font-semibold">Brou Etien Jacques Ezechiel</strong>, titulaire d'un BTS RIT avec 2 ans d'expérience dans la maintenance et le déploiement des réseaux <span className="text-purple-700 font-medium font-mono">FTTH</span>. Formateur en informatique et passionné par le <span className="text-purple-700 font-medium">Vibe Coding</span>, je conçois des solutions numériques à forte valeur ajoutée.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="/CV_Brou_Etien_Jacques_Ezechiel.pdf"
                download="CV_Brou_Etien_Jacques_Ezechiel.pdf"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/25 transition-all hover:-translate-y-0.5"
              >
                <span>Télécharger mon CV (PDF)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="bg-white hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200 hover:border-purple-200 font-semibold text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span>Me contacter directement</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-200/80 w-full sm:w-auto">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-[11px] flex items-center justify-center ring-2 ring-white">FTTH</div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-[11px] flex items-center justify-center ring-2 ring-white">NOC</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-[11px] flex items-center justify-center ring-2 ring-white">AI</div>
              </div>
              <div>
                <div className="flex items-center text-amber-400 text-xs sm:text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-500">
                  2+ ans d'expérience terrain &bull; 100% Engagement &amp; Rigueur
                </p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            <div className="absolute w-[88%] sm:w-[92%] h-[92%] bg-gradient-to-tr from-purple-200/70 via-purple-100/80 to-indigo-100 rounded-[2.5rem] sm:rounded-[3rem] -rotate-2 transform scale-105 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[290px] sm:max-w-[340px] md:max-w-[380px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-purple-900/10 border-4 border-white">
              <img
                src="/brou-ezechiel.jpg"
                alt="Brou Etien Jacques Ezechiel - Technicien NOC & Spécialiste Réseaux"
                className="w-full h-[370px] sm:h-[430px] md:h-[460px] object-cover object-top hover:scale-102 transition-transform duration-500"
              />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl sm:rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 text-xs sm:text-sm">Brou Ezechiel</span>
                  <span className="block text-[10px] sm:text-[11px] text-purple-700 font-semibold font-mono">Technicien Réseaux &amp; IA</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 uppercase">Actif</span>
                </div>
              </div>
            </div>

            {/* Badges Flottants Desktop / Tablet */}
            <div className="hidden sm:flex absolute -right-4 md:-right-6 top-8 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100 items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-extrabold text-slate-900 text-xs sm:text-sm">2+ Ans</span>
                <span className="block text-slate-500 text-[10px] font-medium">FTTH &amp; Télécoms</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute -right-6 top-1/2 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100 items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-extrabold text-slate-900 text-xs sm:text-sm">Formateur IT</span>
                <span className="block text-slate-500 text-[10px] font-medium">Pédagogie &amp; Support</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute -left-4 md:-left-6 bottom-14 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-100 items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-extrabold text-slate-900 text-xs sm:text-sm">Vibe Coding</span>
                <span className="block text-slate-500 text-[10px] font-medium">Développement par IA</span>
              </div>
            </div>

            {/* Badges Mobile */}
            <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-4 z-10 w-full">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-sm text-xs font-semibold text-slate-700">
                <Network className="w-3.5 h-3.5 text-purple-600" />
                <span>2+ Ans FTTH</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-sm text-xs font-semibold text-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                <span>Formateur IT</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-purple-100 shadow-sm text-xs font-semibold text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Vibe Coding &amp; IA</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BANDEAU DES EXPERTISES */}
      <section className="bg-white border-y border-purple-100/80 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 sm:mb-6">
            Domaines d'intervention &bull; Technologies &bull; Méthodologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-slate-700 text-xs sm:text-sm">
              <Network className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Fibre Optique FTTH</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-slate-700 text-xs sm:text-sm">
              <Activity className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Supervision Réseau NOC</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-slate-700 text-xs sm:text-sm">
              <Wrench className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Maintenance IT</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-slate-700 text-xs sm:text-sm">
              <Headphones className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Support Technique Helpdesk</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-slate-700 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Vibe Coding &amp; IA</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Ce que j'apporte concrètement</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tout ce dont vous avez besoin pour vos infrastructures &amp; projets
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 sm:mt-4">
            De la gestion physique des réseaux optiques au déploiement de solutions numériques modernes assistées par intelligence artificielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Network className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Déploiement FTTH</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Raccordement d'abonnés, soudure optique, jarretiérage et optimisation de la connectivité très haut débit.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-purple-600 font-semibold text-xs">
              Maintenance préventive &amp; corrective
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Supervision &amp; NOC</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Veille constante, diagnostic des liaisons optiques au réflectomètre et résolution rapide des anomalies.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-purple-600 font-semibold text-xs">
              Garantie de continuité de service
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Maintenance IT</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Diagnostic matériel et logiciel, remplacement d'équipements défectueux, entretien préventif et curatif.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-purple-600 font-semibold text-xs">
              Fiabilisation des postes et serveurs
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Support &amp; Helpdesk</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Prise en charge réactive des utilisateurs, gestion d'incidents, écoute active et assistance technique dédiée.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-purple-600 font-semibold text-xs">
              Résolution méthodique &amp; suivi
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Formation Informatique</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Transmission des fondamentaux numériques, pédagogie claire et accompagnement bienveillant vers l'autonomie.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-purple-600 font-semibold text-xs">
              Pédagogie &amp; inclusion digitale
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 text-purple-300 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Vibe Coding &amp; IA</h3>
              <p className="text-purple-200 text-xs sm:text-sm leading-relaxed">
                Création de sites web et applications interactives augmentées par l'intelligence artificielle et les prompts d'ingénierie.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-purple-300 font-semibold text-xs">
              Innovation web moderne &amp; rapidité
            </div>
          </div>

        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="a-propos" className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-semibold uppercase mb-4">
              <span>Parcours &amp; Vision</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-5">
              Une double compétence solide : Terrain Réseau &amp; Avenir Digital.
            </h2>
            <div className="p-5 sm:p-6 bg-purple-50/70 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span className="font-bold text-slate-900 text-sm">Diplômé BTS RIT</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Réseaux Informatiques et Télécommunications : maîtrise des protocoles, connectivité fibre et équipements d'entreprise.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Titulaire d’un <strong className="text-slate-900">BTS en Réseaux Informatiques et Télécommunications (RIT)</strong>, je possède deux ans d’expérience professionnelle dans la maintenance et le déploiement des réseaux FTTH. Mon parcours m’a permis de développer des compétences en support informatique, maintenance des équipements, réseaux et télécommunications.
            </p>
            <p>
              Également <strong className="text-slate-900">formateur en informatique</strong>, je partage mes connaissances et accompagne les autres dans leur apprentissage du numérique.
            </p>
            <p className="p-4 bg-slate-50 border-l-4 border-purple-600 rounded-r-xl italic text-slate-700 text-sm sm:text-base">
              « Passionné par les nouvelles technologies et l’innovation, je m’oriente progressivement vers le <strong>Vibe Coding</strong>, avec l’ambition de concevoir des sites web, des applications et des solutions numériques grâce à l’intelligence artificielle. Mon objectif est de continuer à apprendre, innover et mettre mes compétences au service de projets concrets. »
            </p>
          </div>

        </div>
      </section>

      {/* SECTION EXPÉRIENCES */}
      <section id="experiences" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-semibold uppercase mb-3">
            <span>Chronologie Professionnelle</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Mes 3 Expériences Principales
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 hover:border-purple-200 transition-all">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-purple-700 px-3 py-1 rounded-full bg-purple-100">
                  2024 — PRÉSENT (2 ANS)
                </span>
                <span className="text-xs text-slate-500 font-medium">Infrastructures Télécoms &amp; FTTH</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Technicien réseaux et télécommunications (FTTH)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Maintenance préventive et corrective, déploiement et dépannage des réseaux de fibre optique. Mesures réflectométriques, raccordements abonnés et assurance de connectivité sans coupure.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">✓ Fibre Optique</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">✓ Maintenance FTTH</span>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 hover:border-purple-200 transition-all">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-purple-700 px-3 py-1 rounded-full bg-purple-100">
                  2023 — 2024
                </span>
                <span className="text-xs text-slate-500 font-medium">Transmission &amp; Pédagogie Numérique</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Formateur en informatique
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Transmission des connaissances informatiques, initiation aux outils numériques et accompagnement des apprenants vers la maîtrise pratique des environnements digitaux.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">✓ Pédagogie active</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">✓ Outils numériques</span>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 hover:border-purple-200 transition-all">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-indigo-700 px-3 py-1 rounded-full bg-indigo-100">
                  2025 — EN COURS
                </span>
                <span className="text-xs text-slate-500 font-medium">Innovation &amp; Développement IA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Créateur de solutions numériques en devenir (Vibe Coding)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Apprentissage et création concrète de sites web et d'applications modernes avec l'aide d'outils d'intelligence artificielle, d'architectures frontend et de prompt engineering.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-2">
              <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold">✓ Vibe Coding</span>
              <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold">✓ Agents IA</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section id="competences" ref={skillsRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-white border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-semibold uppercase mb-3">
              <span>Tableau de Maîtrise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Mes 5 Compétences Clés
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon;
              const currentValue = skillValues[index];
              return (
                <div
                  key={skill.id}
                  className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm hover:border-purple-200 transition-all"
                >
                  <div className="flex justify-between items-start sm:items-center gap-2 mb-2.5 font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                    <span className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>{skill.title}</span>
                    </span>
                    <span className="font-mono text-purple-600 font-extrabold text-sm sm:text-base shrink-0">
                      {currentValue}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/80 h-2.5 sm:h-3 rounded-full overflow-hidden p-0.5">
                    <div
                      className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 h-full rounded-full shadow-sm transition-all duration-300"
                      style={{ width: `${currentValue}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>Canaux de Contact Directs</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Me Contacter
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">
            Une question, une mission technique ou une opportunité de collaboration ? Choisissez votre canal préféré pour un échange direct.
          </p>
        </div>

        {/* 3 Cartes de Contact avec Vrais Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* WhatsApp Direct */}
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-emerald-400 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.94 7.36C8.77 7.36 8.5 7.42 8.27 7.67C8.04 7.92 7.38 8.54 7.38 9.81C7.38 11.08 8.31 12.3 8.44 12.47C8.57 12.64 10.23 15.34 12.83 16.38C15.01 17.26 15.46 17.08 15.93 17.04C16.41 17 17.47 16.41 17.69 15.78C17.91 15.15 17.91 14.61 17.84 14.49C17.77 14.37 17.58 14.31 17.3 14.17C17.02 14.03 15.65 13.35 15.4 13.25C15.14 13.15 14.95 13.1 14.77 13.38C14.58 13.65 14.05 14.31 13.88 14.5C13.72 14.7 13.55 14.72 13.27 14.58C12.99 14.44 12.1 14.14 11.04 13.2C10.22 12.46 9.66 11.56 9.5 11.28C9.33 11 9.48 10.85 9.62 10.71C9.75 10.59 9.9 10.39 10.04 10.22C10.18 10.05 10.23 9.94 10.32 9.75C10.41 9.56 10.37 9.4 10.3 9.26C10.23 9.12 9.69 7.73 9.44 7.18C9.22 6.64 8.98 6.72 8.81 6.71C8.65 6.71 8.46 6.71 8.27 6.71L8.94 7.36Z"/>
                </svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold uppercase mb-3">
                Réponse Rapide
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Direct</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Discutez directement avec moi sur WhatsApp pour une réponse immédiate à vos besoins.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#25D366] font-bold text-sm">
              <span>Ouvrir la discussion</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Email Professionnel */}
          <a
            href={`mailto:${contacts.email}?subject=Contact%20Professionnel%20-%20Brou%20Ezechiel`}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-red-400 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EA4335]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-mono font-bold uppercase mb-3">
                Email Officiel
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Écrire par E-mail</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-mono break-all mb-4 font-semibold text-purple-700">
                {contacts.email}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Pour vos propositions formelles, offres de poste, devis ou détails de projets.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#EA4335] font-bold text-sm">
              <span>Envoyer un e-mail</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Réseau Pro */}
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.37 9.74v-8.37H5.1v8.37h2.73z"/>
                </svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-mono font-bold uppercase mb-3">
                Réseau Pro
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Profil LinkedIn</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Connectons-nous sur LinkedIn pour suivre mes réalisations et échanger professionnellement.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#0A66C2] font-bold text-sm">
              <span>Consulter le profil</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>

        </div>

        {/* Bannière Finale CTA */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-purple-500/5 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="flex items-center gap-4 sm:gap-6 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-600/30">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-1.5 sm:mb-2">
                Prêt à collaborer avec Brou Ezechiel ?
              </h3>
              <p className="text-slate-600 text-xs sm:text-base max-w-lg">
                Basé en Côte d'Ivoire, mobile et disponible immédiatement pour des missions techniques terrain ou des projets numériques.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/25 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.94 7.36C8.77 7.36 8.5 7.42 8.27 7.67C8.04 7.92 7.38 8.54 7.38 9.81C7.38 11.08 8.31 12.3 8.44 12.47C8.57 12.64 10.23 15.34 12.83 16.38C15.01 17.26 15.46 17.08 15.93 17.04C16.41 17 17.47 16.41 17.69 15.78C17.91 15.15 17.91 14.61 17.84 14.49C17.77 14.37 17.58 14.31 17.3 14.17C17.02 14.03 15.65 13.35 15.4 13.25C15.14 13.15 14.95 13.1 14.77 13.38C14.58 13.65 14.05 14.31 13.88 14.5C13.72 14.7 13.55 14.72 13.27 14.58C12.99 14.44 12.1 14.14 11.04 13.2C10.22 12.46 9.66 11.56 9.5 11.28C9.33 11 9.48 10.85 9.62 10.71C9.75 10.59 9.9 10.39 10.04 10.22C10.18 10.05 10.23 9.94 10.32 9.75C10.41 9.56 10.37 9.4 10.3 9.26C10.23 9.12 9.69 7.73 9.44 7.18C9.22 6.64 8.98 6.72 8.81 6.71C8.65 6.71 8.46 6.71 8.27 6.71L8.94 7.36Z"/></svg>
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="/CV_Brou_Etien_Jacques_Ezechiel.pdf"
              download="CV_Brou_Etien_Jacques_Ezechiel.pdf"
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold text-xs sm:text-sm px-5 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger CV (PDF)</span>
            </a>

            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4 text-purple-600" />
              <span>Imprimer</span>
            </button>
          </div>

        </div>

      </section>

      {/* PIED DE PAGE */}
      <footer className="bg-white border-t border-slate-200 py-10 sm:py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
              BE
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm block">Brou Etien Jacques Ezechiel</span>
              <span className="text-xs text-slate-500 font-normal">Technicien Réseaux &bull; FTTH &bull; Formateur IT &bull; Vibe Coding</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-semibold">
            <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 flex items-center gap-1.5 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.94 7.36C8.77 7.36 8.5 7.42 8.27 7.67C8.04 7.92 7.38 8.54 7.38 9.81C7.38 11.08 8.31 12.3 8.44 12.47C8.57 12.64 10.23 15.34 12.83 16.38C15.01 17.26 15.46 17.08 15.93 17.04C16.41 17 17.47 16.41 17.69 15.78C17.91 15.15 17.91 14.61 17.84 14.49C17.77 14.37 17.58 14.31 17.3 14.17C17.02 14.03 15.65 13.35 15.4 13.25C15.14 13.15 14.95 13.1 14.77 13.38C14.58 13.65 14.05 14.31 13.88 14.5C13.72 14.7 13.55 14.72 13.27 14.58C12.99 14.44 12.1 14.14 11.04 13.2C10.22 12.46 9.66 11.56 9.5 11.28C9.33 11 9.48 10.85 9.62 10.71C9.75 10.59 9.9 10.39 10.04 10.22C10.18 10.05 10.23 9.94 10.32 9.75C10.41 9.56 10.37 9.4 10.3 9.26C10.23 9.12 9.69 7.73 9.44 7.18C9.22 6.64 8.98 6.72 8.81 6.71C8.65 6.71 8.46 6.71 8.27 6.71L8.94 7.36Z"/></svg>
              <span className="text-slate-700">WhatsApp</span>
            </a>
            <a href={`mailto:${contacts.email}`} className="hover:text-red-600 flex items-center gap-1.5 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span className="text-slate-700">{contacts.email}</span>
            </a>
            <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.37 9.74v-8.37H5.1v8.37h2.73z"/></svg>
              <span className="text-slate-700">LinkedIn</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            &copy; 2026 Brou Ezechiel &bull; Fait avec Vibe Coding
          </div>

        </div>
      </footer>

    </div>
  );
}
