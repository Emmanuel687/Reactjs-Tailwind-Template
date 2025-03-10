import Header from "./components/Header";
import Events from "./components/Events";
import UseRef from "./components/useRef";
import Card from "./components/Card";
import UseEffect from "./components/UseEffect";
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
        {/* <Header>
        </Header> */}

        {/* Events Start */}
        {/* <Card width={100}>
          <Events />
        </Card> */}
        {/* Events End */}


        {/* UseRef Hook Start */}
        {/* <Card width={100}>
          <div className="mt-10">
            <UseRef />

          </div>
        </Card> */}
        {/* UseRef Hook End */}

        {/* useEffect Hook Start */}
          <div className="mt-10">
            <UseEffect />
          </div>
        {/* useEffect Hook End */}
        
      </div>

    </>
  )
}

export default App
