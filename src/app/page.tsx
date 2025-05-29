import DreamJob from "@/components/ DreamJob";
import HighPayingCareer from "@/components/ HighPayingCareer";
import SuccessStories from "@/components/SuccessStories";
import TopComponent from "@/components/TopComponent";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyHighPaidJobs from "@/components/WhyHighPaidJobs";
import CareerFreedom from "../components/CareerFreedom";
import QuestionsAnswers from "@/components/QuestionsAnswers";

import Footer from "@/components/Footer";
import FreeCareerFrom from "../app/free-career-form/page";
import CareerAuditing from "@/components/CareerAuditing";
import SecureFuture from "@/components/SecureFuture";

export default function Home() {
  return (
    <>
      <TopComponent />
      <WhyHighPaidJobs />
      <HighPayingCareer />
      <DreamJob />
      <SuccessStories />
      <WhyChooseUs />
      <CareerFreedom />
      <QuestionsAnswers />
      <CareerAuditing />
      <FreeCareerFrom />
      <SecureFuture />

      <Footer />
    </>
  );
}
