const ApproachCard = ({ phase, title, description, active }) => {
  return (
    <div
      className={`
        relative w-[340px] h-[460px] rounded-2xl p-8
        flex flex-col items-center justify-center text-center
        transition-all duration-300
        ${
          active
            ? "border border-white/20"
            : "border border-white/10 opacity-60"
        }
      `}
      style={{
        background: "linear-gradient(180deg, #020617 0%, #020617 100%)",
        boxShadow: active
          ? "inset 0 0 80px rgba(99,102,241,0.15)"
          : "inset 0 0 40px rgba(99,102,241,0.08)",
      }}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />

      {/* Phase badge */}
      <span className="mb-4 rounded-full border border-indigo-400/30 px-4 py-1 text-sm text-indigo-300 backdrop-blur-md">
        Phase {phase}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ApproachCard;
