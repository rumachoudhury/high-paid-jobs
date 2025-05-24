import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pick Your Plan",
    desc: "Choose from Placement, Assessment, Guidance, Technical Coaching, Quick Refine, and Placement options.",
  },
  {
    number: "02",
    title: "Your Career Assessment",
    desc: "Get one-on-one coaching and personalized assessment until you land a job in 8 to 12 weeks.",
  },
  {
    number: "03",
    title: "Access 500+ Active Recruiters",
    desc: "We'll review your resume, connect you with top recruiters, and prep you for interviews.",
  },
  {
    number: "04",
    title: "Ready Job Offer within 10 Interviews",
    desc: "Land multiple job offers within the first 10 interviews with support from 500+ recruiters.",
  },
  {
    number: "05",
    title: "Renegotiation for Extra $10k",
    desc: "We’ll help you renegotiate your final salary to get an extra $10k or more.",
  },
  {
    number: "06",
    title: "Support During Probation Period",
    desc: "Receive full support during your probation to ensure success in your new role.",
  },
];

const tracks = [
  "CloudOps/DevOps (AWS)",
  "Full-Stack Web/Mobile (MERN)",
  "Project/Product Management",
  "SQA Engineering",
  "Front-End Developer",
  "Back-End Developer",
  "Software Engineer",
  "AI Engineer",
  "More",
];

export default function HighPayingCareer() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Your Path to a High-Paying Career
          </h1>
          <p className="text-lg text-gray-600">
            Follow our proven step-by-step process to land your dream job
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Timeline */}
          <div className="flex-1 relative">
            {steps.map(({ number, title, desc }, index) => (
              <div key={number} className="relative pl-12">
                {/*  Number Circle */}
                <div
                  className="absolute left-0 top-0 w-8 h-8 rounded-full
        bg-[#E7EDFC] text-blue-500 flex items-center justify-center
        font-semibold z-10"
                >
                  {number}
                </div>

                {/*  Dashed Line: Only show for items except the last one */}
                {index !== steps.length - 1 && (
                  <div
                    className="absolute left-4 top-8 w-0.5 h-full
          border-l-2 border-dashed border-blue-300 z-0"
                  ></div>
                )}

                {/*  Step Text */}
                <div className="pt-6 pb-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Tracks Card */}
          <div className="max-w-md mx-auto bg-white border border-blue-300 rounded-xl shadow-sm h-[700px] flex flex-col overflow-hidden">
            {/* Header: full width, no padding */}
            <div className="bg-[#0636CE] w-full text-start py-3">
              <h3 className="text-white text-2xl font-bold m-0 ml-5">
                Job Prep Tracks
              </h3>
            </div>
            <ul className="space-y-8 ml-4 mt-6">
              {tracks.map((track) => (
                <li key={track} className="flex items-start gap-2">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-[#DCFCE7] text-green-600 text-sm font-bold border border-blue-500">
                    ✓
                  </div>
                  <span className="text-gray-800">{track}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold mt-6 text-center text-gray-600">
              All tracks include job placement with a 99.99% guarantee if you
              follow our techniques.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] rounded-full hover:bg-[#062abf] transition">
            <span>Book Free Consultation</span>
            {/* <span className="text-lg text-white">{">"}</span> */}
            <ChevronRight className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </section>
  );
}
