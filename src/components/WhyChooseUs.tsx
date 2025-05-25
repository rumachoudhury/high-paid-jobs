// import { Check, ChevronRight, XCircle } from "lucide-react";

// export default function WhyChooseUs() {
//   return (
//     <section className="mx-auto px-4 py-10 md:py-20 bg-[#F5F5F5] dark:bg-gray-900 transition-colors duration-300">
//       {/* Top Section */}
//       <div className="mx-auto text-center">
//         <h1 className="max-w-[320px] md:max-w-[739px] mx-auto text2xl md:text-5xl font-bold text-black leading-tight mb-2 md:mb-4">
//           Why Choose Us
//         </h1>
//         <p className="text-[#5C5958] mx-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-4 md-mb-6">
//           {" "}
//           See how our program delivers results where others all short
//         </p>

//         {/* 6 card  start here  */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mx-2 md:mx-auto">
//           {/* 1st card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 2nd card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2guaranteed Job Placement"
//                 ></h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                   <Check className="w-4 h-4 text-green-500" />
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                   {/* <XCircle /> */}
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>

//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between  bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>
//             {/* 3rd card */}

//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   {" "}
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 4th card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   {" "}
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 3rd card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 4th card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 5th card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//           {/* 6th card */}
//           <div className="bg-foreground rounded-lg p-2 md:p-6 shadow flex flex-col justify-between bg-[#FFFFFF]">
//             <div className="mb-4 ">
//               <div className="w-12 h-12 mr-4">
//                 <svg />
//               </div>
//               <div className="text-start">
//                 <h3
//                   className="test-base md
//                 :text-lg font-bold text-black md:mt-3 mb-2"
//                 >
//                   Guaranteed Job Placement
//                 </h3>
//                 <p className="max-w-[150px] md:max-w-[]260px text-xs md:text-sm text-[#5C5958] dark:text-gray">
//                   We gurantee you'll get hired or we keep working with you for
//                   free
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-center gap-2">
//               <div className="bg-background flex-1 text-center text-xs font-semibold p-1 md-px-3 md:py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm ">
//                   HighPaidJobs
//                 </p>
//                 <p className="bg-primary rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 max-auto">
//                   <svg />
//                 </p>
//               </div>
//               <div className="bg-background flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                 <p className="text-black font-semibold text-[10px] md:text-sm">
//                   Others
//                 </p>
//                 <p className="bg-[#FF0000] rounded-full mt-2 inline-flex items-center justify-center w-6 h-6 mx-auto">
//                   <svg />
//                 </p>
//               </div>
//             </div>
//             <hr className="my-2 bg-background" />
//             <div className="bg-primary-foreground dark:bg-[5C5958] text-start font-semibold text-primary dark:text-gray shadow text-[10px] md:test-xs p-2 rounded ">
//               99.99% success rate within 8-6 weeks
//             </div>
//           </div>
//         </div>
//         {/* 6 card  end here  */}

//         <div>
//           <p>Ready to experience the HighPaidJobs difference?</p>

//           <div className="flex items-center justify-center mt-10">
//             <button className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] dark:bg-[#2D4EFF] rounded-full hover:bg-[#062abf] dark:hover:bg-[#1c3dce] transition">
//               <span>Book Free Consultation</span>
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ---
// import { Check, X } from "lucide-react";

// export default function WhyChooseUs() {
//   const cardData = [
//     {
//       title: "Guaranteed Job Placement",
//       description:
//         "We guarantee you'll get hired or we keep working with you for free.",
//       badge: "99.99% success rate within 6-8 weeks",
//     },
//     {
//       title: "One-on-One Mentorship",
//       description:
//         "Personalized guidance from industry experts to help you stay on track.",
//       badge: "Top-rated mentor support",
//     },
//     {
//       title: "Real-World Projects",
//       description:
//         "Work on hands-on projects that mirror actual job requirements.",
//       badge: "Portfolio-ready projects",
//     },
//     {
//       title: "Flexible Learning Schedule",
//       description:
//         "Designed to fit your busy life with on-demand access to materials.",
//       badge: "Learn anytime, anywhere",
//     },
//     {
//       title: "Mock Interviews & Resume Help",
//       description:
//         "Practice interviews and resume feedback to make you job-ready.",
//       badge: "Career support included",
//     },
//     {
//       title: "High Salary Opportunities",
//       description: "We help you target jobs that pay above industry average.",
//       badge: "Target $100K+ roles",
//     },
//   ];

//   return (
//     <section className="mx-auto px-4 py-10 md:py-20 bg-[#F5F5F5] dark:bg-gray-900 transition-colors duration-300">
//       <div className="mx-auto text-center">
//         <h1 className="max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-4">
//           Why Choose Us
//         </h1>
//         <p className="text-[#5C5958] max-w-[600px] mx-auto dark:text-gray-300 text-base md:text-lg mb-8">
//           See how our program delivers results where others fall short.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow flex flex-col justify-between"
//             >
//               <div className="mb-4">
//                 {/* use icon here */}
//                 {/* <div className="w-12 h-12 mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                   <Check className="text-green-500" />
//                 </div> */}
//                 <h3 className="text-lg font-bold text-black mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-[#5C5958] dark:text-gray-400">
//                   {card.description}
//                 </p>
//               </div>
//               <div className="flex justify-center gap-2 mt-auto mb-2">
//                 <div className="flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                   <p className="text-black font-semibold text-sm">
//                     HighPaidJobs
//                   </p>
//                   <Check className=" bg-green-500 w-4 h-4 mx-auto text-white rounded-full mt-1" />
//                 </div>
//                 <div className="flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                   <p className="text-black font-semibold text-sm">Others</p>
//                   <X className=" bg-red-500 w-4 h-4 mx-auto text-white rounded-full mt-1 " />
//                 </div>
//               </div>
//               <div className="bg-gray-100 text-start font-semibold text-primary text-xs p-2 rounded mt-2">
//                 {card.badge}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// ------------
// import { Check, X } from "lucide-react";

// export default function WhyChooseUs() {
//   const cardData = [
//     {
//       title: "Guaranteed Job Placement",
//       description:
//         "We guarantee you'll get hired or we keep working with you for free.",
//       badge: "99.99% success rate within 8-16 weeks",
//     },
//     {
//       title: "Hyper Personalized Coaching",
//       description: "One-on-one instruction tailored to your learning style.",
//       badge: "Dedicated mentor throughout your journey",
//     },
//     {
//       title: "Interview Support",
//       description: "Expert guidance during the entire interview process.",
//       badge: "We join your interviews to help you succeed",
//     },
//     {
//       title: "Post-Hire Support",
//       description: "Continued assistance after you land your job.",
//       badge: "Full support during probation period to help your job sustain",
//     },
//     {
//       title: "Decided Salary Renegotiation",
//       description: "Expert techniques to maximize your compensation.",
//       badge: "Average $5-10k increase in offers",
//     },
//     {
//       title: "100% Money-Back Guarantee",
//       description: "15 day money back guarantee, a risk-free investment!",
//       badge: "15-day unconditional guarantee",
//     },
//   ];

//   return (
//     <section className="mx-auto px-4 py-10 md:py-20 bg-[#F5F5F5] dark:bg-gray-900 transition-colors duration-300">
//       <div className="mx-auto text-center">
//         <h1 className="max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-4">
//           Why Choose Us Over Others?
//         </h1>
//         <p className="text-[#5C5958] max-w-[600px] mx-auto dark:text-gray-300 text-base md:text-lg mb-8">
//           See how our program delivers results where others fall short.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow flex flex-col justify-between"
//             >
//               <div className="mb-4">
//                 <div className="w-10 h-10 mb-3 bg-green-100 rounded-full flex items-center justify-center">
//                   <Check className="text-green-600 w-5 h-5" />
//                 </div>
//                 <h3 className="text-lg font-bold text-black mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-[#5C5958] dark:text-gray-400">
//                   {card.description}
//                 </p>
//               </div>

//               <div className="flex justify-center gap-2 mt-auto mb-2">
//                 <div className="flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                   <p className="text-black font-semibold text-sm">
//                     HighPaidJobs
//                   </p>
//                   <Check className="bg-green-500 w-4 h-4 mx-auto text-white rounded-full mt-1" />
//                 </div>
//                 <div className="flex-1 text-center text-xs font-semibold px-3 py-2 rounded shadow border">
//                   <p className="text-black font-semibold text-sm">Others</p>
//                   <X className="bg-red-500 w-4 h-4 mx-auto text-white rounded-full mt-1" />
//                 </div>
//               </div>

//               <div className="bg-gray-100 text-start font-semibold text-primary text-xs p-2 rounded mt-2">
//                 {card.badge}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12">
//           <p className="text-lg md:text-xl font-semibold text-black mb-4">
//             Ready to experience the HighPaidJobs difference?
//           </p>
//           <a
//             href="#book-consultation"
//             className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition"
//           >
//             Book Free Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// ---------------
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
          <button className="flex items-center justify-center space-x-2 text-white p-2 px-4 bg-[#0836CF] dark:bg-[#2D4EFF] rounded-full hover:bg-[#062abf] dark:hover:bg-[#1c3dce] transition">
            <span>Book Free Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
