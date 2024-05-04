import Image from "next/image";
import CTAButton from './ctabutton';


export default function Content({
    content1Heading,
    content1SubHeading,
    content1CTA,
    href1,
    content2Heading,
    content2SubHeading,
    content2CTA,
    href2,
    content3Heading,
    content3SubHeading,
    content3CTA,
    href3,
  }: {
    content1Heading?: string;
    content1SubHeading?: string;
    content1CTA?: string;
    href1: string;
    content2Heading?: string;
    content2SubHeading?: string;
    content2CTA?: string;
    href2: string;
    content3Heading?: string;
    content3SubHeading?: string;
    content3CTA?: string;
    href3: string;

  }) {
    return(
<div className="bg-zinc-950">
<section className="mx-auto max-w-7xl p-4 antialiased bg-zinc-950">

            

            <div id="contentdiv1" className="mt-16 mx-auto lg:grid lg:gap-0 lg:mb-0 lg:grid-cols-2">

                <Image
                    src={href2}
                    alt='image'
                    width={650}
                    height={650}
                />

                <TextBox
                    h={content2Heading}
                    sh={content2SubHeading}
                    c={content2CTA}
                />

            </div>
            <div className="p-14 text-white font-bold text-5xl text-left ">
                <h1 className="tracking-tight hover:text-transparent hover:bg-gradient-to-r hover:bg-clip-text hover:from-white hover:to-gray-500 ">Startup or enterprise,<br></br>we do operations the Dyota / द्योतः <br></br> way</h1>
            </div>

            <div id="contentdiv3" className="mt-16 mx-auto lg:grid lg:gap-0 lg:mb-0 lg:grid-cols-2">
                <TextBox
                        h={content3Heading}
                        sh={content3SubHeading}
                        c={content3CTA}
                    />

                <Image
                    src={href3}
                    alt='image'
                    width={650}
                    height={650}
                />
                
            </div>
            
</section>
</div>
);
}   

function TextBox(
    {
        h,sh,c
    }:{
        h?: string;
        sh?: string;
        c?: string;
    }
){
    return(
<>
<div>
                    <div className="text-center p-4 justify-centre h-full py-auto items-center lg:p-18 lg:my-4  ">
                        <h1 className="text-white text-center lg:text-left font-extrabold text-4xl sm:text-5xl ">{h}</h1>
                        <p className="mt-14 text-lg text-center lg:text-left leading-8 text-white">{sh}<br></br></p>
                        <div className="mt-14 mx-auto text-left">
                        <CTAButton CTAButtonText={c}/>
                        </div>
                    </div>
                </div>
</>
    );
}
