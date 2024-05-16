import Header from "@/components/header";
import Agencies from "@/components/agencies";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import JoinUs from "@/components/joinus";
import Landing from "@/components/landing";
import MarqueeText from "@/components/marquee";
import Careers from "@/components/workwithus";
import Content from "@/components/content";
import FAQs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Header/>
      <Landing/>
      <Content
          content1Heading='suck it'
          content1SubHeading='lorem ipsum dolor amet'
          content1CTA='lorem ipsum dolor amet'
          href1="/RT Landing.png"
          content2Heading='lorem ipsum dolor amet'
          content2SubHeading='lorem ipsum dolor amet'
          content2CTA='lorem ipsum dolor amet'
          href2="/RT Landing.png"
          content3Heading='lorem ipsum dolor amet'
          content3SubHeading='lorem ipsum dolor amet'
          content3CTA='lorem ipsum dolor amet'
          href3="/RT Landing.png"
      
      />
      <JoinUs/>
      <Agencies/>
      <Testimonials/>
      <Partners/>
      {/* <Careers/> */}
      <MarqueeText
        value='Round Table Network🚀 Round Table Network🚀 '
      />
      <FAQs
      />


    </>
  );
}
