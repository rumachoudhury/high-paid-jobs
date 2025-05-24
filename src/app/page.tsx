import DreamJob from "@/components/ DreamJob";
import HighPayingCareer from "@/components/ HighPayingCareer";
import SuccessStories from "@/components/SuccessStories";
import TopComponent from "@/components/TopComponent";
import WhyHighPaidJobs from "@/components/WhyHighPaidJobs";

export default function Home() {
  return (
    <>
      <TopComponent />
      <WhyHighPaidJobs />
      <HighPayingCareer />
      <DreamJob />
      <SuccessStories />
    </>
  );
}
