import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Smartphone, Globe, Layers, Zap, ChevronRight } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
];

const SERVICES = [
  {
    title: 'Desarrollo de Apps',
    description: 'Aplicaciones nativas y multiplataforma robustas, rápidas y escalables.',
    icon: Smartphone,
  },
  {
    title: 'Sitios Web Modernos',
    description: 'Experiencias web inmersivas de alto rendimiento y SEO optimizado.',
    icon: Globe,
  },
  {
    title: 'Catálogos Digitales',
    description: 'Muestra tus productos al mundo con e-commerce y vitrinas digitales.',
    icon: Layers,
  },
  {
    title: 'Automatización',
    description: 'Integración de flujos de trabajo e IA para reducir tareas manuales.',
    icon: Zap,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Animated Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <motion.div 
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <motion.div
           animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-white/[0.02] blur-[120px] rounded-full"
        />
        <motion.div
           animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.3, 1] }}
           transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-white/[0.03] blur-[100px] rounded-full"
        />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.a
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            href="#home"
            className="text-2xl font-black tracking-tighter uppercase font-display"
            onClick={(e) => handleScroll(e, '#home')}
          >
            MZ <span className="text-white/50">Development</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white active:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-active:w-full" />
                </motion.a>
              ))}
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.5, type: 'spring' }}
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-xs uppercase tracking-[0.1em] font-bold bg-white text-black px-6 py-3 hover:scale-105 active:scale-95 transition-all rounded-full flex items-center gap-2 group"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Contactar
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white/70 hover:text-white active:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-4xl font-display font-bold uppercase tracking-widest text-white/80 hover:text-white"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="mt-8 text-sm uppercase tracking-[0.2em] font-bold border border-white/30 px-8 py-4 bg-white/5 hover:bg-white active:bg-white hover:text-black active:text-black transition-all hover:scale-105 active:scale-95 rounded-full flex items-center gap-3"
            >
              Contactar Ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-20">
        <motion.div 
           animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 bg-tech-pattern opacity-10 blur-[1px] mix-blend-screen" 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center pt-12 md:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] font-semibold text-white/50 mb-6 lg:mb-10"
          >
            Agencia de Desarrollo de Software
          </motion.p>
          
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-black font-display uppercase tracking-[-0.04em] flex flex-col gap-2 md:gap-4 items-center overflow-hidden">
            <motion.span
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.1, type: "spring", bounce: 0.2 }}
            >
              Innovación
            </motion.span>
            <motion.span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3, type: "spring", bounce: 0.2 }}
              className="animate-shimmer"
            >
              Digital
            </motion.span>
            <motion.div
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5, type: "spring", bounce: 0.2 }}
              className="flex gap-4"
            >
              <span>Desde</span>
              <span className="italic text-outline pr-4">Cuba</span>
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-xl mx-auto text-white/60 text-base md:text-lg mt-10 md:mt-14 font-medium leading-relaxed"
          >
            Construimos soluciones tecnológicas brutales. Desde Villa Clara hacia el mundo, transformamos lógicas complejas en experiencias elegantes y de alto rendimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-14 w-full"
          >
            {/* Solid Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              onClick={(e) => handleScroll(e, '#services')}
              className="group relative px-8 py-5 bg-white text-black font-bold uppercase tracking-[0.1em] text-sm overflow-hidden flex items-center justify-center gap-3 rounded-2xl shadow-xl w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-0 bg-black/10 transition-all duration-500 ease-out group-hover:w-full group-active:w-full" />
              <span className="relative">Explorar Servicios</span>
              <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
            </motion.a>

            {/* Transparent Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group relative px-8 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.1em] text-sm overflow-hidden flex items-center justify-center gap-3 rounded-2xl backdrop-blur-sm w-full sm:w-auto"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 bg-white/10 transition-all duration-300 ease-out rounded-2xl" />
              <span className="relative transition-colors duration-300">
                Agendar Consulta
              </span>
              <ChevronRight className="relative w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-40 overflow-hidden bg-transparent">
        {/* Parallax Background Text */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-0 text-[35vw] font-black font-display opacity-[0.03] whitespace-nowrap pointer-events-none tracking-tighter"
          style={{ x: backgroundX }}
        >
          MZ DEV MZ DEV MZ DEV
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] font-semibold text-white/50 mb-4"
          >
            Lo que hacemos
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-20"
          >
            Nuestros<br />Servicios
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                whileHover={{ y: -10, scale: 1.03, rotateX: 5, rotateY: -5 }}
                whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                style={{ transformPerspective: 1000 }}
                className="group relative bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 p-10 md:p-14 hover:border-white/20 active:border-white/20 hover:bg-[#111] active:bg-[#111] transition-all duration-500 overflow-hidden rounded-3xl"
              >
                {/* Top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 ease-out" />
                
                <div className="flex justify-between items-start mb-16">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-active:bg-white/10 group-hover:scale-110 group-active:scale-110 transition-all duration-500 ease-out">
                    <service.icon className="w-8 h-8 text-white/50 group-hover:text-white group-active:text-white group-hover:-rotate-12 group-active:-rotate-12 transition-all duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono text-white/20 group-hover:text-white/40 group-active:text-white/40 transition-colors">0{index + 1}</span>
                </div>
                
                <h4 className="text-2xl font-bold font-display uppercase tracking-tight mb-4 group-hover:text-white group-active:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/50 leading-relaxed font-medium group-hover:text-white/70 group-active:text-white/70 transition-colors">
                  {service.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 translate-x-8 translate-y-8 blur-2xl group-hover:bg-white/20 group-active:bg-white/20 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 relative bg-transparent z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-[0.3em] font-semibold text-white/50 mb-8"
              >
                Nuestra Filosofía
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight leading-[1.1] mb-8"
              >
                Diseño radical.<br />
                Ingeniería<br />
                Impecable.
              </motion.h3>
              <div className="space-y-6 text-white/60 font-medium leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  En MZ Development no usamos plantillas ni tomamos atajos. Construimos cada píxel y cada línea de código con intención, priorizando el rendimiento bruto y la estética impactante.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Ubicados en Villa Clara, Cuba, demostramos que el talento local puede competir en el escenario global entregando productos digitales de clase mundial.
                </motion.p>
              </div>
            </motion.div>
            
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center group"
              >
                 {/* Decorative background circle */}
                 <div className="absolute inset-0 bg-white/[0.02] rounded-full scale-110 blur-3xl group-hover:bg-white/[0.05] transition-colors duration-1000" />
                 
                 <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 p-2">
                    {/* Image Grid / Bento */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="col-span-1 row-span-2 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 group/img"
                    >
                      <img 
                        src="/audir8.png" 
                        alt="Precision Motor Project"
                        className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-active/img:grayscale-0 transition-all duration-700 scale-110 group-hover/img:scale-100 group-active/img:scale-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/0 group-active/img:bg-black/0 transition-colors" />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="col-span-1 row-span-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 group/img"
                    >
                      <img 
                        src="/restaurant.png" 
                        alt="Trattoria Project"
                        className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-active/img:grayscale-0 transition-all duration-700 scale-110 group-hover/img:scale-100 group-active/img:scale-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/0 group-active/img:bg-black/0 transition-colors" />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="col-span-1 row-span-1 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 group/img"
                    >
                      <img 
                        src="/clinica.png" 
                        alt="Sonrisa Local Project"
                        className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-active/img:grayscale-0 transition-all duration-700 scale-110 group-hover/img:scale-100 group-active/img:scale-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/0 group-active/img:bg-black/0 transition-colors" />
                      
                    </motion.div>
                 </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 relative z-10 flex items-center justify-center overflow-hidden min-h-[80vh]">
        {/* Radical Gradient Background for Contact */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]" />
        
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 max-w-4xl w-full mx-6 bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 p-12 md:p-24 text-center overflow-hidden shadow-2xl rounded-[3rem]"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.1)_360deg)] opacity-30 pointer-events-none" 
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
          >
             <WhatsAppIcon className="w-16 h-16 mx-auto mb-10 text-white/50" />
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-black font-display uppercase tracking-[-0.04em] mb-8 leading-[0.9]">
            ¿Listo para el<br />Siguiente Nivel?
          </h2>
          
          <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto font-medium">
            Comencemos a dar forma a tu próxima gran idea. Háblanos de tu proyecto y descubramos cómo podemos ayudarte.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5359634496"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 px-10 py-6 bg-white text-black font-black uppercase tracking-widest text-sm transition-all duration-300 rounded-3xl mx-auto"
          >
            <span>Escribir por WhatsApp</span>
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden relative">
              <WhatsAppIcon className="w-5 h-5 text-white absolute transition-all duration-300 group-hover:rotate-12 scale-90 group-hover:scale-110" />
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 py-10 border-t border-white/10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/30">
          © {new Date().getFullYear()} MZ Development. Villa Clara, Cuba.
        </p>
      </motion.footer>
    </div>
  );
}
