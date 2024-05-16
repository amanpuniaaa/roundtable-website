export default function FAQs(
){
    return(
<section>
<h1 className="mt-14 mx-auto items-center text-4xl text-center font-semibold">Frequently Asked Questions (FAQs)</h1>

  <div className="p-8">
      <div className="flow-root pt-14 lg:p-16 -my-8 divide-y divide-gray-100">
        <Tab
          Q='What is crypto marketing?'
          A='Crypto marketing is the practice of promoting and generating demand for a unique cryptocurrency, NFT, or blockchain technology. Marketing crypto requires a greater understanding of the sector, technology, and audience. Marketing strategies such as content creation, SEO, PPC, etc., are all executed to create credibility in the community.          '
        />

<Tab
          Q='What makes crypto marketing different from traditional marketing?'
          A='Blockchain technology and cryptocurrency is still relatively new phenomenon. Marketers, technologists, investors, and everyday users are still trying to understand its full utility and use, making advertising, promoting, and creating demand for this technology much more difficult.'
        />

<Tab
          Q='Why is Round Table Network the best choice as your crypto parntner?'
          A='Round Table Network is one of the top Crypto Network in the world. We have years of experience in NFT marketing, Crypto, and Blockchain technology. Our growth experts are already working with numerous companies in the crypto space to increase token sales, improve community management, and turn their brand into a crypto influencer. We are doing rapid experimentations, channel assessment, market research, and other tactics to understand what works for this technology. Working with Round Table Network ensures you get the latest proven strategies and frameworks in your Twitter campaigns.'
        />

<Tab
          Q='Why is marketing in Crypto challenging?'
          A='Since blockchain technology and crypto are relatively new sectors, the biggest challenge in crypto marketing is that we don’t know with 100% certainty what works. In this case, you need a cutting edge crypto network that tests fast, keeps up with trends and is obsessed with the crypto space. Round Table Network has partnered with crypto companies and is already ahead of the curve in crypto marketing.

          '
        />

      </div>
  </div>
</section>
    );
}

function Tab(
  {
    Q,
    A,
  }:{
    Q?:string;
    A?:string;
  }
){
  return(
    <div className="">
    <details className="group shrink-0 py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
            >
              <h2 className="text-2xl font-semibold">
                {Q}
              </h2>

              <span className="relative h-5 w-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-lg leading-relaxed text-gray-200">
              {A}
            </p>
          </details>
</div>
  );
}