import React from "react";

function ReviewCard({ message }) {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl px-3 py-3 flex flex-col gap-3 max-w-160 flex-none">
      <h3 className="text-white text-left  whitespace-normal">{message}</h3>

      <div className="flex items-start gap-2 min-w-0">
        <img
          src="/laptop.png"
          alt=""
          className="border rounded-full w-10 h-10 "
        />

        <div className="min-w-0">
          <h3 className="text-white text-left text-sm wrap-break-word whitespace-normal">
            tahaa faruqii
          </h3>

          <h6 className="text-white text-left text-xs wrap-break-word whitespace-normal">
            Director of AlphaStream Technologies
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
