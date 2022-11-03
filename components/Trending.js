import trending from "../data/trending";
import Link from "next/link";

export default function Trending() {
  return (
    <section className="w-full h-fit px-8 sticky top-1 flex-col max-w-[400px] hidden lg:flex gap-y-4">
      <div className="flex flex-row items-center gap-x-3 px-5 py-2 rounded-full bg-gray-100 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 stroke-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          className="bg-transparent focus:outline-none placeholder:text-gray-600 placeholder:text-sm w-full"
          placeholder="Search Twitter"
        />
      </div>
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        <h1 className="px-4 py-3 text-lg font-extrabold">
          What&#39;s happening
        </h1>
        <ul>
          {trending.map((t, key) => (
            <li
              className="hover:bg-gray-200 flex flex-col px-4 py-3 font-semibold transition ease-in-out leading-5 cursor-pointer"
              key={key}
            >
              <span className="text-xs font-normal">{t.tag} · Trending</span>
              {t.title}
              <span className="text-xs font-normal mt-1">
                {t.tweets} Tweets
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="https://github.com/zhao-stanley/mocktwitter" target="_blank">
        <h5 className="px-1 text-xs hover:text-blue-400 transition ease-in-out">
          Twitter Mockup · Created by Stanley Zhao 2022
        </h5>
      </Link>
    </section>
  );
}
