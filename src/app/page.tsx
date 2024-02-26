import { BiHomeCircle, BiUser } from "react-icons/bi";
import {BsBell, BsBookmark} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { BsTwitter } from "react-icons/bs";
import Link from 'next/link';
import { BsTwitterX } from "react-icons/bs";



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
    icon: HiEnvelope
  },
  {
    title: "Profile",
    icon: BiUser 
  }
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar for navigation/header */}
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Post
          </button>
        </section>
        {/*<main>Home timeline</main>
        <section>right section</section>*/}
      </div>
    </div>
  );
};

export default Home;