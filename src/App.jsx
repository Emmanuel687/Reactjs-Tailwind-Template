import Header from "./components/Header";

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
    </>
  )
}

export default App
