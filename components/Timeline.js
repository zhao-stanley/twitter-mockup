import willy from "../public/willy.jpg";
import TopBlock from "../components/home/TopBlock";
import Image from "next/image";
import blogData from "../data/tweets";

export default function Timeline() {
  return (
    <section className="flex relative flex-col w-full max-w-[600px] border-x-[1px]">
      <TopBlock />
      {blogData.map((e, key) => (
        <div
          className="flex relative flex-row gap-x-2 w-full px-4 py-3 transition duration-300 border-b-[1px] hover:bg-gray-100 cursor-pointer"
          key={key}
        >
          <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={willy}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              draggable="false"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-sm font-semibold flex items-center">
              {e.author}
              {e.verified ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 inline-block fill-blue-400 ml-[0.125rem]"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : null}
              <span className="ml-1 inline-block text-sm font-normal text-gray-700 items-center">
                @{e.user} · {e.date}
              </span>
            </h1>
            <div className="w-full flex flex-col gap-y-2">
              <p className="text-sm">{e.desc}</p>
              {e.embed ? (
                <div className="relative w-full h-72 flex-shrink-0 shadow-md overflow-hidden rounded-xl">
                  <Image
                    src={e.embed}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    draggable="false"
                    alt="Image Embed"
                  />
                </div>
              ) : null}
              <div className="flex flex-row justify-between w-[85%]">
                <div className="flex flex-row gap-x-1 items-center [&_span]:hover:text-blue-400 [&_svg]:hover:stroke-blue-400 [&_div]:hover:bg-blue-200 transition ease-in-out">
                  <div className="p-[0.4rem] rounded-full overflow-hidden transition ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 transition ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition ease-in-out">
                    {e.comments}
                  </span>
                </div>
                <div className="flex flex-row gap-x-1 items-center [&_span]:hover:text-green-600 [&_svg]:hover:stroke-green-600 [&_div]:hover:bg-[#e2f0eb] transition ease-in-out">
                  <div className="p-[0.4rem] rounded-full overflow-hidden transition ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 transition ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition ease-in-out">
                    {e.retweets}
                  </span>
                </div>
                <div className="flex flex-row gap-x-1 items-center [&_span]:hover:text-red-400 [&_svg]:hover:stroke-red-400 [&_div]:hover:bg-red-200 transition ease-in-out">
                  <div className="p-[0.4rem] rounded-full overflow-hidden transition ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 transition ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition ease-in-out">
                    {e.likes}
                  </span>
                </div>
                <div className="flex flex-row gap-x-1 items-center [&_span]:hover:text-blue-400 [&_svg]:hover:stroke-blue-400 [&_div]:hover:bg-blue-200 transition ease-in-out">
                  <div className="p-[0.4rem] rounded-full overflow-hidden transition ease-in-out duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 transition ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
