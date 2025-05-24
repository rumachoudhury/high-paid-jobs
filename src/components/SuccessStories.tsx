"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { Button } from "./ui/button";

const stories = [
  {
    nameInitial: "A",
    name: "Alex P.",
    company: "Hired @ Fortune 100 - $108K",
    message: "I got two offers within 3 months!",
    video: "https://player.vimeo.com/video/1065693603?h=0c54fe674c",
    // rating: true,
    rating: "/star.png",
  },
  {
    nameInitial: "M",
    name: "Maria S.",
    company: "Hired @ FAANG - $130K",
    message: "They helped me to get extra $8k!",
    video: "https://player.vimeo.com/video/1065693522?h=9d231d3e62",
    // rating: true,
    rating: "/star.png",
  },
  {
    nameInitial: "J",
    name: "Jamal R.",
    company: "Hired @ Federal Job - $115K",
    message:
      "The interview prep was incredible, and they even helped me get the permanent offer!",
    video: "https://player.vimeo.com/video/1065693295?h=00366a3997",
    // rating: true,
    rating: "/star.png",
  },
  {
    nameInitial: "S",
    name: "Sarah M.",
    company: "Hired @ Tech Startup - $120K",
    message:
      "They gave me access to the 500+ active recruiters hungry for talents!",
    video: "https://player.vimeo.com/video/1065693202?h=b6bd98f94e",
    // rating: true,
    rating: "/star.png",
  },
];

export default function SuccessStories() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="px-4 py-10 bg-[#0F172A]">
      {/* Header */}
      <div className="text-center mb-10 text-white">
        {/* <h2 className="text-sm font-semibold tracking-wide text-gray-400">
          REAL STORIES
        </h2> */}
        <input
          type="text"
          value="REAL STORIES"
          readOnly
          //   className="text-sm font-semibold tracking-wide text-gray-400 bg-[#161F32] p-2 rounded-full text-center px-4 mx-auto"
          className="text-sm font-semibold tracking-wide text-gray-300  bg-[#1e293b] px-2 py-2 rounded-full text-center mx-auto w-[14ch] shadow-lg "
        />
        <h1 className="text-3xl font-bold mt-1">Success Stories</h1>
        <p className="text-gray-400 mt-2">
          Hear from people who transformed their careers with our program
        </p>
        <p className="text-sm font-semibold text-red-500 flex items-center justify-center gap-2 mt-3 bg-[#1e293b] px-3 py-2 rounded-full mx-auto w-[19ch] shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
          </span>
          LIVE TESTIMONIAL
        </p>
      </div>

      {/* Mobile Swiper */}
      {isMobile ? (
        <div className="w-full max-w-md mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <Card className="rounded-2xl shadow-lg bg-[#161F32]  border border-gray-700">
                  <CardContent className="p-4">
                    <div className="aspect-video w-full mb-3 rounded-lg overflow-hidden">
                      <iframe
                        src={story.video}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>

                    <div className="flex gap-2 items-center space-x-2">
                      <div className="text-sm font-bold text-white bg-[#12B981] rounded-full w-10 h-10 flex items-center justify-center mb-2">
                        {story.nameInitial}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-md font-bold text-white">
                          {story.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">
                          {story.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-1 mt-4">
                      {story.message}
                    </p>

                    <div className="flex gap-1 mt-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src={story.rating}
                          alt="star"
                          width={100}
                          height={20}
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Desktop Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-lg bg-[#161F32] border border-gray-700"
            >
              <CardContent className="p-4">
                <div className="aspect-video w-full mb-3 rounded-lg overflow-hidden">
                  <iframe
                    src={story.video}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
                <div className="flex gap-2 items-center space-x-2">
                  <div className="text-sm font-bold text-white bg-[#12B981] rounded-full w-10 h-10 flex items-center justify-center mb-2">
                    {story.nameInitial}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-md font-bold text-white">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      {story.company}
                    </p>
                  </div>
                </div>
                {/* <p className="text-sm text-gray-500 mb-1">{story.company}</p> */}
                <p className="text-lg text-white mb-1 mt-4">{story.message}</p>

                <div className="flex gap-1 mt-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={story.rating}
                      alt="star"
                      width={100}
                      height={20}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {/* Button */}
      <Button className=" flex text-center items-center justify-center space-x-2  p-2 px-6 bg-[#FACC14] rounded-full  transition mt-10 mx-auto">
        Book Free Consultation
      </Button>
    </section>
  );
}
