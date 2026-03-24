import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Layout, 
  Cpu,
  ChevronDown,
  ArrowRight,
  Sun,
  Moon
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Experience",
    description: "A high-performance shopping platform built with React and Tailwind CSS, focusing on micro-interactions and accessibility.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization tool for monitoring cloud infrastructure metrics with interactive D3.js charts.",
    image: "https://picsum.photos/seed/data/800/600",
    tags: ["TypeScript", "D3.js", "Next.js"],
    link: "#"
  },
  {
    title: "Creative Portfolio",
    description: "A minimalist showcase for a digital artist, featuring smooth page transitions and a custom cursor experience.",
    image: "https://picsum.photos/seed/art/800/600",
    tags: ["JavaScript", "GSAP", "CSS Grid"],
    link: "#"
  }
];

const skills = [
  { name: "Frontend", icon: <Layout className="w-5 h-5" />, items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
  { name: "Frameworks", icon: <Code2 className="w-5 h-5" />, items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { name: "Design", icon: <Palette className="w-5 h-5" />, items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"] },
  { name: "Tools", icon: <Cpu className="w-5 h-5" />, items: ["Git", "Vite", "Webpack", "npm/yarn"] }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight">DEV.PORTFOLIO</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Available for new opportunities
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            Building digital <br />
            <span className="text-muted">experiences</span> that matter.
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-10 leading-relaxed">
            I'm a Front-end Developer specializing in crafting clean, high-performance, and user-centric web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:opacity-90 transition-all"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-6 ml-4">
              <a href="#" className="text-muted hover:text-foreground transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-muted hover:text-foreground transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <ChevronDown className="w-6 h-6 text-muted animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/dev/800/800" 
                alt="Developer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-10" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I'm a passionate developer with over 4 years of experience in the digital space. I bridge the gap between design and technology, ensuring that every pixel serves a purpose.
              </p>
              <p>
                My approach is rooted in simplicity and performance. I believe that the best interfaces are the ones that disappear, allowing the user to focus on what truly matters.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-bold text-foreground text-3xl mb-1">15+</h4>
                  <p className="text-sm uppercase tracking-widest text-muted font-semibold">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-3xl mb-1">4</h4>
                  <p className="text-sm uppercase tracking-widest text-muted font-semibold">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted max-w-xl mx-auto">My toolkit for bringing ideas to life in the browser.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-xl mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-muted flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
              <p className="text-gray-400 max-w-md">A collection of projects that showcase my passion for design and code.</p>
            </div>
            <a href="#" className="text-white border-b border-white/30 pb-1 hover:border-white transition-all flex items-center gap-2">
              View all projects <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-gray-500 border border-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Let's build something <br /> amazing together.</h2>
          <p className="text-xl text-muted mb-12">
            Currently looking for new opportunities and interesting projects. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center gap-6">
            <a 
              href="mailto:hello@example.com" 
              className="text-2xl md:text-4xl font-medium border-b-2 border-foreground pb-2 hover:text-blue-600 hover:border-blue-600 transition-all"
            >
              hello@example.com
            </a>
            <div className="flex gap-8 mt-6">
              <a href="#" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center text-sm text-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 DevPortfolio. Built with React & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
