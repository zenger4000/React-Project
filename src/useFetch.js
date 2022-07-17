import { useState , useEffect } from "react";

const useFetch = (url)=>{
    
    const [data,setData] = useState(null); // or use [] to net get error while it fetches data , remove (blogs && below)
    const [error,setError] = useState(null);
    const [isPending,setisPending]=useState(true)

  useEffect(()=>{
    const abrtCtrlr = new AbortController();
    setTimeout(() => {
      fetch(url,{signal: abrtCtrlr.signal })
      .then(res=> {return res.json();})
      .then((data)=>{setData(data);setisPending(false);})
      .catch(err=>{
        if(err.name === 'AbortError') {
          console.log("Fetch Aborted");
        }
        else {setError(err.message);setisPending(false)}
      });
    }, 3000);
    
    

    return () => abrtCtrlr.abort();

    },[url]
  );

  return { data , error , isPending };

}

export default useFetch;
