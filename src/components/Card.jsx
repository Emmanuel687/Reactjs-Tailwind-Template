
const Card = ({ children ,width}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className={`bg-white p-8 rounded shadow-md w-[${width}%]`}>
          {children}
          
        </div>
      </div>
    </>
  )
}

export default Card