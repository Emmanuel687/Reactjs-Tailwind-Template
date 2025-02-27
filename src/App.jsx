import Header from "./components/Header";
import Events from "./components/Events";
import UseRef from "./components/useRef";
import Card from "./components/Card";
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

      <div>
        <Header>
          {
            navbarLinks.map((link, index) => (
              <a key={index} href={link.link} className="text-gray-300 hover:text-white ">{link.name}</a>
            ))
          }
        </Header>
        <Card width={100}>
          <Events />
        </Card>
        <Card width={100}>
          <div className="mt-10">
          <UseRef />

          </div>
        </Card>
      </div>

    </>
  )
}

export default App
