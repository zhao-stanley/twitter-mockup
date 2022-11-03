import HomeRow from "../../components/home/HomeRow";
import willy from "../../public/willy.jpg";
import Image from "next/image";
import ActionRow from "./ActionRow";

export default function TopBlock() {
  return (
    <div className="flex flex-col gap-y-2 pb-4 border-b-[1px] w-full items-end">
      <HomeRow />
      <div className="hidden flex-col w-full lg:flex">
        <div className="px-4 flex flex-row gap-x-4 items-center">
          <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full hover:brightness-90 duration-300 transition ease-in-out">
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
            <input
              type="text"
              className="bg-transparent text-xl placeholder-gray-600 focus:outline-none py-3 w-full"
              placeholder="What's happening?"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-between items-center w-[90%] px-4">
        <div className="w-full flex flex-row">
          <ActionRow />
        </div>
        <button className="w-fit cursor-pointer hover:brightness-[90%] transition ease-in-out px-4 py-2 rounded-full bg-blue-400 text-white font-bold text-center">
          <span className="hidden lg:block text-sm">Tweet</span>
        </button>
      </div>
    </div>
  );
}
