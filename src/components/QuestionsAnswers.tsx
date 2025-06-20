"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function QuestionsAnswers() {
  return (
    <section className=" w-full  mx-auto px-6 py-10 text-center bg-[#F4F5F5] dark:bg-[#202120]">
      <div className="mb-8">
        <h2 className="text-5xl font-bold mb-2">
          Got Questions? We&#39;ve Got Answers
        </h2>
        <p
          //   className="text-muted-foreground mb-8"
          className="text-black dark:text-gray-400 "
        >
          Find answers to our most frequently asked questions
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="text-left mx-auto max-w-7xl"
      >
        <AccordionItem
          value="item-1"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>How fast can I get a job?</AccordionTrigger>
          <AccordionContent>
            Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of
            training + 4-6 weeks to an offer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>What if I don&#39;t get hired?</AccordionTrigger>
          <AccordionContent>
            We offer ongoing support and resources until you secure employment.
            Our program includes career coaching and job placement assistance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>Can I work remotely?</AccordionTrigger>
          <AccordionContent>
            Yes, many of our graduates secure remote positions. We prepare you
            for both remote and in-office opportunities based on your
            preferences.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>Who is this program for?</AccordionTrigger>
          <AccordionContent>
            Our program is designed for motivated individuals looking to start
            or advance their career in technology, regardless of prior
            experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>Do I need prior experience?</AccordionTrigger>
          <AccordionContent>
            No prior experience is required. Our curriculum is designed to take
            you from beginner to job-ready, with personalized support along the
            way.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className=" border-0 dark:border dark:border-gray-600 shadow-md px-4 bg-[#FFFFFF] dark:bg-[#020711] rounded-lg mb-4 py-1"
        >
          <AccordionTrigger>
            What companies hire your graduates?
          </AccordionTrigger>
          <AccordionContent>
            Our graduates have been hired by a wide range of companies, from
            startups to Fortune 500 corporations across various industries.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10">
        <p className="text-sm text-black dark:text-white font-medium mb-4">
          Have more questions? Ask us during your FREE consultation!
        </p>
        <div className="flex items-center justify-center mt-4">
          <Button
            onClick={() => {
              const el = document.getElementById("free-career-form");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] rounded-full hover:bg-[#062abf] transition"
          >
            <span>Book Free Consultation</span>

            <ChevronRight className="w-5 h-5 " />
          </Button>
        </div>
      </div>
    </section>
  );
}
