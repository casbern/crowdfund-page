import { MdMenu } from "react-icons/md";


const Header = () => {
  const navItems = [
    { name: 'About', href: '#' },
    { name: 'Discover', href: '#' },
    { name: 'Get Started', href: '#' },
  ]

  return (
    <div  className="bg-cover h-72 bg-[url('/hero-mobile.png')] md:bg-[url('/hero-desktop.png')]" >
      <nav className="flex items-center justify-between pt-12 max-w-[300px] md:max-w-[600px] lg:max-w-[966px] m-auto">
        <img src="./logo.svg" alt="Logo" />

        <MdMenu size={24} color="white" className="md:hidden" />

        <ul className="hidden md:flex flex items-center gap-8 text-white font-comissioner font-[500]">
          {
            navItems.map((item, index) => {
              return (
                <li key={index} className="hover:underline ">
                  <a href={item.href}>{item.name}</a>
                </li>
              )
            })
          }
          
        </ul>
      </nav>
    </div>
  )
}

export default Header