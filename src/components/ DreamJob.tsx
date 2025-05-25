"use client";
import { useState } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function DreamJob() {
  const [hoveredCard, setHoveredCard] = useState("");
  const [selected, setSelected] = useState("");

  const defaultContent = [
    "Everything in Job Assessment",
    "Access to 500+ active recruiters",
    "Complete support during interviews",
    "Sure job offer within 10 interviews",
    "Help renegotiate salary by $10k",
    "Complete support during probation period",
    "Lifetime access to materials",
    "Schedule Consultation",
  ];

  const jobAssessmentContent = [
    "30 to 120 min interview",
    "40 to 70 local recruiter access",
    "Provided recording with details report",
    "Salary negotiation blueprint",
    "Probation period hacks",
    "Help revamp the resume and tailoring for each job needs.",
  ];

  const getContent = () => {
    // const key = hovered || selected;
    const key = hoveredCard || selected;

    if (key === "assessment") return jobAssessmentContent;
    if (key === "placement" || key === "prep") return defaultContent;
    return defaultContent;
  };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-gray-50 mx-auto dark:bg-[#212121]">
      <h2 className="text-5xl font-bold text-center mb-2">
        Choose Your Path to Land Your Dream Job
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Select the career path that aligns with your goals and unlock your
        professional
        <br /> potential
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl items-start  ">
        {/* Left Cards */}
        <div className="space-y-6 w-full">
          {/* Job Assessment */}
          <div
            onMouseEnter={() => setHoveredCard("assessment")}
            onMouseLeave={() => setHoveredCard("")}
            onClick={() => setSelected("assessment")}
            className={`cursor-pointer flex items-start gap-4 p-4 rounded-2xl shadow-sm bg-white dark:bg-[#303030] transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              selected === "assessment" || hoveredCard === "assessment"
                ? "border-2 border-blue-300"
                : ""
            }`}
          >
            {/* <Briefcase className="w-8 h-8 text-blue-600" /> */}
            <Image
              src="/job-assessment.png"
              alt="Job Assessment"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">Job Assessment</h3>
              <p className="text-sm text-gray-600">
                Understand your skills and match with the best opportunities.
              </p>
            </div>
          </div>

          {/* Job Placement */}
          <div
            onMouseEnter={() => setHoveredCard("placement")}
            onMouseLeave={() => setHoveredCard("")}
            onClick={() => setSelected("placement")}
            className={`cursor-pointer flex items-start gap-4 p-4 rounded-2xl shadow-sm bg-white dark:bg-[#303030] transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              selected === "placement" || hoveredCard === "placement"
                ? "border-2 border-blue-500"
                : ""
            }`}
          >
            {/* <UserCheck className="w-8 h-8 text-green-600" /> */}
            <Image
              src="/job-placement.icon.png"
              alt="Job Assessment"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">Job Placement</h3>
              <p className="text-sm text-gray-600">
                Connect with recruiters and land interviews quickly.
              </p>
            </div>
          </div>

          {/* Job Prep */}
          <div
            onMouseEnter={() => setHoveredCard("prep")}
            onMouseLeave={() => setHoveredCard("")}
            onClick={() => setSelected("prep")}
            className={`cursor-pointer flex items-start gap-4 p-4 rounded-2xl shadow-sm bg-white dark:bg-[#303030] transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              selected === "prep" || hoveredCard === "prep"
                ? "border-2 border-blue-500"
                : ""
            }`}
          >
            {/* <FileText className="w-8 h-8 text-purple-600" /> */}
            <Image
              src="/job-prep.png"
              alt="Job Assessment"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">Job Prep</h3>
              <p className="text-sm text-gray-600">
                Master interviews and negotiate offers with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white dark:bg-[#303031] p-8 rounded-2xl shadow-md space-y-2 mx-auto w-[800px] border border-gray-500 dark:border-gray-300 min-h-[250px] transition-all duration-300 max-w-[750px]">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            {hoveredCard || selected
              ? hoveredCard === "assessment" || selected === "assessment"
                ? "Job Assessment Details"
                : hoveredCard === "placement" || selected === "placement"
                ? "Job Placement Benefits"
                : "Job Prep Benefits"
              : "Everything Included"}
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {getContent().map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="text-blue-500 dark:text-blue-900 w-5 h-5 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] rounded-lg hover:bg-[#062abf] transition mt-4">
              <span>
                {hoveredCard === "prep" || selected === "prep"
                  ? "Schedule Consultation"
                  : "Get Started"}
              </span>
              {/* {(hoveredCard === "prep" || selected === "prep") && (
                <ArrowRight className="w-5 h-5 text-white" />
              )} */}

              {hoveredCard === "prep" || selected === "prep" ? (
                <ArrowRight className="w-5 h-5 text-white" />
              ) : (
                <ChevronRight className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
