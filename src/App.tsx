import Header from "./components/Header"
import Button  from "./components/Button"

import icon from "./assets/icon.svg"
import bookmarkIcon from "./assets/bookmark-icon.svg"
import Card from "./components/Card"

function App() {

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="max-w-[730px] m-6 md:m-auto  relative bottom-15">
        <div className="border border-border bg-white rounded-lg mb-6 p-7 md:p-12">
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

        <div className="border border-border bg-white rounded-lg mb-6 p-7 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:pr-16">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">$89,914</span>
              <span className="text-txt text-sm">of $100,000 backed</span>
            </div>

            <svg className="hidden md:inline" width="1" height="63" viewBox="0 0 1 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.15" width="1" height="63" fill="black"/>
            </svg>

            <svg className="md:hidden mt-6 mb-6" width="80" height="1" viewBox="0 0 80 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" opacity="0.15" width="80" height="1" fill="black"/>
            </svg>


            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">5,007</span>
              <span className="text-txt text-sm">total backers</span>
            </div>

            <svg className="hidden md:inline" width="1" height="63" viewBox="0 0 1 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.15" width="1" height="63" fill="black"/>
            </svg>

            <svg className="md:hidden mt-6 mb-6" width="80" height="1" viewBox="0 0 80 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle" opacity="0.15" width="80" height="1" fill="black"/>
            </svg>
            
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">56</span>
              <span className="text-txt text-sm">days left</span>
            </div>
          </div>

    
          <svg className="max-w-full" width="634" height="12" viewBox="0 0 634 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.05" width="634" height="12" rx="6" fill="#2F2F2F"/>
            <rect width="496" height="12" rx="6" fill="#3CB3AB"/>
          </svg>

        </div>

        <div className="border border-border bg-white rounded-lg mb-6 p-7 md:p-12">
          <h2 className="text-xl font-bold mb-8">About this project</h2>
          <p className="text-txt">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish 
            platform that elevates your screen to a more comfortable viewing height. 
            Placing your monitor at eye level has the potential to improve your posture 
            and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className="text-txt mt-7 mb-10">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space 
            below your computer to allow notepads, pens, and USB drives to be stored under the stand.
          </p>

          <Card 
            title="Bamboo Stand"
            pledge={25}
            description="You get an ergonomic stand made of natural bamboo. 
            You've helped us launch our promotional campaign, and you’ll 
            be added to a special Backer member list."
            left={101}
          />

          <Card 
            title="Black Edition Stand"
            pledge={75}
            description="You get a Black Special Edition computer stand and a personal thank you. 
            You’ll be added to our Backer member list. Shipping is included."
            left={64}
          />

          <Card 
            title="Mahogany Special Edition"
            pledge={200}
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, 
            and a personal thank you. You’ll be added to our Backer member list. Shipping is included. "
            left={0}
          />
          
        </div>

      </div>
    </div>
  )
}

export default App
