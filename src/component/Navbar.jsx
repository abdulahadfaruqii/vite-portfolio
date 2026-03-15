import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#about");
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (id) =>
    `relative px-3 py-1 text-white transition-all duration-300
     after:absolute after:left-0 after:-bottom-2 after:h-[2px]
     after:bg-sky-400 after:rounded-full
     after:transition-all after:duration-300
     ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const sidebarLinkClass = (id) =>
    `transition-colors duration-300 py-2 ${active === id ? 'text-sky-400' : 'text-white hover:text-sky-400'}`;

  return (
    <>
      <nav className="bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex gap-10 hidden sm:flex">
          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={linkClass("#about")}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setActive("#projects")}
            className={linkClass("#projects")}
          >
            Project
          </a>

          <a
            href="#testimonial"
            onClick={() => setActive("#testimonial")}
            className={linkClass("#testimonial")}
          >
            Testimonials
          </a>

          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={linkClass("#contact")}
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-md border-l border-white/10 shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white mb-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a
            href="#about"
            onClick={() => { setActive("#about"); setIsOpen(false); }}
            className={sidebarLinkClass("#about")}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => { setActive("#projects"); setIsOpen(false); }}
            className={sidebarLinkClass("#projects")}
          >
            Project
          </a>

          <a
            href="#testimonial"
            onClick={() => { setActive("#testimonial"); setIsOpen(false); }}
            className={sidebarLinkClass("#testimonial")}
          >
            Testimonials
          </a>

          <a
            href="#contact"
            onClick={() => { setActive("#contact"); setIsOpen(false); }}
            className={sidebarLinkClass("#contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
