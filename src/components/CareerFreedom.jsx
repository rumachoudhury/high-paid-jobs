// import { Check, ChevronRight, ArrowRight } from "lucide-react";

// const plans = [
//   {
//     title: "Plan: Starter",
//     description: "Quick 30 min interview",
//     price: "$49.99",
//     paymentNote: "One time payment",
//     features: [
//       "30 Min Interview",
//       "Provide Recording",
//       "Interview Assessment",
//       "Delivery: 1 to 3 days",
//       "Receive: detailed report and next action plan",
//       "Provide 30 Local recruiters (small to large companies for open positions)",
//     ],
//     cardBg: "#F1F5F7",
//     buttonBg: "#165DFC",
//     buttonTextColor: "#FFFFFF",
//     checkIconColor: "#165DFC",
//     checkCircleBg: "#FFFFFF",
//     isPopular: false,
//   },
//   {
//     title: "Plan: Essential",
//     description: "60 min technical interview and resume assessment",
//     price: "$99.99",
//     paymentNote:
//       "Upfront deposit, $99.99 installment for 24 months: Interest FREE",
//     features: [
//       "60 min interview",
//       "Deliver: Recording Interview, Resume Assessment and guidance",
//       "Receive: detailed report and next action plan",
//       "50 Local recruiters (small to large companies for open positions)",
//     ],
//     cardBg: "#0836D0",
//     buttonBg: "#FFFFFF",
//     buttonTextColor: "#0836D0",
//     checkIconColor: "#FFFFFF",
//     checkCircleBg: "#3F75FF",
//     isPopular: true,
//   },
//   {
//     title: "Plan: Premium",
//     description: "Interview, resume and current job application assessment",
//     price: "$149.99",
//     paymentNote:
//       "Upfront deposit, $149.99 installment for 24 months: Interest FREE",
//     features: [
//       "Duration: 2 Hours",
//       "Recruiter Interview",
//       "Tech Interview",
//       "Behavior Interview",
//       "Resume Assessment",
//       "Current Job Application Assessment",
//       "Receive: detailed report and next action plan",
//       "70 Local recruiters (small to large companies for open positions)",
//     ],
//     cardBg: "#F1F5F7",
//     buttonBg: "#165DFC",
//     buttonTextColor: "#FFFFFF",
//     checkIconColor: "#165DFC",
//     checkCircleBg: "#FFFFFF",
//     isPopular: false,
//   },
// ];

// export default function CareerFreedom() {
//   return (
//     <section className="py-10 bg-[#FEFFFF] dark:bg-[#303030]">
//       <h1 className="text-black dark:text-white text-5xl font-bold text-center mb-4">
//         Unlock Your Career Freedom!
//       </h1>
//       <p className="text-gray-700 dark:text-300 text-lg text-center mb-10">
//         Choose the assessment plan that works best for you with our flexible
//         payment options
//       </p>
//       <div className="max-w-7xl  px-6 grid grid-cols-1 md:grid-cols-3 gap-6 ml-5">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col justify-between rounded-lg p-8 shadow-md min-h-[550px] max-w-7xl "
//             style={{
//               backgroundColor: plan.cardBg,
//               color: plan.isPopular ? "#FFFFFF" : "#1f2937",
//             }}
//           >
//             {plan.isPopular && (
//               <div className="absolute top-8 rounded-l-md right-0 bg-orange-400 dark:bg-yellow-400 text-black dark:text-white text-xs font-bold px-3 py-2  shadow-lg">
//                 Most Popular
//               </div>
//             )}

//             <div className="space-y-4">
//               <h3 className="text-xl font-bold">{plan.title}</h3>
//               <p className="text-sm">{plan.description}</p>
//               <div className="text-xl font-semibold">{plan.price}</div>
//               <p className="text-sm">{plan.paymentNote}</p>

//               <ul className="space-y-2 text-sm">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <span
//                       className="rounded-full p-1"
//                       style={{
//                         backgroundColor: plan.checkCircleBg,
//                         display: "inline-flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <Check
//                         className="w-4 h-4"
//                         style={{ color: plan.checkIconColor }}
//                       />
//                     </span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <button
//               className="w-full mt-6 py-3 rounded-full font-semibold hover:opacity-90 transition flex justify-center items-center gap-2"
//               style={{
//                 backgroundColor: plan.buttonBg,
//                 color: plan.buttonTextColor,
//               }}
//             >
//               Pay Now
//               {plan.isPopular ? (
//                 <ArrowRight className="w-4 h-4" />
//               ) : (
//                 <ChevronRight className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// --------------
import { Check, ChevronRight, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Plan: Starter",
    description: "Quick 30 min interview",
    price: "$49.99",
    paymentNote: "One time payment",
    features: [
      "30 Min Interview",
      "Provide Recording",
      "Interview Assessment",
      "Delivery: 1 to 3 days",
      "Receive: detailed report and next action plan",
      "Provide 30 Local recruiters (small to large companies for open positions)",
    ],
    cardBg: "bg-[#F1F5F7] dark:bg-[#434345]",
    buttonBg: "bg-[#165DFC] dark:bg-[#052465]",
    buttonTextColor: "text-white",
    checkIconColor: "text-[#165DFC] dark:text-white",
    checkCircleBg: "bg-white dark:bg-[#052465]",
    isPopular: false,
  },
  {
    title: "Plan: Essential",
    description: "60 min technical interview and resume assessment",
    price: "$99.99",
    paymentNote:
      "Upfront deposit, $99.99 installment for 24 months: Interest FREE",
    features: [
      "60 min interview",
      "Deliver: Recording Interview, Resume Assessment and guidance",
      "Receive: detailed report and next action plan",
      "50 Local recruiters (small to large companies for open positions)",
    ],
    cardBg: "bg-[#0836D0] dark:bg-[#052467]",
    buttonBg: "bg-white dark:bg-[#303030]",
    buttonTextColor: "text-[#0836D0] dark:text-white",
    checkIconColor: "text-white dark:text-white",
    checkCircleBg: "bg-[#3F75FF] dark:bg-[#303030]",
    isPopular: true,
  },
  {
    title: "Plan: Premium",
    description: "Interview, resume and current job application assessment",
    price: "$149.99",
    paymentNote:
      "Upfront deposit, $149.99 installment for 24 months: Interest FREE",
    features: [
      "Duration: 2 Hours",
      "Recruiter Interview",
      "Tech Interview",
      "Behavior Interview",
      "Resume Assessment",
      "Current Job Application Assessment",
      "Receive: detailed report and next action plan",
      "70 Local recruiters (small to large companies for open positions)",
    ],
    cardBg: "bg-[#F1F5F7] dark:bg-[#434345]",
    buttonBg: "bg-[#165DFC] dark:bg-[#052465]",
    buttonTextColor: "text-white",
    checkIconColor: "text-[#165DFC] dark:text-white",
    checkCircleBg: "bg-white dark:bg-[#052465]",
    isPopular: false,
  },
];

export default function CareerFreedom() {
  return (
    <section className="py-10 bg-[#FEFFFF] dark:bg-[#303030]">
      <h1 className="text-black dark:text-white text-5xl font-bold text-center mb-4">
        Unlock Your Career Freedom!
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-10">
        Choose the assessment plan that works best for you with our flexible
        payment options
      </p>
      <div className="max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 ml-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-lg p-8 shadow-md min-h-[550px] max-w-7xl ${plan.cardBg} text-gray-800 dark:text-gray-200`}
          >
            {plan.isPopular && (
              <div className="absolute top-8 rounded-l-md right-0 bg-orange-400 dark:bg-orange-300 text-black dark:text-white text-xs font-bold px-3 py-2 shadow-lg">
                Most Popular
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="text-sm">{plan.description}</p>
              <div className="text-xl font-semibold">{plan.price}</div>
              <p className="text-sm">{plan.paymentNote}</p>

              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className={`rounded-full p-1 flex items-center justify-center ${plan.checkCircleBg}`}
                    >
                      <Check className={`w-4 h-4 ${plan.checkIconColor}`} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full mt-6 py-3 rounded-full font-semibold hover:opacity-90 transition flex justify-center items-center gap-2 ${plan.buttonBg} ${plan.buttonTextColor}`}
            >
              Pay Now
              {plan.isPopular ? (
                <ArrowRight className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
