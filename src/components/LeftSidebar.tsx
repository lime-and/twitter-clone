import { BiHomeCircle, BiUser } from "react-icons/bi";
import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitterX } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { BsTwitter } from "react-icons/bs";
import Link from 'next/link';



const NAVIGATION_ITEMS = [
  {
    title: "X",
    icon: BsTwitterX
  },
  {
    title: "Home",
    icon: BiHomeCircle
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag
  },
  {
    title: "Notifications",
    icon: BsBell
  },
  {
    title: "Messages",
    icon: BsEnvelope
  },
  {
    title: "Profile",
    icon: BiUser 
  }
];
const LeftSidebar = () => {
  return (
    <section className="border-1 w-[20%] flex flex-col items-stretch h-screen px-4">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className="hover:bg-white/10 text-2xl transition durration-200 flex items-center justify-start w-fit space-x-4
              rounded-3xl py-2 px-6"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              {item.title !== "X" && <div>{item.title}</div>}
            </Link>
          ))}
          <button className="rounded-full rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition
          duration-200">
            Post
          </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 rounded-full bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition
          duration-200 w-full">
            <div className="flex item-center space-x-2">
              <div className="rounded-full bg-slate-400 w-12 h-12"></div>
              <div className="text-left text-sm" >
                <div className="font-semibold">Club Of Coders</div>
                <div className="text-xs">@clubasdf</div>
            </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
            </button>
        </section>
  )
}

export default LeftSidebar