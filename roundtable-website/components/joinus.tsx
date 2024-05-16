import { Tweet } from 'react-tweet'

export default function JoinUs(){
    return(
        <section className="bg-zinc-950"> 
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

            <div className="lg:py-24">

                <p className="max-w-screen-md text-5xl md:text-5xl text-center font-extrabold text-white">Be Part of Something Massive 🔥 </p>
                <p className="mt-4 text-white text-xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                        quidem quam repellat.
                </p>
            
            <div className="max-w-xl mx-auto grid mt-8 grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
                <div className=""> 
                    <NumBoxG
                    name='Impressions'
                    i='390K'
                    mod='69.420%'
                    />
                </div>

                <div className="">
                    <NumBoxG
                        name='Engagement Rate'
                        i='8.7%'
                        mod='69.420%'
                        />
                </div>
                <div className="">
                    <NumBoxG
                        name='New Followers'
                        i='530'
                        mod='69.420%'
                        />
                </div>
         </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className=""> 
                    <NumBoxG
                    name='Replies'
                    i='5,618'
                    mod='69.420%'
                    />
                </div>

                <div className="">
                    <NumBoxG
                        name='Likes'
                        i='18,234'
                        mod='69.420%'
                        />
                </div>
                <div className="">
                    <NumBoxG
                        name='Reposts'
                        i='80085'
                        mod='69.420%'
                        />
                </div>
         </div>

    </div>

            <div className=""> 

                <div data-theme="light">
                        <Tweet id="1779226752457556468" />
                </div>
            </div>
            </div>
            </div>
        </section>
    );

}

export function NumBoxR({
    name,
    i,
    mod,
  }: {
    name?: string;
    i?: string;
    mod?: string;
  }){

    return(
    <>
       <article className=" bg-zinc-950 p-3">
  <div className="text-center items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{name}</p>

      <p className="text-2xl font-medium text-gray-900 dark:text-white">{i}</p>
    </div>
  </div>

  <div className=" justify-center mt-1 flex gap-1 text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <p className="flex gap-2 text-xs">
      <span className="font-medium"> {mod} </span>

      <span className="text-xs"> Since last week </span>
    </p>
  </div>
</article>
    
    </>);
  }

  export function NumBoxG({
    name,
    i,
    mod,
  }: {
    name?: string;
    i?: string;
    mod?: string;
  }){

    return(
    <>
        <article className=" bg-zinc-950 p-3">
        
        <div className="text-center">
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{name}</p>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">{i}</p>
            </div>
      </div>
    
      <div className="justify-center mt-1 flex gap-1 text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
    
        <p className="text-center flex gap-2 text-xs">
          <span className="font-medium"> {mod} </span>
    
          <span className="text-gray-500 dark:text-gray-400"> Since last week </span>
        </p>
      </div>
    </article>
    
    </>);

}
