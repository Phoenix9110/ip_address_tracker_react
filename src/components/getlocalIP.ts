import { FIND_IP } from "@/constants/urls"

async function getLocalIP(): Promise<void> {
  try{
    const response = await fetch(FIND_IP);
    const data = await response.json();
    return (data)
  }catch(err:any){
    return (err)
  }
}

export default getLocalIP







