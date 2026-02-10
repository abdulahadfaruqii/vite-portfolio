import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#about");

  const linkClass = (id) =>
    `relative px-3 py-1 text-white transition-all duration-300
     after:absolute after:left-0 after:-bottom-2 after:h-[2px]
     after:bg-sky-400 after:rounded-full
     after:transition-all after:duration-300
     ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-full px-4 sm:px-8 py-3 sm:py-4 flex gap-10">
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
    </nav>
  );
}
