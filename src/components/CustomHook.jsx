import useFetch from '../hooks/useFetch';
const CustomHook = () => {
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {
        isLoading && (data.length === 0) ? <h1>Loading...</h1> :
          data.map((item, index) => {
            return (
              <>

                <h1 key={index}>{item.title}</h1>
                <ul className="bg-white rounded-lg shadow divide-y divide-gray-100">
                  {data.map((todo) => (
                    <li
                      key={todo.id}
                      className={`px-6 py-4 hover:bg-gray-50 transition-colors ${todo.completed ? 'bg-blue-50' : ''
                        }`}
                    >
                      {todo.title}
                    </li>
                  ))}
                </ul>
              </>


            )
          })
      }

    </div>
  )
}

export default CustomHook