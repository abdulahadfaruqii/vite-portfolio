import React from "react";
import ExperienceCard from "../component/ExperienceCard";

function WorkExperienceSection() {
  const data = [
    {
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    },
    {
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    },
    {
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    },
    {
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
    },
  ];
  return (
    <section className="py-10 md:py-20 pt-20 md:pt-40 px-4 md:px-6">
      <h2 className="text-white mt-2 text-5xl font-bold">
        My <span className="text-secondary">work experience</span>
      </h2>
      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {data.map((_, i) => (
          <ExperienceCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperienceSection;
