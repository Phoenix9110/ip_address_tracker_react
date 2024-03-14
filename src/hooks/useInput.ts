import { useState } from "react"

const useInput = (initialValue='') => {
  const [ipValue, setIp] = useState(initialValue);

  const handleChange = (event:React.FormEvent<HTMLInputElement>) => {
    setIp(event.currentTarget.value);
  };
  return {
    ipValue,
    onChange: handleChange
  };
}

export default useInput