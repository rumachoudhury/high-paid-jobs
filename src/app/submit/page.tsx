"use client";

import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

function SubmitPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <section className="bg-[#F5F5F5] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-[#FEFFFF] dark:bg-[#202120] text-center p-6 shadow-lg w-full max-w-md mx-auto rounded-lg">
        <div className="flex items-center justify-center rounded-full border-4 border-blue-600 mb-4 w-10 h-10">
          <Check className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Congratulations!
        </h2>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          You have submitted successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We'll contact you soon to confirm your 15-minute
          <br />
          career auditing session.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-[#0636CE] text-white px-6 py-2 rounded hover:bg-blue-300 transition"
        >
          Go Back
        </button>
      </div>
    </section>
  );
}

export default SubmitPage;
