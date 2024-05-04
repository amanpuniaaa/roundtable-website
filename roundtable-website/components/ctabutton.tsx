export default function CTAButton({
    CTAButtonText,
    CTAButtonLink

}:{
    CTAButtonText?:string;
    CTAButtonLink?:string;

}){
    return(
<>
<a
     href={CTAButtonLink} 
     className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group">

    {/* <span className="w-64 h-64 rotate-60 translate-x-12 -translate-y-8 absolute left-0 top-0 bg-white opacity-[3%]"></span> */}
    <span className="absolute top-0 left-0 w-56 h-56 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-64 -translate-y-20 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span className="relative w-full px-8 py-1 text-left font-bold text-white text-l uppercase transition-colors duration-200 ease-in-out group-hover:text-gray-900">{CTAButtonText}</span>
    <span className="absolute inset-0 border-4 border-white"></span>
</a>

</>
);
}



{/* <button>
    <a className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-indigo-500" 
                        href="/download" >
                            
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-1 group-hover:translate-x-1 hover:animate-background bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]
">
                </span>

        <span className="relative block border border-current font-semibold uppercase font-bold bg-white px-12 py-4">
                {CTAButtonText}
        </span>
    </a>
</button> */}