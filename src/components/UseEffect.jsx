import { useEffect, useState } from "react";


const UseEffect = () => {

  // State Variables Start
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [query, setQuery] = useState('all');

  // State Variables End


  // Fetch Countries Function Start

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const data = await response.json();
  
        if (data.message === 'Page Not Found') {
          setCountries([])
        }
        else {
          setCountries(data);
        }
      }
      catch (error) {
        console.log(error);
      }
    };

    fetchCountries();

    return () => {
      // cleanup function


    }
  }, [query]);
  
 
  // Fetch Countries Function End

  // Filter Country Function Start
  const filterCountry = (country) => {
    const filtered = countries.find(c => c.name?.common === country.name?.common)
    setFilteredCountry(filtered);
    console.log("Filtered", filtered);
  }
  // Filter Country Function End


 


  return (
<>
  <div className="flex flex-col h-full bg-gray-100 p-6">
    {/* Search Header Start */}
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Country Explorer</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            onClick={() => setQuery('')}
          >
            ✕
          </button>
        )}
      </div>
    </div>
    {/* Search Header End */}

    {/* Country Cards Start */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {countries.map((country) => (
        <div
          key={country.cca3 || country.name?.common}
          className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
            filteredCountry && filteredCountry.cca3 === country.cca3 ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => filterCountry(country)}
        >
          <div className="p-4 flex items-center">
            <div className="mr-4 w-16 h-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={country.flags?.png || "https://via.placeholder.com/320x240"}
                alt={country.name?.common || "Country flag"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {country.name?.common || "Country"}
              </h2>
              <p className="text-gray-600">
                {country.name?.official || "Official name"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Country Cards End */}

    {/* Selected Country Details Start */}
    {filteredCountry && (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="mr-4 w-20 h-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={filteredCountry.flags?.png || "https://via.placeholder.com/320x240"}
              alt={`Flag of ${filteredCountry.name?.common || 'Selected country'}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredCountry.name?.common || "Selected country"}
            </h2>
            <p className="text-gray-600">
              {filteredCountry.name?.official || ""}
            </p>
          </div>
          <div className="ml-auto text-3xl">{filteredCountry.flag || "🏳️"}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">General Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-2">
                <span className="font-medium text-gray-700">Capital: </span>
                {filteredCountry.capital?.[0] || "N/A"}
              </div>
              <div className="mb-2">
                <span className="font-medium text-gray-700">Region: </span>
                {filteredCountry.region || "N/A"}
              </div>
              <div className="mb-2">
                <span className="font-medium text-gray-700">Subregion: </span>
                {filteredCountry.subregion || "N/A"}
              </div>
              <div className="mb-2">
                <span className="font-medium text-gray-700">Population: </span>
                {filteredCountry.population?.toLocaleString() || "N/A"}
              </div>
              <div className="mb-2">
                <span className="font-medium text-gray-700">Continent: </span>
                {filteredCountry.continents?.[0] || "N/A"}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Language & Currency</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-2">
                <span className="font-medium text-gray-700">Languages: </span>
                {filteredCountry.languages ? 
                  Object.values(filteredCountry.languages).join(", ") : 
                  "N/A"}
              </div>
              <h4 className="font-semibold mt-3 mb-1">Currencies</h4>
              {filteredCountry.currencies ? (
                Object.entries(filteredCountry.currencies).map(([code, currency]) => (
                  <div key={code} className="pl-4 mb-2">
                    <p>
                      <span className="font-medium">{currency.name}</span> ({code})
                    </p>
                    <p>Symbol: {currency.symbol || "N/A"}</p>
                  </div>
                ))
              ) : (
                <div className="pl-4 mb-2">
                  <p>No currency information available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
    {/* Selected Country Details End */}
  </div>
</>
  )
}

export default UseEffect