import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="sticky top-0 flex w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className="border-t border-b border-gray-600 px-4 py-4 flex space-x-2 items-start h-32">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col w-full h-full">
              <input
                type="text"
                className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent p-4 outline-none border-none"
                placeholder="What's happening"
              />
              <div className="flex justify-end mt-2">
                <button className="rounded-full bg-primary px-4 py-1 text-lg font-bold hover:bg-opacity-70 transition duration-200">
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border-b border-gray-600 p-4 flex space-x-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1">
                      <div className="font-bold">Michael</div>
                      <div className="text-gray-500">@michael_liman</div>
                      <BsDot className="text-gray-500" />
                      <div className="text-gray-500">1 hour ago</div>
                    </div>
                    <BsThreeDots className="text-gray-500" />
                  </div>
                  <div className="text-white text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis.
                  </div>
                  <div className="bg-slate-400 w-full h-96 rounded-xl mt-2"></div>
                  <div className="flex items-center justify-between mt-2 w-full">
                    <div className="flex space-x-6">
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <BsChat />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineRetweet />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineHeart />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <IoStatsChart />
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <IoShareOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent