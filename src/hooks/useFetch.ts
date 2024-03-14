import {useState, useEffect } from "react"

export default function useFetch(url:string, ipAddress=null){
  const [data, setData] = useState()
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    console.log('newIP',ipAddress)
    if(ipAddress!==null){
      const newUrl = url+ipAddress
      fetchData(newUrl)
      // console.log(newUrl)
    }
  }, [url, ipAddress])

  async function fetchData(url:string): Promise<void> {
    try{
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
    }catch(err:any){
      setError(err)
    }finally{
      setLoading(false)
    }
  }
  return { data, error, loading }
}

// const response = await fetch('https://api.ipify.org?format=json');
// const { ip } = await response.json();
// this.ipAddress = ip;