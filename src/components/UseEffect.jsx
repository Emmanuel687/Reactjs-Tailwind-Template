import { useEffect, useState } from "react";


const UseEffect = () => {

  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('all');


  const fetchCountries = async () => {
    
    const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    if(response.statusCode === 200){
    const country = await response.json();
  }
    setCountries(country);
  }

  const filterCountries = (country) =>{
    if(country.name.common === query){
      return country;
    }

  }
  

  useEffect(() => {
    fetchCountries();
  }, [query]);


  return (
    <>
      <div class="flex flex-col h-full bg-gray-100 p-6">
        {/* <!-- Search Header --> */}
        <div class="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">Country Explorer</h1>
          <div class="relative">
            <input
              type="text"
              placeholder="Search for a country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              class="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>

        {/* <!-- Country Cards Start--> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* <!-- South Georgia Card --> */}
          {
            countries.map((country) => {
              return (
                <div
                  class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ring-2 ring-blue-500"
                >


                  <div>
                    <div class="p-4 flex items-center">
                      <div class="mr-4 w-16 h-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={country.flags.png}
                          alt={country.name.common}
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 class="text-lg font-semibold text-gray-800">
                          {country.name.common}
                        </h2>
                        <p class="text-gray-600">
                          {country.name.official}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          {/* <!-- Grenada Card --> */}
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
          >
            <div class="p-4 flex items-center">
              <div class="mr-4 w-16 h-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://flagcdn.com/w320/gd.png"
                  alt="Flag of Grenada"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-800">Grenada</h2>
                <p class="text-gray-600">Grenada</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Country Cards End --> */}


        {/* <!-- Selected Country Details Start --> */}
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-6">
            <div class="mr-4 w-20 h-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src="https://flagcdn.com/w320/gs.png"
                alt="Flag of South Georgia"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800">South Georgia</h2>
              <p class="text-gray-600">South Georgia and the South Sandwich Islands</p>
            </div>
            <div class="ml-auto text-3xl">🇬🇸</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-2 text-gray-700">General Information</h3>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Capital:</span> King Edward Point
                </div>
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Region:</span> Antarctic
                </div>
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Subregion:</span> N/A
                </div>
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Population:</span> 30
                </div>
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Continent:</span> Antarctica
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2 text-gray-700">Language & Currency</h3>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="mb-2">
                  <span class="font-medium text-gray-700">Languages:</span> English
                </div>
                <h4 class="font-semibold mt-3 mb-1">Currencies</h4>
                <div class="pl-4 mb-2">
                  <p><span class="font-medium">Saint Helena pound</span> (SHP)</p>
                  <p>Symbol: £</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Selected Country Details End --> */}

      </div>
    </>
  )
}

export default UseEffect