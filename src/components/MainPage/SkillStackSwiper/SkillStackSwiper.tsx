"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

import { SKILLS } from "../../../assets/skills";

function SkillStackSwiper() {
  const skills = SKILLS;
  return (
    <div className="mt-4">
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        mousewheel={false}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 20,
          stretch: 5,
          depth: 50,
          slideShadows: false,
          scale: 0.8,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Mousewheel, EffectCoverflow, Autoplay]}
        centeredSlides={true}
      >
        {skills.map((skill) => {
          return (
            <SwiperSlide key={skill.skillName}>
              <div className="flex flex-col rounded-3xl shadow-xl h-[250px] w-[250px] justify-center items-center bg-white">
                <div className="relative h-[130px] w-[130px] rounded-3xl mx-5 mt-5">
                  <Image
                    src={skill.logo}
                    fill
                    alt={skill.skillName}
                    priority
                    quality={60}
                    className="w-auto rounded-3xl object-contain"
                    sizes="130px"
                  />
                </div>
                <p className="pt-6 pb-3 font-semibold text-lg">
                  {skill.skillName}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SkillStackSwiper;
