import React from "react";

function NextLevel() {
  return (
    <section className="relative py-10 md:py-20 pt-20 md:pt-40 px-4 md:px-6">
      {/* Background Image */}
      <img
        src="/Container.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-white mt-2 text-5xl font-bold">
          Ready to take
          <span className="text-secondary"> your </span>
          digital <br /> presence to the next level?
        </h2>

        <p className="text-white mt-4 max-w-2xl">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <div className="flex justify-center mt-5">
          {/* Gradient border wrapper */}
          <div
            className="group rounded-full p-px transition-all duration-300"
            style={{
              background:
                "linear-gradient(92.44deg, rgba(105, 113, 162, 0.16) 21.16%, rgba(39, 42, 60, 0.37) 88.63%)",
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-3 rounded-2xl px-6 py-4 text-white
                 bg-slate-900/80 backdrop-blur-md shadow-2xl
                 transition-all duration-300
                 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.6)]
                cursor-pointer"
              style={{
                background:
                  "linear-gradient(103.4deg, #04071D 16.66%, #0C0E23 81.61%)",
              }}
            >
              <span>Contact Me Now</span>
              <img src="/Arrow.png" alt="arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextLevel;
