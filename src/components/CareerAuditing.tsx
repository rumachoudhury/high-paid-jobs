// "use client";
// import React, { useEffect, useState } from "react";

// type TimeLeft = {
//   days: string;
//   hours: string;
//   minutes: string;
//   seconds: string;
//   isComplete?: boolean;
// };

// interface CareerAuditingProps {
//   targetDate: number; // milliseconds timestamp
// }

// const CareerAuditing: React.FC<CareerAuditingProps> = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   const [isComplete, setIsComplete] = useState(false);
//   const targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // 10 days from now

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance <= 0) {
//         clearInterval(interval);
//         setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
//         setIsComplete(true);
//       } else {
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         setTimeLeft({
//           days: String(days).padStart(2, "0"),
//           hours: String(hours).padStart(2, "0"),
//           minutes: String(minutes).padStart(2, "0"),
//           seconds: String(seconds).padStart(2, "0"),
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   if (isComplete) {
//     return (
//       <div className="text-center text-xl font-semibold mt-4 text-red-600">
//         Countdown Complete!
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center gap-4 mt-4">
//       <h1 className="text-3xl font-bold mb-2 dark:text-white">
//         Door Closes for FREE Career Auditing
//       </h1>
//       <br />
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div
//           key={unit}
//           className="bg-red-600 text-white w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md"
//         >
//           <span className="text-2xl font-bold">{value}</span>
//           <span className="text-sm uppercase">{unit}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CareerAuditing;

// ------------
"use client";
import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const initialTargetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;

const CareerAuditing: React.FC = () => {
  const [targetDate] = useState<number>(initialTargetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        setIsComplete(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isComplete) {
    return (
      <div className="text-center text-xl font-semibold mt-4 text-red-600">
        Countdown Complete!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-8   bg-[#FFFFFF] dark:bg-[#303031] text-center py-8 px-4">
      <h1 className="text-5xl font-bold mb-2 dark:text-white">
        Door Closes for FREE Career Auditing
      </h1>
      <div className="flex items-center gap-3 text-white">
        <div className="bg-red-600 w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
          <span className="text-sm uppercase">days</span>
        </div>
        <div className="bg-red-600 w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm uppercase">hours</span>
        </div>
        <div className="bg-red-600 w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm uppercase">minutes</span>
        </div>
        <div className="bg-red-600 w-20 h-20 rounded-md flex flex-col items-center justify-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm uppercase">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CareerAuditing;
