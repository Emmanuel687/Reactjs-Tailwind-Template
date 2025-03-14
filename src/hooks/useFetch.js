const useFetch = (url)=>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    setError(null);
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
        setData(data);
        setLoading(false);
      })
     .catch(error=>{
        setError(error);
        setLoading(false);
      });
  }, []);

  return {data, loading, error};

}
export default useFetch