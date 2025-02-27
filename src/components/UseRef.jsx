import { useRef } from "react"

const UseRef = () => {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <div className="grid justify-items-center ">
        <h1>UseRef</h1>

        <div>
        <input
          className="border-2 border-gray-400 p-4 rounded-[10px]"
          ref={inputRef} type="text" placeholder="Enter your name" />

        <button onMouseOver={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" style={{ marginTop: '1rem' }
        }>Focus</button>
        </div>
       
      </div>
    </>
  )
}

export default UseRef