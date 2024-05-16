export default function Agencies(){
    return(
<section className="px-auto mx-auto bg-white">

  <div className="p-4 bg-white">
    <h1 className="p-8 mt-8 text-3xl font-bold tracking-tight text-black sm:text-5xl text-center">Our Content</h1>
    <p className="text-black text-2xl text-center" > Explore the world of Blockchains, Cryptocurrencies and Web3 </p>
    </div>    


      <div className="grid mx-auto lg:gap-8 grid-cols-3 pt-4 lg:p-12 bg-white sm:p-14 sm:gap-8 max-w-7xl ">
        <AgencyCard 
            agencyHeadline="Round Table Blog"
            agencyInfoLine="Check out our latest articles on our blog"
            link='socialdyota'
        />
         <AgencyCard 
            agencyHeadline="Round Reading Lists"
            agencyInfoLine="Check out Reading lists for articles"
            link='https://roundtablenetwork.notion.site/394052a0668c4dfe948d87815a55fb88?v=7b4b31dcb9b04d40b3e26ddcae988b91&pvs=4'
        />
         <AgencyCard 
            agencyHeadline="Round Table Academy"
            agencyInfoLine="Our exclusive Educative material to get the 101's"
            link='socialdyota'
        />
       
        </div>

</section>
    );
}

function AgencyCard({
    agencyHeadline,
    agencyInfoLine,
    link
  }: {
    agencyHeadline?: string;
    agencyInfoLine?: string;
    link?: string;
  }) {
    return (
        <a href={link} className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
      
        <div
          className="relative text-black flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
          <div
            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-12 sm:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            > 
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
      
            <h2 className="mt-4 text-xl font-medium sm:text-2xl">{agencyHeadline}</h2>
            <h2 className="mt-2 text-sm sm:text-base">{agencyInfoLine}</h2>
          </div>
      
          <div
            className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
          >
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">{agencyHeadline}</h3>
      
            <p className="mt-4 text-sm sm:text-base">
            {agencyInfoLine}
            </p>
      
            <p className="mt-8 font-bold">Read More</p>
          </div>
        </div>
      </a>
    );
  }