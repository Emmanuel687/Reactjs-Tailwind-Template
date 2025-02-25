import LogoName from "./LogoName"

const Header = ({ children }) => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <LogoName name={"ETech"} />
          </div>
          <div className="hidden md:flex space-x-4">
            {children}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              &#9776;
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header