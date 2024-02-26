import { BiHomeCircle } from "react-icons/bi";

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: BiHomeCircle
  }
]

const  Home = () => {
    return (
        <div className="w-full  h-full flex  justiy-centerr items-center relative bg-black">
          <div className="max-w-screen-lg w-full flex relative">
            {/* Left section */}
            <section className="fixed w-72 flex fflex-col">

            </section>
            <div>Home timeline</div>
            <div>right section</div>
          </div>
        </div>
    )
}

export default Home;