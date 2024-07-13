import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[72vw] w-full h-full flex relative border-1">
        <LeftSidebar />
        <MainComponent />
        <section className="w-[full] sticky top-2 right- mt-2 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search X"
                className="outline-none focus:border-primary focus:border bg-neutral-900/90 border-none w-full h-full rounded-xl py-4 pl-12 pr-4 peer"
              />
              <p className="peer-focus:visible invisible"></p>
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5 " />
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-950 my-4">
            <h3 className="font-bold text-xl my-2 px-4">What's happening</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-x transition-duration-200">
                  <div className="font-bold text-lg">#trending ${i + 1}</div>
                  <div className="text-xs text-neutral-400">10k</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-950 my-4">
            <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
            <div>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} 
                  className="hover:bg-white/10 p-4 flex  space-x-4 items-center last:rounded-b-x transition-duration-200"
                  >
                  <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                  <div className="flex flex-col 2">
                    <div>Other user</div>
                    <div>@user123</div>
                  </div>
                  <div>
                    <button className="rounded-full px-6 py-2 bg-white text-white text-neutral-950">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
