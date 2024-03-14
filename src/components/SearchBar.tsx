import React from "react";
import useFetch  from "@/hooks/useFetch"
import useInput from "@/hooks/useInput"
import transformData from "@/components/transformData"
import { BASE_GEO_IP, FIND_IP } from "@/constants/urls";
import { ipStore } from "@/store/IPstore"
import { useEffect, useState } from "react"


const SearchBar: React.FC = () => {
  const ip = ipStore(state => state.ip)
  const setIp = ipStore((state:any) => state.setIp)
  const setIpInformation = ipStore((state:any) => state.setIpInformation)
  const [initialIP, setInitialIP] = useState(null)
  const ipEntry = useInput("")
  const dataAddress = useFetch(BASE_GEO_IP, ip)


  async function getLocalIP(): Promise<void> {
    try{
      const response = await fetch(FIND_IP);
      const data = await response.json();
      setInitialIP (data.ip)
    }catch(err:any){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(initialIP===null){
      getLocalIP()
    }
  },[])

  useEffect(()=>{
    const ipData = transformData(dataAddress.data)
    setIpInformation(ipData)
  },[dataAddress])

  const handleSubmit = (event:React.FormEvent<EventTarget>): void => {
    setIp(ipEntry.ipValue)
    console.log('handlesubmit');
    event.preventDefault()
  }

  return (
    <section className="search_bar">
      <form onSubmit = {(event)=>handleSubmit(event)}>
        <input type="text" id="search_bar" placeholder="Search for any IP address or domain" value={ipEntry.ipValue} onChange={ipEntry.onChange}/>
        <button id="search_button">
          <img src='./icons/arrow.svg' alt='' />
        </button>
      </form>
    </section>
  );
};



export default SearchBar;