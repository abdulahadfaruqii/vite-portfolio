import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const swiperOptions = {
  direction: "vertical",
  loop: true,
  speed: 3000,
  allowTouchMove: false,
  modules: [Autoplay, FreeMode],
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  slidesPerView: "auto",
};

function TechStackCard() {
  const column1 = [
    "HTML5",
    "CSS3",
    "JavaScript(ES6)",
    "ReactJS",
    "NextJS",
    "Redux Toolkit/Thunk",
    "Zustand",
    "React Query",
    "RTK Query",
    "Rest API Intrgration",
    "Tawilwind CSS",
    "Bootstrap",
    "Material UI",
    "Ant Design",
    "Shadcn UI",
    "Responsive Design",
  ];

  const column2 = [
    "GSAP",
    "Framer Motion",
    "Firebase",
    "Supabase",
    "Vue Js",
    "Vuetify",
    "Vuex",
    "React Native",
    "Nest Js",
    "Mongo DB",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Figma",
  ];

  const SkillCard = ({ name }) => (
    <div className="bg-[#111629] border border-white/5 rounded-xl p-6 mb-4 w-40 flex items-center justify-center shadow-xl">
      <h2 className="text-white font-medium whitespace-nowrap">{name}</h2>
    </div>
  );

  return (
    <div className="bg-slate-900/45 w-full rounded-xl mt-4 relative overflow-hidden pl-3 pr-2 flex items-center justify-end border border-white/10">
      <div className="z-10 absolute left-2 bg-transparent">
        <h2 className="text-white text-[14px] font-normal mb-1 text-left">
          I constantly try to improve
        </h2>

        <h1 className="text-white text-4xl! font-bold tracking-tighter whitespace-nowrap">
          My tech stack
        </h1>
      </div>
      <div className="flex gap-4 h-80 relative overflow-hidden mask-gradient">
        <Swiper {...swiperOptions} className="h-120">
          {column1.map((skill, i) => (
            <SwiperSlide key={i} className="h-auto!">
              <SkillCard name={skill} />
                
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          {...swiperOptions}
          autoplay={{
            reverseDirection: true,
          }}
          className="h-120"
        >
          {column2.map((skill, i) => (
            <SwiperSlide key={i} className="h-auto!">
              <SkillCard name={skill} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-slate-900/0 via-transparent to-slate-900/0"></div>
      </div>
    </div>
  );
}

export default React.memo(TechStackCard);
