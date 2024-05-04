import CTAButton from "./ctabutton";

export default function Newsletter(){
    return(

<>
<section className="bg-zinc-750">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-white sm:text-4xl sm:text-4xl dark:text-white">Keep up with the alpha, airdrop, project launches in Web3 📖</h2>
          <p className="mt-8 text-lg leading-8 text-white text-center font-semibold text-white md:mb-12 sm:text-xl ">Enjoy the lastest alpha on the internet — <br></br>right in your inbox</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <input className="block p-3 pl-10 w-full text-sm text-white bg-black border border-white focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" type="email" id="email"/>
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
          </form>
      </div>
  </div>
</section>

</>
    );
}

function Input(){
<>

<label
  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="Username"
    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="Username"
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Username
  </span>
</label>

</>
}