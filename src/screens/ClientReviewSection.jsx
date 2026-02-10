import React from "react";
import ReviewCard from "../component/ReviewCard";

function ClientReviewSection() {
  const data = [
    {
      message: `Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.`,
    },
    {
      message: `Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.`,
    },
    {
      message: `Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.`,
    },
  ];
  return (
    <section className="py-10 md:py-20 pt-20 md:pt-40 px-4 md:px-6">
      <h2 className="text-white mt-2  text-5xl font-bold">
        Kind words from{" "}
        <span className="text-secondary"> satisfied clients</span>
      </h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...data, ...data].map((item, index) => (
            <ReviewCard key={index} message={item.message} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviewSection;
