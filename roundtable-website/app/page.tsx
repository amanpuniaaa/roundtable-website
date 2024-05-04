import Header from "@/components/header";
import Agencies from "@/components/agencies";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import JoinUs from "@/components/joinus";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header/>
      <Landing/>
      <JoinUs/>
      <Agencies/>
      <Testimonials/>
      <Partners/>
    </>
  );
}
