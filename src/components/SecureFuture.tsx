import { ChevronRight } from "lucide-react";
import React from "react";

function SecureFuture() {
  return (
    <section
      className="relative left-0 right-0 bg-[#0836CF] dark:bg-[#052466] text-white py-16 mt-12 mb-12 mx-20 rounded-md shadow-lg animate-backgroundPulse"
      style={{
        backgroundImage: "url('/down-left.webp'), url('/down-right.webp')",
        backgroundPosition: "-120px , calc(100% + 120px)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "300px auto, 300px auto",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="">
          <div className="text-5xl">
            <h3 className="font-bold mb-4">Secure Your $100K+ Future Today!</h3>
          </div>
          <p className="mb-6 text-center mx-auto">
            Spots are filling FAST! Join our next hiring wave and start your
            journey to a high-
            <br /> paying tech career.
          </p>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            {/* <button className="flex gap-2 bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition">
              Book a Free 15-Min Call
              <ChevronRight className="w-5 h-5 mt-1" />
            </button> */}
            <a
              href="#free-career-form"
              className="flex gap-2 bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition items-center justify-center"
            >
              Book a Free 15-Min Call
              <ChevronRight className="w-5 h-5 mt-1" />
            </a>
            <button className="flex gap-2 bg-blue-500 text-white font-semibold rounded-full px-5 py-2 hover:bg-blue-600 transition">
              Join Next Webinar
              <ChevronRight className="w-5 h-5 mt-1" />
            </button>
          </div>
          <div className="hidden md:block text-center font-semibold text-md mt-10">
            HighPaidJobs.us - The Fastest Path to a $100K+ Career!
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureFuture;
