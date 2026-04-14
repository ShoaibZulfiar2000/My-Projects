import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* 1. Navbar */}
      <nav className="fixed w-full h-20 flex justify-between items-center px-10 bg-[#0a192f]/90 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="text-2xl font-bold text-blue-400 font-mono tracking-tighter">
          &lt;Dev /&gt;
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-mono">
          <li className="hover:text-blue-400 cursor-pointer transition"><a href="#home">Home</a></li>
          <li className="hover:text-blue-400 cursor-pointer transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-blue-400 cursor-pointer transition"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-6xl mx-auto">
        <p className="text-blue-400 font-mono mb-4">Hy I Am</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">Muhammad Shoaib</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">Full Stack Developer.</h2>
        <p className="max-w-xl text-lg leading-relaxed mb-10">
          I specialize in building exceptional digital experiences. Currently, I’m focused on mastering 
          <span className="text-blue-400"> React </span> and <span className="text-blue-400">Laravel</span> 
          to create high-performance web applications.
        </p>
        <div>
          <a href="#projects" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded font-mono hover:bg-blue-400/10 transition">
            Check out my work!
          </a>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section className="py-24 px-6 md:px-24 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-200 mb-10 flex items-center">
          <span className="text-blue-400 font-mono mr-2">01.</span> My Tech Stack
          <div className="h-[1px] bg-slate-700 w-full ml-4"></div>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
          {['React', 'Laravel', 'PHP', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Git', 'Vite'].map((skill) => (
            <div key={skill} className="flex items-center space-x-2 border border-slate-800 p-4 rounded bg-[#112240] hover:-translate-y-1 transition duration-300">
              <span className="text-blue-400">▹</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-24 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-200 mb-10 flex items-center">
          <span className="text-blue-400 font-mono mr-2">02.</span> Projects
          <div className="h-[1px] bg-slate-700 w-full ml-4"></div>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="bg-[#112240] p-8 rounded-lg border border-transparent hover:border-blue-400/50 transition">
            <h4 className="text-blue-400 font-mono text-xs mb-2">Featured Project</h4>
            <h5 className="text-2xl font-bold text-slate-100 mb-4">E-Commerce Platform</h5>
            <p className="text-sm mb-6 text-slate-400">Building a robust online store using Laravel for the API and React for the dynamic frontend.</p>
            <div className="flex space-x-4 text-xs font-mono text-slate-400">
              <span>React</span> <span>Laravel</span> <span>MySQL</span>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-[#112240] p-8 rounded-lg border border-transparent hover:border-blue-400/50 transition">
            <h4 className="text-blue-400 font-mono text-xs mb-2">Featured Project</h4>
            <h5 className="text-2xl font-bold text-slate-100 mb-4">Task Management App</h5>
            <p className="text-sm mb-6 text-slate-400">A productivity tool to manage daily tasks with real-time updates and user authentication.</p>
            <div className="flex space-x-4 text-xs font-mono text-slate-400">
              <span>React</span> <span>Tailwind</span> <span>Firebase</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-32 px-6 text-center max-w-2xl mx-auto">
        <p className="text-blue-400 font-mono mb-4 text-sm">03. What's Next?</p>
        <h3 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h3>
        <p className="mb-10 text-slate-400">
          I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a href="mailto:muhammadshoaibprf1q4@gmail.com" className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded font-mono hover:bg-blue-400/10 transition">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs font-mono text-slate-500">
        Designed & Built by Muhammad Shoaib
      </footer>
    </div>
  );
}
