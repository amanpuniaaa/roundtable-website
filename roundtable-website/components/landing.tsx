import Image from "next/image";
import CTAButton from "./ctabutton";

export default function Landing(){
    return( 
<>

<div className="bg-zinc-950">
    <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
            <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Welcome to the Round Table Network</h1>
                    <p className="mt-2 text-lg text-white sm:mt-6 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                    <div className="mt-8 items-center">
                    <CTAButton
                        CTAButtonText='Talk to Us'
                        CTAButtonLink='https://calendly.com/0xroundtable/30min'
                    />
                    </div>
                </div>

                <div className="xl:col-span-1">
                    <Image
                     className="w-full mx-auto" 
                     src="/RT Landing.png"
                     width={897}
                     height={861} 
                     alt="Round Table Network" />
                </div>
            </div>
        </div>
    </section>
</div>
</>

    );
}