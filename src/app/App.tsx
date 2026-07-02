import { useState } from 'react';
import emailjs from '@emailjs/browser';
import profilePic from '../imports/Enrique_Web_dev_Pic.jpeg';
import { RicoChatbot } from './components/RicoChatbot';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const serviceId = 'service_ut08qrm';
      const templateId = 'template_gn95mem';
      const publicKey = 'truHxoWgQmZ2vz5id';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'chinyokaenrique@gmail.com',
          reply_to: formData.email
        },
        publicKey
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium">Enrique</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-primary transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-primary transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src={profilePic}
              alt="Enrique"
              className="w-48 h-48 mx-auto rounded-full object-cover border-[5px] border-[#00F0FF] mb-6 transition-transform duration-300 hover:scale-110 cursor-zoom-in animate-glow"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            Hi, I'm <span className="text-primary">Enrique</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            IT Specialist | Web Dev | Game Dev | App Dev
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about creating innovative solutions and bringing ideas to life through code.
            Specializing in modern web applications, interactive games, and user-friendly mobile apps.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I am Enrique, an aspiring developer with a growing skill set in web development,
                game development, app development, and programming. With a passion for technology
                and problem-solving, I enjoy creating solutions and learning new things every day.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey in tech started with a curiosity about how things work. Over the past year
                in IT, I've been building modern, user-friendly applications and continuously expanding
                my knowledge. I believe in writing clean code and staying current with new technologies.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, working on personal
                projects, or experimenting with game development ideas.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-2">Location</h3>
                <p className="text-muted-foreground">Remote / Global</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-2">Focus Areas</h3>
                <p className="text-muted-foreground">Full-Stack Development, Game Design, Mobile Apps</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-2">Currently</h3>
                <p className="text-muted-foreground">Open to new opportunities and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-3">Web Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HTML5, CSS3, JavaScript</li>
                <li>• React, TypeScript</li>
                <li>• Tailwind CSS, Responsive Design</li>
                <li>• RESTful APIs, GraphQL</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="mb-3">Game Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python / Pygame</li>
                <li>• Game Physics & Mechanics</li>
                <li>• 2D Graphics & Animation</li>
                <li>• Level Design & Game Logic</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3">App Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cross-platform Development</li>
                <li>• UI/UX Design Principles</li>
                <li>• Mobile-first Approach</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3">Programming</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python, Java</li>
                <li>• Object-Oriented Programming</li>
                <li>• Data Structures & Algorithms</li>
                <li>• Version Control (Git)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="mb-3">IT & Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• System Administration</li>
                <li>• Network Configuration</li>
                <li>• Troubleshooting & Support</li>
                <li>• Cloud Services</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3">Best Practices</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clean Code Principles</li>
                <li>• Testing & Debugging</li>
                <li>• Agile Methodology</li>
                <li>• Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">2D Adventure Game</h3>
                <p className="text-muted-foreground mb-4">
                  A platformer game built with Python and Pygame featuring custom physics,
                  enemy AI, and multiple levels with increasing difficulty.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Pygame</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Game Design</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>

            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Portfolio Website</h3>
                <p className="text-muted-foreground mb-4">
                  Modern, responsive portfolio website with smooth animations,
                  dark mode support, and optimized performance for all devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>

            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-chart-3/20 to-chart-4/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Task Manager App</h3>
                <p className="text-muted-foreground mb-4">
                  Mobile-friendly task management application with real-time updates,
                  drag-and-drop functionality, and data persistence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Local Storage</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">UI/UX</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>

            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-chart-5/20 to-primary/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-chart-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Data Visualization Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive dashboard displaying real-time data with charts,
                  graphs, and customizable widgets for data analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Charts</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">API</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>

            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-chart-2/20 to-chart-3/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Chat Application</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time messaging app with user authentication,
                  emoji support, and message history.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WebSocket</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Real-time</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>

            <a
              href="https://github.com/ENRIQUE2002-Chinyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer block"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <div className="h-48 bg-gradient-to-br from-chart-4/20 to-chart-5/20 flex items-center justify-center">
                <svg className="w-20 h-20 text-chart-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="mb-2">Algorithm Visualizer</h3>
                <p className="text-muted-foreground mb-4">
                  Educational tool for visualizing sorting and pathfinding algorithms
                  with step-by-step animations and explanations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Animation</span>
                </div>
                <span className="text-primary hover:underline">View Project →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-4 text-center">What Clients Say</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Here's what people I've worked with have to say about the experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "Enrique built our company's landing page from scratch and delivered it ahead of schedule. Clean code, great communication, and a real eye for design. Highly recommend!"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  TM
                </div>
                <div>
                  <div className="font-medium text-sm">Thabo Mokoena</div>
                  <div className="text-xs text-muted-foreground">Small Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "Working with Enrique on our app was a great experience. He asked the right questions, understood what we needed, and turned it around fast. Very talented for someone so early in their career."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  SN
                </div>
                <div>
                  <div className="font-medium text-sm">Sipho Ndlovu</div>
                  <div className="text-xs text-muted-foreground">Startup Founder</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "I hired Enrique to fix some bugs on my website and he went above and beyond — reorganised the layout and made it mobile-friendly too. Will definitely work with him again."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  AM
                </div>
                <div>
                  <div className="font-medium text-sm">Amira Mahlangu</div>
                  <div className="text-xs text-muted-foreground">Freelance Designer</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "Enrique helped me with a Python game prototype for a school project. Explained everything clearly, wrote really clean code, and was patient throughout. Super helpful!"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  KD
                </div>
                <div>
                  <div className="font-medium text-sm">Keanu Dlamini</div>
                  <div className="text-xs text-muted-foreground">Student</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
                <svg className="w-4 h-4 text-muted-foreground/30 fill-muted-foreground/30" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "Really solid work on the task manager app. Responsive, fast, and exactly what I asked for. Would've liked a bit more updates during development, but the final product is great."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  LB
                </div>
                <div>
                  <div className="font-medium text-sm">Lebo Baloyi</div>
                  <div className="text-xs text-muted-foreground">Project Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "Enrique set up our IT systems and network configuration quickly and without any hiccups. Very knowledgeable and professional. Will be using his services again for sure."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-medium text-primary">
                  NZ
                </div>
                <div>
                  <div className="font-medium text-sm">Nomsa Zulu</div>
                  <div className="text-xs text-muted-foreground">Office Manager</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:chinyokaenrique@gmail.com"
                  className="flex items-start space-x-4 cursor-pointer"
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      chinyokaenrique@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+27814244292"
                  className="flex items-start space-x-4 cursor-pointer"
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      +27 81 424 4292
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/enrique-chinyoka-339895274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 cursor-pointer"
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">LinkedIn</h3>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      linkedin.com/in/enrique-chinyoka
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/ENRIQUE2002-Chinyoka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 cursor-pointer"
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">GitHub</h3>
                    <span className="text-muted-foreground hover:text-primary transition-colors">
                      github.com/ENRIQUE2002-Chinyoka
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                    ✗ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Rico Chatbot */}
      <RicoChatbot />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2026 Enrique | All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/ENRIQUE2002-Chinyoka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}