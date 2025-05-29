// "use client";

// import { Calendar } from "lucide-react";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function FreeCareerForm() {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [employed, setEmployed] = useState("");
//   const [jobSwitch, setJobSwitch] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !name ||
//       !mobile ||
//       !email ||
//       !selectedDate ||
//       !employed ||
//       !jobSwitch
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     router.push("/submit");
//   };

//   return (
//     <div className="bg-[#F5F5F6] dark:bg-[#202120] min-h-screen flex flex-col">
//       <section className="bg-[#FEFFFF] dark:bg-[#2F3030] flex-grow py-10 px-10 w-full max-w-[1300px] mx-auto rounded-md shadow-md mt-8">
//         <h2 className="text-2xl font-semibold mb-4 dark:text-white">
//           Book a FREE Career Consultation
//         </h2>
//         <p className="mb-6 dark:text-gray-300">
//           Please fill out the form below to schedule a 15-minute career auditing
//           session
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 text-black dark:text-gray-200"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="block mb-1 font-medium">
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//               />
//             </div>

//             <div>
//               <label htmlFor="mobile" className="block mb-1 font-medium">
//                 Mobile *
//               </label>
//               <input
//                 type="tel"
//                 id="mobile"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 placeholder="Enter your mobile number"
//                 className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium">
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//               className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium dark:text-white">
//               What is the best time for a 15-minute career auditing session? *
//             </label>

//             <div className="relative">
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={(date) => setSelectedDate(date)}
//                 showTimeSelect
//                 timeFormat="HH:mm"
//                 timeIntervals={15}
//                 dateFormat="MMMM d, yyyy h:mm aa"
//                 placeholderText="Select date and time"
//                 popperPlacement="top-start" // Adjust popup
//                 className=" h-11 rounded border border-gray-300 pl-4 pr-12 text-sm dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400  w-[1220px]"
//               />
//               <button
//                 type="button"
//                 onClick={() => {
//                   const input = document.querySelector(
//                     "input[placeholder='Select date and time']"
//                   );
//                   input?.focus(); // triggers DatePicker popup
//                 }}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white "
//                 aria-label="Toggle calendar"
//               >
//                 <Calendar className="w-5 h-5" />
//               </button>
//             </div>

//             <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
//               Select your preferred date and time for the meeting.
//             </p>
//           </div>

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
//                   onChange={() => setEmployed("yes")}
//                   className="mr-1"
//                 />{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="employed"
//                   value="no"
//                   onChange={() => setEmployed("no")}
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
//                   onChange={() => setJobSwitch("yes")}
//                   className="mr-1"
//                 />{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="jobSwitch"
//                   value="no"
//                   onChange={() => setJobSwitch("no")}
//                   className="mr-1"
//                 />{" "}
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="flex justify-center items-center">
//             <button
//               type="submit"
//               className="bg-[#0836CF] text-white font-semibold rounded-lg px-6 py-2 hover:bg-[#5571DB] transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default FreeCareerForm;
