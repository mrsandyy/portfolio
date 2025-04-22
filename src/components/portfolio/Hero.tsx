
import React from "react";
import { Linkedin, Github, FileText, Database, Server, Cpu, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const coreSkills = [
  { label: "Node.js", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
  { label: "TypeScript", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "SQL / MongoDB", icon: <Database className="h-5 w-5 text-portfolio-700" /> },
  { label: "API Design", icon: <Cpu className="h-5 w-5 text-portfolio-700" /> },
  { label: "Testing (Jest)", icon: <Terminal className="h-5 w-5 text-portfolio-700" /> },
  { label: "Cloud/Deploy", icon: <Server className="h-5 w-5 text-portfolio-700" /> },
];

const highlights = [
  { label: "Experience", value: "5+ yrs", desc: "Professional Engineering" },
  { label: "Systems Built", value: "30+", desc: "Production Projects" },
  { label: "Team Projects", value: "10+", desc: "Collaborative Dev" },
  { label: "Stack", value: "Node, TS, SQL", desc: "Modern Technologies" },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-portfolio-50 to-white relative overflow-hidden">
      <div className="container flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-between relative z-10">
        {/* Left content - Copy */}
        <div className="flex-1 flex flex-col items-center md:items-start max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 flex items-center gap-3"
          >
            <span className="block px-3 py-1 rounded-lg font-bold text-white bg-portfolio-700 shadow text-sm tracking-wide">Back-End Engineer</span>
            <span className="block px-3 py-1 rounded-lg bg-portfolio-200 text-portfolio-700 font-semibold">Available Now</span>
          </motion.div>
          
          <motion.h1 
            className="font-bold text-4xl sm:text-5xl text-portfolio-800 mb-4 text-center md:text-left leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert
            <span className="text-gradient bg-gradient-to-r from-portfolio-700 via-blue-500 to-purple-500 bg-clip-text text-transparent block md:ml-3 md:inline-block">
              Backend Engineering
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-portfolio-600 mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Scaling systems and building resilient APIs that power modern applications
          </motion.p>
          
          <motion.div 
            className="flex gap-3 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://linkedin.com/in/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
              aria-label="View LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-portfolio-700" />
            </a>
            <a 
              href="https://github.com/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-portfolio-100 hover:bg-portfolio-200 p-2 rounded-full transition-colors"
              aria-label="View GitHub"
            >
              <Github className="h-6 w-6 text-portfolio-700" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button size="sm" variant="outline" className="border-portfolio-600 text-portfolio-700 hover:bg-portfolio-50 font-semibold group-hover:shadow-md transition-all">
                <FileText className="h-4 w-4 mr-2" /> Resume
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-3 mt-5 mb-8 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
          >
            {coreSkills.map((skill, index) => (
              <motion.span 
                key={skill.label} 
                className="flex items-center gap-2 bg-portfolio-200/80 text-portfolio-900 px-3 py-1 rounded-lg font-semibold shadow-sm text-sm hover:bg-portfolio-300 hover:-translate-y-1 border border-portfolio-100 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon} {skill.label}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-portfolio-700 hover:bg-portfolio-800 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                const el = document.querySelector("#projects");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: "smooth",
                  });
                }
              }}
            >
              See Case Studies
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-portfolio-700 text-portfolio-700 hover:bg-portfolio-100 font-semibold hover:shadow-md transition-all"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) {
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 90,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
        
        {/* Right content - Stats & Visual */}
        <div className="flex-1 flex flex-col items-center">
          <motion.div 
            className="relative mb-10 md:mb-0 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Modern code visual instead of simple image */}
            <div className="hidden md:block relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-portfolio-800 to-portfolio-600 p-0.5">
              <div className="bg-portfolio-900/90 rounded-xl p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="ml-2 text-xs text-portfolio-300 font-mono">server.js</span>
                </div>
                
                <pre className="text-sm font-mono">
                  <code className="text-portfolio-200">
                    <span className="text-blue-300">const</span> <span className="text-green-300">express</span> = <span className="text-yellow-300">require</span>(<span className="text-orange-300">'express'</span>);{'\n'}
                    <span className="text-blue-300">const</span> <span className="text-green-300">app</span> = <span className="text-green-300">express</span>();{'\n'}
                    {'\n'}
                    <span className="text-green-400">// Authentication middleware</span>{'\n'}
                    <span className="text-blue-300">const</span> <span className="text-green-300">authenticate</span> = <span className="text-purple-300">(req, res, next)</span> {'=>'} {'{'}{'{'}{'\n'}
                    {'  '}<span className="text-purple-300">try</span> {'{{'}{'\n'}
                    {'    '}<span className="text-blue-300">const</span> <span className="text-green-300">token</span> = <span className="text-green-300">req</span>.<span className="text-green-300">headers</span>.<span className="text-green-300">authorization</span>;{'\n'}
                    {'    '}<span className="text-yellow-300">if</span> (!<span className="text-green-300">token</span>) <span className="text-yellow-300">return</span> <span className="text-green-300">res</span>.<span className="text-green-300">status</span>(<span className="text-orange-300">401</span>).<span className="text-green-300">json</span>({'{'} <span className="text-orange-300">error</span>: <span className="text-orange-300">'Unauthorized'</span> {'}'});{'\n'}
                    {'    '}<span className="text-green-300">next</span>();{'\n'}
                    {'  '}{'}}'}{'}'} <span className="text-purple-300">catch</span> (<span className="text-green-300">error</span>) {'{{'}{'\n'}
                    {'    '}<span className="text-green-300">res</span>.<span className="text-green-300">status</span>(<span className="text-orange-300">500</span>).<span className="text-green-300">json</span>({'{'} <span className="text-orange-300">error</span>: <span className="text-green-300">error</span>.<span className="text-green-300">message</span> {'}'});{'\n'}
                    {'  '}{'}}'}{'\n'}
                    {'}};'}{'\n'}
                    {'\n'}
                    <span className="text-green-400">// API endpoints</span>{'\n'}
                    <span className="text-green-300">app</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">'/api/data'</span>, <span className="text-green-300">authenticate</span>, <span className="text-purple-300">async</span> (<span className="text-green-300">req</span>, <span className="text-green-300">res</span>) {'=>'} {'{{'}{'\n'}
                    {'  '}<span className="text-purple-300">try</span> {'{{'}{'\n'}
                    {'    '}<span className="text-blue-300">const</span> <span className="text-green-300">result</span> = <span className="text-purple-300">await</span> <span className="text-green-300">db</span>.<span className="text-yellow-300">query</span>(<span className="text-orange-300">'SELECT * FROM items'</span>);{'\n'}
                    {'    '}<span className="text-green-300">res</span>.<span className="text-green-300">json</span>(<span className="text-green-300">result</span>);{'\n'}
                    {'  '}{'}}'}{'}'} <span className="text-purple-300">catch</span> (<span className="text-green-300">error</span>) {'{{'}{'\n'}
                    {'    '}<span className="text-green-300">res</span>.<span className="text-green-300">status</span>(<span className="text-orange-300">500</span>).<span className="text-green-300">json</span>({'{'} <span className="text-orange-300">error</span>: <span className="text-green-300">error</span>.<span className="text-green-300">message</span> {'}'});{'\n'}
                    {'  '}{'}}'}{'\n'}
                    {'}});'}{'\n'}
                    {'\n'}
                    <span className="text-green-300">app</span>.<span className="text-yellow-300">listen</span>(<span className="text-orange-300">3000</span>, () {'=>'} {'{{'}{'\n'}
                    {'  '}<span className="text-green-300">console</span>.<span className="text-yellow-300">log</span>(<span className="text-orange-300">'Server running on port 3000'</span>);{'\n'}
                    {'}});'}{'\n'}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
          >
            {highlights.map((h, idx) => (
              <motion.div 
                key={h.label} 
                className="flex flex-col items-center p-4 rounded-xl bg-white border-2 border-portfolio-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              >
                <span className="text-xs uppercase font-semibold text-portfolio-700 tracking-wide">{h.label}</span>
                <span className="text-3xl font-bold text-portfolio-800 leading-tight">{h.value}</span>
                <span className="text-xs text-portfolio-600 text-center">{h.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
}
