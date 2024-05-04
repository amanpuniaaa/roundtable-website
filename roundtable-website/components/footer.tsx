import CTAButton from "./ctabutton";
import Newsletter from './newsletter';


export default function Footer(){

    return(
<>   

<footer className="bg-zinc-950 ">
  <div className="mx-auto max-w-screen-4xl max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
  <Newsletter/>


    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
      <p className="mt-4 text-center font-extrabold uppercase text-2xl text-white lg:text-left lg:text-3xl">
          Round Table Network 
        </p>
        <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
          RoundTable is a pioneering Web3 media group dedicated to delivering cutting-edge news and educational 
          content spanning FinTech, Web3, Gaming, TradFi, DeFi, and AI.
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">

          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>


        </div>
      </div>

      <div
        className="grid grid-cols-1 mt-4 gap-8 text-center lg:grid-cols-3 lg:text-left"
      >
        <div>
          <strong className="font-extrabold text-xl text-gray-900 dark:text-white">
            Expertise
          </strong>

          <ul className="mt-3 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:hover-underline-animation dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Protocols
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                DEXs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                RWA 
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                DApps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-extrabold text-xl text-gray-900 dark:text-white">
            Company
          </strong>

          <ul className="mt-3 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Team
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-extrabold text-xl text-gray-900 dark:text-white">
            Support
          </strong>

          <ul className="mt-3 space-y-1">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Live Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-white pt-8 dark:border-gray-800">
      <p className="text-center text-xs/relaxed text-white dark:text-gray-400">
       RoundTable Network  © 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>

</>

);

}

