import React from "react";
import ApproachCard from "../component/ApproachCard";

function MyApproach() {
  return (
    <section className="py-10 md:py-20 pt-20 md:pt-40 px-4 md:px-6">
      <h2 className="text-white mt-3 text-5xl font-bold">
        My <span className="text-secondary">approach </span>
      </h2>
      <div className="flex gap-8 justify-center mt-20">
        <ApproachCard phase="1" />

        <ApproachCard
          phase="2"
          title="Development & Progress Update"
          description="Once we agree on the plan, I cue my lo-fi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          active
        />

        <ApproachCard phase="3" />
      </div>
    </section>
  );
}

export default MyApproach;
