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
          content1SubHeading='Suck this big cawk'
          content1CTA='Suck this big cawk'
          href1="/RT Landing.png"
          content2Heading='Suck this big cawk'
          content2SubHeading='Suck this big cawk'
          content2CTA='Suck this big cawk'
          href2="/RT Landing.png"
          content3Heading='Suck this big cawk'
          content3SubHeading='Suck this big cawk'
          content3CTA='Suck this big cawk'
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
