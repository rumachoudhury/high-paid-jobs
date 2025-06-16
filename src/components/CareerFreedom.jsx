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
    textColor: "text-white",
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
      <div
        // className="max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6 ml-5"
        className="  grid md:grid-cols-3 gap-6 container md:mx-auto"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-lg p-8 shadow-md min-h-[550px] max-w-7xl ${plan.cardBg} ${plan.textColor}`}
          >
            {plan.isPopular && (
              <div className="absolute top-10 -right-2 z-10">
                <div class="bg-[#F6A934] text-xs md:text-sm font-medium text-black px-3 py-1 rounded-t rounded-bl">
                  Most Popular
                </div>
                <div class="absolute top-6 md:top-7 right-0">
                  <svg
                    width="7.903320"
                    height="7.903320"
                    viewBox="0 0 7.90332 7.90332"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0L7.9 0L0 7.9L0 0Z" fill="#F6A934" />
                  </svg>
                </div>
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
