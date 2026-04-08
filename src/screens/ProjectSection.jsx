import React from "react";
import ProjectCard from "../component/ProjectCard";

function ProjectSection() {
  const data = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      description:
        "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      image: "/solarEarth.png",

      liveLink: "https://example.com",
      techStack: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
        { name: "TypeScript", icon: "/ts.png" },
        // { name: "Three.js", icon: "/threejs.png" },
      ],
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      description:
        "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      image: "/Card.png",
      liveLink: "https://example.com",
      techStack: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
      ],
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      description:
        "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      image: "/Imaginify.png",

      liveLink: "https://example.com",
      techStack: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
        { name: "TypeScript", icon: "/ts.png" },
        // { name: "Three.js", icon: "/threejs.png" },
      ],
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      description:
        "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
      image: "/titanium.png",

      liveLink: "https://example.com",
      techStack: [
        { name: "React", icon: "/react.png" },
        { name: "Tailwind", icon: "/tailwind.png" },
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-white mt-3 text-5xl font-bold">
        A small selection of{" "}
        <span className="text-secondary"> recent projects </span>
      </h2>
      <div className="mt-15 flex flex-wrap gap-8 justify-center">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
