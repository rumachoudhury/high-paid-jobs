"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Brain,
  Mic,
  UserCheck,
  DollarSign,
  Handshake,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: (
      <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
    ),
    title: "99.99% Guaranteed Job Placement",
    description:
      "Land a $100k+ job in 8-16 weeks—or we keep working until you do.",
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />,
    title: "AI & Recession-Proof Careers",
    description: "Future-ready roles that thrive no matter the economy.",
  },
  {
    icon: <Mic className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />,
    title: "Live Interview Assistance",
    description: "Our experts join your interviews to help you shine.",
  },
  {
    icon: (
      <UserCheck className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
    ),
    title: "One-on-One Mentoring",
    description: "Personalized guidance tailored to your goals.",
  },
  {
    icon: (
      <DollarSign className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
    ),
    title: "Salary Negotiation Boost",
    description: "Secure an extra $5k-$10k on your offer—guaranteed.",
  },
  {
    icon: (
      <Handshake className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
    ),
    title: "Probation Period Support",
    description: "We're with you for your first 3-6 months on the job.",
  },
];

export default function WhyHighPaidJobs() {
  return (
    <section className="px-4 py-12 bg-[#F4F5F5] dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Why High Paid Jobs is Your Ticket
        <br /> to Success
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        We share our special tools and techniques, and coach you one-on-one from
        the beginning to the placement with higher raise.
      </p>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-2xl hover:shadow-3xl transition border-0 bg-white dark:bg-gray-800"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
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
    </section>
  );
}
