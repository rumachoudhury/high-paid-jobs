"use client";
import {
  BadgeCheck,
  UserCog,
  Mic,
  Handshake,
  DollarSign,
  RotateCcw,
  Check,
  X,
  ChevronRight,
} from "lucide-react";

const icons = [BadgeCheck, UserCog, Mic, Handshake, DollarSign, RotateCcw];

export default function WhyChooseUs() {
  const cardData = [
    {
      title: "Guaranteed Job Placement",
      description:
        "We guarantee you'll get hired or we keep working with you for free.",
      badge: "99.99% success rate within 8-16 weeks",
    },
    {
      title: "Hyper Personalized Coaching",
      description: "One-on-one instruction tailored to your learning style.",
      badge: "Dedicated mentor throughout your journey",
    },
    {
      title: "Interview Support",
      description: "Expert guidance during the entire interview process.",
      badge: "We join your interviews to help you succeed",
    },
    {
      title: "Post-Hire Support",
      description: "Continued assistance after you land your job.",
      badge: "Full support during probation period to help your job sustain",
    },
    {
      title: "Decided Salary Renegotiation",
      description: "Expert techniques to maximize your compensation.",
      badge: "Average $5-10k increase in offers",
    },
    {
      title: "100% Money-Back Guarantee",
      description: "15 day money back guarantee, a risk-free investment!",
      badge: "15-day unconditional guarantee",
    },
  ];

  return (
    <section className="mx-auto px-4 py-10 md:py-20 bg-[#F5F5F5] dark:bg-[#212121] transition-colors duration-300">
      <div className="mx-auto text-center">
        <h1 className="max-w-[739px] dark:text-white mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-4">
          Why Choose Us Over Others?
        </h1>
        <p className="text-[#5C5958] max-w-[600px] mx-auto dark:text-gray-300 text-base md:text-lg mb-8">
          See how our program delivers results where others fall short.
        </p>

        <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
          {cardData.map((card, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#303031]  rounded-lg p-6 shadow flex flex-col justify-between text-start"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-black dark:text-white  mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5C5958] dark:text-gray-300">
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-center gap-2 mt-auto mb-2">
                  <div className="bg-[#F5F5F5] dark:bg-[#212122] flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
                    <p className="text-black dark:text-white font-semibold text-sm">
                      HighPaidJobs
                    </p>
                    <Check className="bg-blue-500 dark:bg-[#042465] w-6 h-6 mx-auto text-white rounded-full mt-1" />
                  </div>
                  <div className="bg-[#F5F5F5] dark:bg-[#212122] flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
                    <p className="text-black dark:text-white font-semibold text-sm">
                      Others
                    </p>
                    <X className="bg-red-500 dark:bg-[#FF0000] w-6 h-6 mx-auto text-white rounded-full mt-1" />
                  </div>
                </div>

                <div className="bg-[#E8EDFC] dark:bg-[#5B5958] text-start font-semibold text-primary text-xs p-2 rounded mt-2">
                  {card.badge}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <div className="text-black dark:text-white text-lg md:text-xl font-semibold">
            <h3>Ready to experience the HighPaidJobs difference?</h3>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("free-career-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] dark:bg-[#2D4EFF] rounded-full hover:bg-[#062abf] dark:hover:bg-[#1c3dce] transition"
          >
            <span>Book Free Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
