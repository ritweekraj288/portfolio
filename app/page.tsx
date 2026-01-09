"use client";

import { useRef, useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Send,
  Heart,
} from "lucide-react";

export default function Page() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.subject,
        }
      );

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error: any) {
      console.error("Email send error:", error.text || error.message || error);
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ritweekraj288", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ritweek-raj-313614323",
      label: "LinkedIn",
    },
    {
      icon: Code2,
      href: "https://leetcode.com/ritweekraj288",
      label: "LeetCode",
    },
  ];

  const projects = [
    {
      id: "1",
      title: "Mood Brewer",
      description:
        "An AI-powered recommendation system that suggests coffee and snacks based on a user’s mood, taste, and time of day.",
      image:
        "https://res.cloudinary.com/dm7yjlyls/image/upload/v1766672149/AI_image_detector_fujnle.jpg",
      tags: [
        "Nextjs",
        "FastAPI",
        "JSON Data Modeling",
      ],
      demoLink: "https://moodbrewer.vercel.app",
      sourceLink: "https://github.com/ritweekraj288/MoodBrewer.git",
    },
    {
      id: "2",
      title: "AI Image Detector",
      description:
        "An AI-powered web application that detects whether an image is real or AI-generated using deep learning.",
      image:
        "https://res.cloudinary.com/dm7yjlyls/image/upload/v1766672149/AI_image_detector_fujnle.jpg",
      tags: [
        "React",
        "FastAPI",
        "Vision Transformer (ViT)",
        "Computer Vision",
        "Deep Learning",
      ],
      demoLink: "https://ai-image-detectorreactfrontend.vercel.app",
      sourceLink: "https://github.com/ritweekraj288/AI_image_detector",
    },
    {
      id: "3",
      title: "Oceanic",
      description:
        "Oceanic is an interactive platform to explore ocean life through games, immersive media, and data-driven visualizations across ocean layers.",
      image:
        "https://res.cloudinary.com/dm7yjlyls/image/upload/v1766672162/Oceanic_cr02zz.jpg",
      tags: [
        "Next.js",
        "JavaScript",
        "HTML5 Canvas",
        "Game Development",
        "Interactive UI",
      ],
      demoLink: "https://oceanic-project.vercel.app",
      sourceLink: "https://github.com/NishchayMittal/WW-25_Bit_Forge",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5, CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive UI Development",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Node.js",
        "Express",
        "REST API Development",
        "MongoDB",
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        "PyTorch",
        "Vision Transformer (ViT)–based Image Classification",
        "Model Inference & Evaluation",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git, GitHub",
        "Kaggle, Jupyter Notebook",
        "Basic Deployment (Render)",
      ],
    },
  ];

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  const footerSocialLinks = [
    { icon: Github, href: "https://github.com/ritweekraj288", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ritweek-raj-313614323",
      label: "LinkedIn",
    },
    {
      icon: Code2,
      href: "https://leetcode.com/ritweekraj288",
      label: "LeetCode",
    },
    { icon: Mail, href: "mailto:ritweekraj288@gmail.com", label: "Email" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-blue-600 text-xl font-semibold">
                Portfolio
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block text-slate-700 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      scrollToContact();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p>Open to Internship Opportunities</p>
              </motion.div>

              <motion.h1
                className="mb-6 text-slate-900 text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-blue-600">Ritweek Raj</span>
              </motion.h1>

              <motion.p
                className="mb-8 text-slate-600 max-w-2xl mx-auto text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I am a bachelor’s student specializing in Artificial
                Intelligence. I have strong skills in developing modern websites
                and building machine learning models, with a keen interest in
                applying AI to real-world problems.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
                >
                  Get In Touch
                </button>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
                >
                  View Projects
                </a>
              </motion.div>

              <motion.div
                className="flex gap-6 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors border border-slate-200 shadow-sm group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-slate-900 text-4xl">
                Featured Projects
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                A collection of my recent work showcasing various technologies
                and problem-solving approaches
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden h-full flex flex-col border border-slate-200 rounded-xl hover:shadow-xl transition-shadow duration-300 group bg-white">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="mb-3 text-slate-900 text-xl">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-slate-900 text-4xl">
                Skills & Technologies
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                A comprehensive toolkit for building modern, scalable
                applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="mb-6 text-slate-900 pb-3 border-b-2 border-blue-600 text-xl">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="flex items-center text-slate-700"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          id="contact"
          className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-slate-900 text-4xl">Get In Touch</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                I'm currently open to internship opportunities. Feel free to
                reach out!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="p-6 border border-slate-200 bg-white rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-slate-900 text-lg">Email</h3>
                      <a
                        href="mailto:ritweekraj288@gmail.com"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        ritweekraj288@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-slate-200 bg-white rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-slate-900 text-lg">Location</h3>
                      <p className="text-slate-600">Surat, India</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-600 rounded-xl text-white">
                  <h3 className="mb-2 text-lg">Let's Work Together</h3>
                  <p className="text-blue-100">
                    I'm passionate about learning and contributing to innovative
                    projects. Let's connect and explore opportunities!
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="p-8 border border-slate-200 bg-white rounded-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-slate-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-slate-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@example.com"
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-slate-700"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="What's this about?"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      {submitStatus === "success" && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-green-600"
                        >
                          Message sent successfully!
                        </motion.p>
                      )}
                      {submitStatus === "error" && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-600"
                        >
                          Something went wrong. Please try again.
                        </motion.p>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="mb-4 text-lg">About</h3>
              <p className="text-slate-400">
                Passionate developer seeking internship opportunities to
                contribute to innovative projects and grow professionally.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#projects"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg">Connect</h3>
              <div className="flex gap-4">
                {footerSocialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ritweek Raj. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
