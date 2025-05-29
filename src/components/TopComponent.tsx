"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TopComponent() {
  return (
    <div className="w-full md:min-h-[560px] bg-[#0836CF] dark:bg-[#052466] text-gray-200 dark:text-gray-300 relative overflow-hidden">
      {/*Bottom-left background image */}
      <Image
        src="/bottom-left.webp"
        alt="Bottom Left Decoration"
        width={400}
        height={400}
        className="absolute bottom-0 left-0 z-10 rotate-180 pointer-events-none animate-pulse"
      />

      {/*Top-right background image */}
      <Image
        src="/top-right.webp"
        alt="Top Right Decoration"
        width={400}
        height={400}
        className="absolute top-0 right-0 z-10 pointer-events-none animate-pulse"
      />

      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 border-b-2 border-gray-500">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={300}
            height={300}
            className="rounded"
          />
        </div>

        {/* Right side: Theme toggle and Get Started button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* <Button
            // onClick={() => alert("Get Started clicked!")}
            // onClick={() => router.push("/free-career-form")}
            className="bg-white text-md text-gray-600 hover:bg-gray-100 flex items-center space-x-2 rounded-full p-1 px-4"
          >
            <span className="">Get Started</span>

            <ChevronRight className="w-5 h-5 " />
          </Button> */}
          <Button
            onClick={() => {
              const el = document.getElementById("free-career-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-md text-gray-600 hover:bg-gray-100 flex items-center space-x-2 rounded-full p-1 px-4"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
      {/* Bottom section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Text and buttons */}
        <div className="flex-1 text-left space-y-6">
          <h2
            className="text-sm font-extrabold text-gray-100 px-6 py-3 border-2 border-gray rounded-full inline-block
             animate-pulse select-none cursor-default  bg-[#0836CF] "
          >
            🔥 99.99% GUARANTEED to Reach the Top 1%
          </h2>

          <h1 className="text-5xl font-bold text-white dark:text-gray-300 leading-relaxed">
            Get your Six-Figure job back in{" "}
            <span className="relative inline-block text-[#E8B006] font-bold">
              8-16 Weeks
              <svg
                className="absolute left-0 w-full bottom-0"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q50 0, 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-[#E8B006]"
                />
              </svg>
            </span>
            with our proven techniques.
          </h1>

          <p className="text-sm text-gray-300">
            Get access actively hiring 20+ premium recruiters today surrounding
            your location.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => alert("Book Free Consultation clicked!")}
              className="bg-[#E8B006] rounded-full text-gray-700 px-10 py-3"
            >
              <span>Book Free Consultation</span>

              <ChevronRight className="w-5 h-5 " />
            </Button>
            <Button
              onClick={() => alert("Join Next Webinar clicked!")}
              className="bg-[#1840D2] text-white hover:bg-blue-700 rounded-full px-8 py-3 "
            >
              <span>Join Next Webinar</span>

              <ChevronRight className="w-5 h-5 " />
            </Button>
          </div>
        </div>

        {/* Right side: Vimeo video */}
        <div className="flex-1 w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            // src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3"
            src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&transparent=1&background=0"
            title="Promotional Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </section>
    </div>
  );
}
