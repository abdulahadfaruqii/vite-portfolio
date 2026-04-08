import React from "react";

function ExperienceCard() {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 w-140 flex gap-4 items-center">
      {/* Icon/Image */}
      <img
        src="/frontend.png"
        alt="Frontend Icon"
        className="w-12 h-12 shrink-0 rounded-md"
      />

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-2xl font-semibold text-left">
          Frontend Engineer Intern
        </h2>
        <p className="text-white text-lg wrap-break-word whitespace-normal text-left">
          Assisted in the development of a web-based platform using React.js,
          enhancing interactivity.
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
