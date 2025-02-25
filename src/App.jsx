import Header from "./components/Header";
import Events from "./components/Events";

function App() {

  const navbarLinks = [{
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },

  {
    name: 'Services',
    link: '/services'
  },]

  return (
    <>
      <Header>
        {
          navbarLinks.map((link, index) => (
            <a key={index} href={link.link} className="text-gray-300 hover:text-white ">{link.name}</a>
          ))
        }
      </Header>

      <Events />
    </>
  )
}

export default App
