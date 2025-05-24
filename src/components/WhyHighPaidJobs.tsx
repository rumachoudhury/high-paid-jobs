import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

import Image from "next/image";

const features = [
  {
    image: "/placement.jpg",
    title: "99.99% Guaranteed Job Placement",
    description:
      "Land a $100k+ job in 8-16 weeks—or we keep working until you do.",
  },
  {
    image: "/ai.jpg",
    title: "AI & Recession-Proof Careers",
    description: "Future-ready roles that thrive no matter the economy.",
  },
  {
    image: "/interview.jpg",
    title: "Live Interview Assistance",
    description: "Our experts join your interviews to help you shine.",
  },
  {
    image: "/one-on-one.jpg",
    title: "One-on-One Mentoring",
    description: "Personalized guidance tailored to your goals.",
  },
  {
    image: "/salary.jpg .png",
    title: "Salary Negotiation Boost",
    description: "Secure an extra $5k-$10k on your offer—guaranteed.",
  },
  {
    image: "/support.jpg",
    title: "Probation Period Support",
    description: "We're with you for your first 3-6 months on the job.",
  },
];

export default function WhyHighPaidJobs() {
  return (
    <section className=" px-4 py-12 bg-[#F4F5F5] ">
      <h2 className="text-5xl font-bold text-center  mb-4">
        Why High Paid Jobs is Your Ticket
        <br /> to Success
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        We share our special tools and techniques, and coach you one-on-one from
        the beginning to the placement with higher raise.
      </p>

      <div className="grid gap-6 md:grid-cols-3  max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="shadow-2xl hover:shadow-3xl transition border-0 bg-white"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <button className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] rounded-full hover:bg-[#062abf] transition">
          <span>Book Free Consultation</span>
          {/* <span className="text-lg text-white">{">"}</span> */}
          <ChevronRight className="w-5 h-5 " />
        </button>
      </div>
    </section>
  );
}
