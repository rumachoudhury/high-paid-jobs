// "use client";

// import { ChevronRight } from "lucide-react";
// import React from "react";
// import CountdownTimer from "../app/freeCareer/pages";

// function FreeCareerAuditing() {
//   //   const targetDate = new Date("2025-12-31T23:59:59").getTime();
//   const targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; //it automatically always "10 days from now"

//   return (
//     <div className="bg-[#FFFFFF] dark:bg-[#202120] min-h-screen flex flex-col">
//       {/* Top Section */}
//       <section className="bg-[#FFFFFF] dark:bg-[#303031] text-center py-8 px-4">
//         <h1 className="text-3xl font-bold mb-2 dark:text-white">
//           Door Closes for FREE Career Auditing
//         </h1>
//         <CountdownTimer targetDate={targetDate} />
//       </section>

//       {/* Mid Section */}
//       <section className="bg-[#FEFFFF] dark:bg-[#2F3030] flex-grow py-10 px-10    w-full max-w-[1300px] mx-auto rounded-md shadow-md mt-8">
//         <h2 className="text-2xl font-semibold mb-4 dark:text-white">
//           Book a FREE Career Consultation
//         </h2>
//         <p className="mb-6 dark:text-gray-300">
//           Please fill out the form below to schedule a 15-minute career auditing
//           session
//         </p>

//         <form className="space-y-6 text-black dark:text-gray-200">
//           <div>
//             <label htmlFor="name" className="block mb-1 font-medium">
//               Name *
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="mobile" className="block mb-1 font-medium">
//               Mobile *
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               placeholder="Enter your mobile number"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium">
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email address"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="datetime" className="block mb-1 font-medium">
//               What is the best time for a 15-minute career auditing session? *
//             </label>
//             <input
//               type="datetime-local"
//               id="datetime"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//             <p className="text-sm text-gray-500 mt-1">
//               Select your preferred date and time for the meeting.
//             </p>
//           </div>
//           {/* <div>
//             <label htmlFor="datetime" className="block mb-1 font-medium">
//               What is the best time for a 15-minute career auditing session? *
//             </label>
//             <input
//               type="datetime"
//               id="datetime"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//               placeholder="Select date and time"
//             />
//             <p className="text-sm text-gray-500 mt-1">
//               Select your preferred date and time for the meeting.
//             </p>
//           </div> */}

//           <div>
//             <label className="block mb-1 font-medium">
//               Are you currently employed? *
//             </label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="employed"
//                   value="yes"
//                   className="mr-1"
//                 />{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="employed"
//                   value="no"
//                   className="mr-1"
//                 />{" "}
//                 No
//               </label>
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">
//               Are you looking for job switch? *
//             </label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="jobSwitch"
//                   value="yes"
//                   className="mr-1"
//                 />{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="jobSwitch"
//                   value="no"
//                   className="mr-1"
//                 />{" "}
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="flex justify-center items-center">
//             <button
//               type="submit"
//               className=" bg-[#0836CF] text-white font-semibold rounded-lg px-6 py-2 hover:bg-[#5571DB] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* Bottom Section */}
//       <section
//         className="relative left-0 right-0 bg-[#0836CF] dark:bg-[#052466] text-white py-16 mt-12  mb-12 mx-20  rounded-md shadow-lg"
//         style={{
//           backgroundImage: "url('/down-left.webp'), url('/down-right.webp')",
//           backgroundPosition: "-120px , calc(100% + 120px)",
//           backgroundRepeat: "no-repeat, no-repeat",
//           backgroundSize: "300px auto, 300px auto",
//         }}
//       >
//         <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
//           <div className="">
//             <h3 className="text-3xl font-bold mb-4">
//               Secure Your $100K+ Future Today!
//             </h3>
//             <p className="mb-6 max-w-lg">
//               Spots are filling FAST! Join our next hiring wave and start your
//               journey to a high-paying tech career.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <button className="flex gap-2 bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition">
//                 Book a Free 15-Min Call
//                 <ChevronRight className="w-5 h-5 mt-1" />
//               </button>
//               <button className="flex gap-2 bg-blue-500 text-white font-semibold rounded-full px-5 py-2 hover:bg-blue-600 transition">
//                 Join Next Webinar
//                 <ChevronRight className="w-5 h-5 mt-1" />
//               </button>
//             </div>
//             <div className="hidden md:block text-right font-semibold text-lg mt-10">
//               HighPaidJobs.us - The Fastest Path to a $100K+ Career!
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default FreeCareerAuditing;

// -----------------

"use client";

import { Calendar, ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import CountdownTimer from "../app/freeCareer/pages";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FreeCareerAuditing() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#202120] min-h-screen flex flex-col">
      {/* Top Section */}
      <section className="bg-[#FFFFFF] dark:bg-[#303031] text-center py-8 px-4">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">
          Door Closes for FREE Career Auditing
        </h1>
        <CountdownTimer targetDate={targetDate} />
      </section>

      {/* Mid Section */}
      <section className="bg-[#FEFFFF] dark:bg-[#2F3030] flex-grow py-10 px-10 w-full max-w-[1300px] mx-auto rounded-md shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Book a FREE Career Consultation
        </h2>
        <p className="mb-6 dark:text-gray-300">
          Please fill out the form below to schedule a 15-minute career auditing
          session
        </p>

        <form className="space-y-6 text-black dark:text-gray-200">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block mb-1 font-medium">
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          {/* <div>
            <label htmlFor="datetime" className="block mb-1 font-medium">
              What is the best time for a 15-minute career auditing session? *
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select date and time"
              className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
            />
            <p className="text-sm text-gray-500 mt-1">
              Select your preferred date and time for the meeting.
            </p>
          </div> */}
          {/* <div>
            <label htmlFor="datetime" className="block mb-1 font-medium">
              What is the best time for a 15-minute career auditing session? *
            </label>

            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select date and time"
                className="w-full rounded border border-gray-300 px-3 py-2 pr-10 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Select your preferred date and time for the meeting.
            </p>
          </div> */}

          <div className="">
            <label
              htmlFor="datetime"
              className="block mb-1 font-medium dark:text-white"
            >
              What is the best time for a 15-minute career auditing session?
              <span>*</span>
            </label>

            {/* Wrapper for positioning */}

            <div className="relative ">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setIsOpen(false);
                }}
                onClickOutside={() => setIsOpen(false)}
                open={isOpen}
                onSelect={() => setIsOpen(false)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select date and time"
                className="w-[1220px] h-11 rounded border border-gray-300 pl-4 pr-12 text-sm dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
              />

              {/* Calendar Icon */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                aria-label="Toggle calendar"
              >
                <Calendar className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
              Select your preferred date and time for the meeting.
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Are you currently employed? *
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="employed"
                  value="yes"
                  className="mr-1"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="employed"
                  value="no"
                  className="mr-1"
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Are you looking for job switch? *
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="jobSwitch"
                  value="yes"
                  className="mr-1"
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="jobSwitch"
                  value="no"
                  className="mr-1"
                />{" "}
                No
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#0836CF] text-white font-semibold rounded-lg px-6 py-2 hover:bg-[#5571DB] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Bottom Section */}
      <section
        className="relative left-0 right-0 bg-[#0836CF] dark:bg-[#052466] text-white py-16 mt-12 mb-12 mx-20 rounded-md shadow-lg"
        style={{
          backgroundImage: "url('/down-left.webp'), url('/down-right.webp')",
          backgroundPosition: "-120px , calc(100% + 120px)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "300px auto, 300px auto",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="">
            <h3 className="text-3xl font-bold mb-4">
              Secure Your $100K+ Future Today!
            </h3>
            <p className="mb-6 max-w-lg">
              Spots are filling FAST! Join our next hiring wave and start your
              journey to a high-paying tech career.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="flex gap-2 bg-yellow-400 text-black font-semibold rounded-full px-5 py-2 hover:bg-yellow-500 transition">
                Book a Free 15-Min Call
                <ChevronRight className="w-5 h-5 mt-1" />
              </button>
              <button className="flex gap-2 bg-blue-500 text-white font-semibold rounded-full px-5 py-2 hover:bg-blue-600 transition">
                Join Next Webinar
                <ChevronRight className="w-5 h-5 mt-1" />
              </button>
            </div>
            <div className="hidden md:block text-right font-semibold text-lg mt-10">
              HighPaidJobs.us - The Fastest Path to a $100K+ Career!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FreeCareerAuditing;
