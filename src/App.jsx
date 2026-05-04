import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.card-spotlight').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-blue-500/30">
      
      {/* NAVBAR */}
      
      <header className="p-6 flex justify-between items-center sticky top-0 z-50 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* Línea de luz superior — firma Apple */}
        <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)" }} />

        {/* Reflejo diagonal interior */}
        <span className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)" }} />

        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            style={{ color: "#a78bfa" }}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>
          <h1 className="text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            PDDV
          </h1>
        </div>

        {/* Nav */}
        <nav
          className="hidden md:flex space-x-1 text-sm items-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "100px",
            padding: "6px 8px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Línea de luz superior */}
          <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)" }} />

          {/* Reflejo diagonal */}
          <span className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.08) 0%,transparent 50%)", borderRadius: "100px" }} />

          <a href="#SobreMi"
            className="relative z-10 transition-all duration-300 hover:text-white rounded-full"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Sobre Mi
          </a>

          <a href="#Proyectos"
            className="relative z-10 transition-all duration-300 hover:text-white rounded-full"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Proyectos
          </a>

          <a href="#experiencia"
            className="relative z-10 transition-all duration-300 hover:text-white rounded-full"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Experiencia
          </a>

          <a href="#habilidades"
            className="relative z-10 transition-all duration-300 hover:text-white rounded-full"
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              padding: "6px 16px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Habilidades
          </a>

          {/* Botón Descargar CV — sin tocar href ni download */}
          <a href="/paul_delgado_CV.pdf" download="CV_Paul_Delgado.pdf"
            className="relative overflow-hidden inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            style={{
              padding: "8px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: "500",
              background: "rgba(139,92,246,0.18)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(167,139,250,0.30)",
              color: "#c4b5fd",
              boxShadow: "0 4px 20px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(139,92,246,0.32)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(139,92,246,0.38)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(139,92,246,0.18)";
              e.currentTarget.style.color = "#c4b5fd";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.12)";
            }}
          >
            {/* Luz superior botón */}
            <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)" }} />
            {/* Reflejo botón */}
            <span className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.13) 0%,transparent 55%)", borderRadius: "100px" }} />

            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span className="relative z-10">Descargar CV</span>
          </a>
        </nav>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section className="py-20 px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Disponible para proyectos</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-4 leading-tight">
              Paúl David{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delgado Vergara
              </span>   
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Estudiante de Ciencia de Datos y Desarrollo. Apasionado por crear soluciones útiles que unan tecnología, visión analítica y diseño.
            </p>
            <div className="mt-8 flex gap-4">

            {/* BOTON PROYECTOS */}
            <a href="#Proyectos"
              className="relative overflow-hidden inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                padding: "15px 40px",
                borderRadius: "100px",
                fontSize: "13px",
                background: "rgba(139, 92, 246, 0.10)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(167, 139, 250, 0.32)",
                color: "rgba(255,255,255,0.85)",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.35)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(139, 92, 246, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.20)";
                e.currentTarget.style.color = "#c4b5fd";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)";
              }}
            >
              <span className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
              <span className="relative z-10">Proyectos</span>
            </a>

            {/* BOTON CONTACTO */}
            <a href="#contacto"
              className="relative overflow-hidden inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                padding: "10px 26px",
                borderRadius: "100px",
                fontSize: "13px",
                background: "rgba(139, 92, 246, 0.20)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(167, 139, 250, 0.32)",
                color: "#c4b5fd",
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.35)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = "0 10px 32px rgba(139, 92, 246, 0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.20)";
                e.currentTarget.style.color = "#c4b5fd";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 92, 246, 0.20), inset 0 1px 0 rgba(255,255,255,0.12)";
              }}
            >
              <span className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
              <span className="relative z-10">Contacto</span>
            </a>

            </div>
          </div>
          <div className="relative w-full md:w-[450px] flex justify-center">
            <img 
              src="/lupa.png"
              alt="Lupa decorativa"
              className=" w-72 drop-shadow-xl transition-transform duration-500 ease-out hover:scale-110 hover:-translate-y-2 animate-float"
            />          
          </div>
        </section>

        <div className="max-w-10xl mx-auto px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </div>

        {/* SOBRE MÍ */}
        <section id="SobreMi" className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-blue-500"></div>
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em]">Sobre Mí</h2>
              </div>
              <p className="mt-6 text-slate-500 italic text-sm leading-relaxed">
                "Transformando datos en estrategias, y código en experiencias."
              </p>
            </div>
            <div className="md:w-3/4">
              <p className="text-slate-400 leading-relaxed">
                Soy apasionado de la intersección entre la ciencia de datos y el desarrollo de software como estudiante de Ciencias de Datos e Inteligencia Artificial, mi enfoque se centra en transformar datos complejos en soluciones tecnológicas accionables, especializándome en Ingeniería de Datos y Optimización mediante algoritmos avanzados. Me enfoco en construir sistemas que no solo analicen el pasado, sino que optimicen el futuro. Mi objetivo es aprender, construir y mejorar continuamente en cada línea de código y cada modelo que desarrollo.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-10xl mx-auto px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </div>

        {/* PROYECTOS */}
        <section id="Proyectos" className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1: AdventureWorks */}
            <div className="relative group p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.boxShadow = `
                  0 24px 64px rgba(0,0,0,0.4),
                  0 1px 0 rgba(255,255,255,0.22) inset,
                  0 -1px 0 rgba(255,255,255,0.05) inset,
                  1px 0 0 rgba(255,255,255,0.08) inset,
                  -1px 0 0 rgba(255,255,255,0.08) inset
                `;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.boxShadow = `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `;
              }}
            >
              {/* Línea de luz superior */}
              <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)" }} />

              {/* Reflejo diagonal principal */}
              <span className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,transparent 45%)", borderRadius: "24px" }} />

              {/* Destello esquina inferior derecha */}
              <span className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40"
                style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)" }} />

              {/* ── TODO LO DE ABAJO SIN TOCAR ── */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Data Engineering</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition relative z-10">
                Data Warehouse AdventureWorks
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                Diseño e implementación de un Data Warehouse corporativo usando PDI (Pentaho Data Integration) y PostgreSQL. Incluye modelado en estrella y definición de KPIs estratégicos.
              </p>

              <a href="https://github.com/PaulDelgado07/MiPrimerRepo/tree/main/Proyecto%20del%201er%20Parcial%20Almacenes%20de%20datos"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition relative z-10">
                Ver GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>

            {/* PROYECTO 2: PROGRAMACIÓN DE TURNOS */}
            <div className="relative group p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.boxShadow = `
                  0 24px 64px rgba(0,0,0,0.4),
                  0 1px 0 rgba(255,255,255,0.22) inset,
                  0 -1px 0 rgba(255,255,255,0.05) inset,
                  1px 0 0 rgba(255,255,255,0.08) inset,
                  -1px 0 0 rgba(255,255,255,0.08) inset
                `;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.boxShadow = `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `;
              }}
            >
              {/* Línea de luz superior */}
              <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)" }} />

              {/* Reflejo diagonal principal */}
              <span className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,transparent 45%)", borderRadius: "24px" }} />

              {/* Destello esquina inferior derecha */}
              <span className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40"
                style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)" }} />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Optimización / IA</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition relative z-10">Programación de Turnos (PL Entera)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                Solución de Investigación de Operaciones para asignar turnos óptimos en supermercados, garantizando cobertura mínima y reduciendo costos laborales significativamente.
              </p>

              <div className="flex items-center gap-6 relative z-10">
                <a href="https://github.com/PaulDelgado07/MiPrimerRepo/blob/main/Proyecto%20de%20programaci%C3%B3n%20de%20turnos%20de%20personal%20PL%20Entera.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition">
                  Ver Documento
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
              </div>
            </div>

            {/* PROYECTO 3: CHURN PROJECT */}
            <div className="relative group p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.boxShadow = `
                  0 24px 64px rgba(0,0,0,0.4),
                  0 1px 0 rgba(255,255,255,0.22) inset,
                  0 -1px 0 rgba(255,255,255,0.05) inset,
                  1px 0 0 rgba(255,255,255,0.08) inset,
                  -1px 0 0 rgba(255,255,255,0.08) inset
                `;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.boxShadow = `
                  0 8px 40px rgba(0,0,0,0.3),
                  0 1px 0 rgba(255,255,255,0.12) inset,
                  0 -1px 0 rgba(255,255,255,0.03) inset,
                  1px 0 0 rgba(255,255,255,0.05) inset,
                  -1px 0 0 rgba(255,255,255,0.05) inset
                `;
              }}
            >
              {/* Línea de luz superior */}
              <span className="pointer-events-none absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)" }} />

              {/* Reflejo diagonal principal */}
              <span className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.07) 0%,transparent 45%)", borderRadius: "24px" }} />

              {/* Destello esquina inferior derecha */}
              <span className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40"
                style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)" }} />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="17 8 22 12 17 16" />
                    <line x1="22" y1="12" x2="13" y2="12" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Churn Project</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition relative z-10">Predicción de Deserción Estudiantil</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
                Este proyecto tiene como objetivo desarrollar un modelo de aprendizaje automático capaz de predecir el riesgo de deserción estudiantil, utilizando variables académicas como el promedio general, la asistencia, el número de materias reprobadas y el número de repeticiones de asignaturas.
                    El sistema permite entrenar un modelo predictivo y posteriormente utilizarlo en una aplicación interactiva desarrollada con Streamlit.
              </p>

              <div className="flex items-center gap-6 relative z-10">
                <a href="https://github.com/PaulDelgado07/prediccion_desercion" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition">
                  Ver GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="/Informe_proyecto.pdf" className="text-sm font-semibold text-slate-500 hover:text-white transition relative z-10">Carpeta del proyecto</a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-10xl mx-auto px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </div>

        {/* EXPERIENCIA (TIMELINE) */}
        {/* SECCIÓN EXPERIENCIAS Y CHARLAS - DISEÑO GLOW FUSIONADO */}
        <section id="experiencia" className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Experiencias y Charlas</h2>
            <div className="h-1 w-16 bg-blue-600 mt-2 rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4">
            
            {/* ITEM 1: FLISOL - PUNTOS BRILLANTES */}
            <div className="mb-12 ml-8 relative group">
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-[#0b1223] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <div className="mb-2">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded">
                  Ponente
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                Charla FLISOL – Universidad Católica del Ecuador
              </h3>
              <p className="text-slate-300 font-medium mt-1">Automatización CI/CD con Git</p>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Comparativa entre plataformas libres y propietarias. Analicé flujos de automatización, despliegue continuo y herramientas modernas de integración.
              </p>
            </div>

            {/* ITEM 2: IA - ESTILO INVESTIGACIÓN (MORADO) */}
            <div className="mb-12 ml-8 relative group">
              {/* Punto neón morado */}
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-[#0b1223] border-2 border-purple-600 group-hover:bg-purple-600 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300"></div>
              
              <div className="mb-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded transition-colors">
                  Investigación
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">
                Construcción de arquitecturas escalables de IA
              </h3>
              
              <p className="text-slate-400 mt-2 text-sm leading-relaxed font-light">
                Uso de <span className="text-purple-400 font-medium">LangGraph</span> para implementar agentes de IA modulares, escalables y con manejo avanzado de estados.
              </p>
            </div>

            {/* ITEM 3: NEOVIM - PRODUCTIVIDAD (NARANJA) */}
            <div className="mb-12 ml-8 relative group">
              {/* Punto neón naranja */}
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-[#0b1223] border-2 border-orange-600 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-all duration-300"></div>
              
              <div className="mb-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-2 py-1 rounded">
                  Productividad
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-orange-400 transition-colors">
                Configuración blazingly fast con Neovim
              </h3>
              
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Configuración de entornos ultra rápidos para desarrollo, optimización con plugins, <span className="text-orange-300/80">LSPs</span> y flujos automatizados.
              </p>
            </div>

            {/* ITEM 4: TALLERISTA */}
            <div className="mb-12 ml-8 relative group">
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-[#0b1223] border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
              <div className="mb-2">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded">
                  Tallerista
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                Análisis de datos de diagrama gráfico
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Aprendizaje Automático para predecir temperatura corporal como variable de sistemas de climatización eficientes. 
                <span className="block mt-2 text-slate-500 italic">Variables: edad, peso, altura, temperatura ambiente, humedad, foto, fecha y hora.</span>
              </p>
            </div>

            {/* ITEM 5: REDES - COLOR ESMERALDA */}
            <div className="mb-6 ml-8 relative group">
              <div className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-[#0b1223] border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300"></div>
              <div className="mb-2">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
                  Infraestructura
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                Habilidades técnicas complementarias
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                Manipulación y armado de conectores <span className="text-slate-200">RJ45</span> con estándares <span className="text-slate-200">T568A / T568B</span> para redes estructuradas.
              </p>
            </div>

          </div>
        </section>

        <div className="max-w-10xl mx-auto px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </div>

        {/* SECCIÓN HABILIDADES TÉCNICAS */}
        <section id="habilidades" className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight">Habilidades Técnicas</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4">Especialización en el ciclo completo de datos y desarrollo moderno.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* DATA SCIENCE & AI - (MORADO/BLUE) */}
            <div className="card-spotlight relative group bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Data Science & AI</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {['LangGraph', 'Machine Learning', 'Pandas', 'NLP'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DEVELOPMENT & TOOLS - (NARANJA/BLUE) */}
            <div className="card-spotlight relative group bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-orange-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Dev & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {['React', 'Tailwind CSS', 'Neovim', 'Git/GitHub', 'CI/CD', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 hover:border-orange-500/50 hover:text-orange-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* INFRASTRUCTURE & BUSINESS - (EMERALD/BLUE) */}
            <div className="card-spotlight relative group bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-emerald-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Infra & Business</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {['ETL (PDI)', 'Redes T568A/B', 'Pentaho', 'Power BI', 'Linux', 'Data Warehouse'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* INFRASTRUCTURE & BUSINESS - NUEVA*/}
            <div className="card-spotlight relative group bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Stack Tecnológico</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {['Python', 'PostgreSQL', 'Java'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 hover:border-red-500/50 hover:text-red-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            </div>
        </section>

        <div className="max-w-10xl mx-auto px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        </div>

        {/* SECCIÓN CONTACTO / TELÉFONO */}
        <section id="contacto" className="py-20 px-6 md:px-10 max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white tracking-tight">¿Tienes un proyecto en mente?</h2>
            <p className="text-slate-400 mt-4 text-lg">Estoy abierto a nuevas oportunidades y colaboraciones en Ciencia de Datos o Desarrollo.</p>
          </div>

          {/* Tarjeta Glassmorphism de Contacto */}
          <div className="relative inline-flex flex-col items-center gap-6 bg-white/5 backdrop-blur-2xl border border-white/20 p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] cursor-default group mx-auto">
            
            {/* Reflejo de luz superior */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>
            
            {/* Icono de Teléfono / WhatsApp con pulso */}
            <div className="relative z-10 p-5 bg-emerald-500/15 backdrop-blur-md rounded-full text-emerald-400 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <span className="block text-slate-400 text-xs uppercase tracking-[0.3em] mb-2 font-bold">Hablemos por WhatsApp</span>
              <a 
                href="https://wa.me/593967792173" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl font-black text-white hover:text-emerald-400 transition-colors tracking-tighter"
              >
                +593 967792173
              </a>
            </div>

            {/* Badge de disponibilidad */}
            <div className="relative z-10 flex gap-4 mt-2">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Respuesta inmediata
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER FINAL */}
      <footer className="relative py-12 px-6 border-t border-slate-900 bg-[#0f172a] overflow-hidden group">
        
        {/* Luz tipo agua - Aparece suavemente al hacer hover sobre el footer */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(
                circle at 50% 50%, 
                rgba(59,130,246,0.15), 
                transparent 60%
            )`
          }}
        >
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 z-10">
            
            {/* Logo y Copyright */}
            <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                        <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </svg>
                    <span className="text-white font-bold tracking-tighter uppercase">
                        PDDV
                    </span>
                </div>
                <p className="text-slate-500 text-xs">
                    © 2024 Paul David Delgado Vergara.
                </p>
                <p className="text-slate-600 text-[10px] mt-1 italic">
                    "Cualquier dato puede ser una historia esperando ser contada."
                </p>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-6">
              
                <a 
                  href="https://github.com/PaulDelgado07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 30 30"
                    className="w-5 h-5 fill-current"
                >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                    GitHub
                </a>

                <a 
                  href="https://linkedin.com/in/tu-usuario" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0077b5] transition-all duration-300 flex items-center gap-2 text-sm hover:scale-105"
                >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                >
                  <path fill="currentColor" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                  <path fill="white" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"></path>
                </svg>
                LinkedIn
                </a>
            </div>
            
        </div>
      </footer>
    </div>
  )
}

export default App