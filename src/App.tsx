import Header from "./components/Header"
import Button  from "./components/Button"

import icon from "./assets/icon.svg"
import bookmarkIcon from "./assets/bookmark-icon.svg"

function App() {

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="max-w-[730px] m-6 md:m-auto  relative bottom-15">
        <div className="border border-border bg-white rounded-lg mb-6 p-12">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <img src={icon} alt="icon"/>
          </div>
          <h1 className="text-center text-2xl font-bold  text-title">Mastercraft Bamboo Monitor Riser</h1>
          <p className="text-center text-txt mt-4">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="flex flex-col gap-6 sm:flex-row justify-between items-center mt-10">
            <Button>Back this project</Button>
              
            <a
              href="#"
              className="hidden md:flex relative items-center bg-gray-50 rounded-4xl text-txt font-bold pl-[72px] pr-6 h-[56px]"
            >
              <span className="absolute left-0 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-black">
                <img src={bookmarkIcon} alt="Bookmark Icon" />
              </span>
              Bookmark
            </a>

        
             <a
              href="#"
              className="flex md:hidden items-center justify-center bg-gray-50 rounded-full w-[56px] h-[56px]"
            >
              <img src={bookmarkIcon} alt="Bookmark Icon" />
            </a>

          </div>
        </div>

        <div className="border border-border bg-white rounded-lg mb-6 p-12">
          <h1 className="text-center text-2xl font-bold text-title">Mastercraft Bamboo Monitor Riser</h1>
          <p className="text-center text-txt mt-4">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
      </div>
    </div>
  )
}

export default App
