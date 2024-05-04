import Image from "next/image";

export default function Careers(){
    return(
        <div className=" flex flex-col-1 relative p-24 isolate small:p-32 bg-white">
  <Image 
        src="/RT Landing.png" 
        alt="hello" 
        height='550'
        width='550'
        />
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-6xl">Work With Us</h2>
      <p className="mt-6 text-lg leading-8 text-black">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a> 
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-black">Offices worldwide</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-black">12</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-black">Full-time colleagues</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-black">300+</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-black">Hours per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-black">40</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-black">Paid time off</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

    );
}