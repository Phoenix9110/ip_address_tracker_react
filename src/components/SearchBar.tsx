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
  const [error, setError] = useState('')
  const [, setFormIsValid] = useState(true)
 
  const ipEntry = useInput("")
  const dataAddress = useFetch(BASE_GEO_IP, ip)

  async function getLocalIP(): Promise<void> {
    try{
      const response = await fetch(FIND_IP);
      const data = await response.json();
      setInitialIP(data)
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
    if(dataAddress!==undefined){
      console.log(dataAddress)
      const ipData = transformData(dataAddress.data!)
      setIpInformation(ipData)
    }
  },[dataAddress])

  const handleSubmit = (event:React.FormEvent<EventTarget>): void => {
    event.preventDefault()
    if(checkInput(ipEntry.ipValue)){
      setIp(ipEntry.ipValue)
    }
  }

  const checkInput = (ipEntry:any) => {
    const regexIsValidIP = /(\d{1,3}\.){3}\d{1,3}/;
    const regexNotDigitOrDot = /^\.\d/

    if(ipEntry.match(regexIsValidIP)){
      setFormIsValid(true)
      setError("")
      return true
    }else{
      if (ipEntry.match(regexNotDigitOrDot)) {
        console.log(ipEntry)
        setFormIsValid(false)
        setError("Please Enter a Valid IPv4 (Only Allowed: numbers and dots)")
        return false
      }
      setFormIsValid(false)
      setError("Your entry is not valid (Ex: 8.8.8.8)")
      return false
    }
  }

  return (
    <>
      <section className="search_bar">
        <form onSubmit = {(event)=>handleSubmit(event)}>
          <input type="text" id="search_bar" placeholder="Search for any IP address or domain" value={ipEntry.ipValue} onChange={ipEntry.onChange}/>
          <button id="search_button">
            <img src='./icons/arrow.svg' alt='' />
          </button>
        </form>
      </section>
      {error && <section className="errors">
        <strong>Error</strong>
        <p>{error}</p>
      </section>}
    </>
  );
};



export default SearchBar;