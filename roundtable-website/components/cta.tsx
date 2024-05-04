import CTAButton from "./ctabutton";

export default function CTA(){
    return(
<div className="bg-amber-300">
        <section className="mx-auto bg-amber-300 max-w-7xl text-center p-7 sm:p-14">
            <h1 className='mt-6 md:mt-14 max-w-screen-md mx-auto text-center text-2xl sm:text-5xl font-extrabold text-black'>Ready to kick off your growth journey?🚀</h1>
            <div className="mt-12 mx-auto">
            <CTAButton
                CTAButtonText="Talk to us"
                CTAButtonLink="https://calendly.com/0xroundtable/30min"
            />
            </div>
        </section>


</div>
    );
}