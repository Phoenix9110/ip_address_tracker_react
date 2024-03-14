function transformData(data:object):object {
  console.log(data)

  if(data!==undefined){
    const {ip, location, as, isp} = data
    const locationIP = (location) ? `${location?.region}, ${location?.country} ${as?.asn}` : 'No Disponible'
    const timezone = (location) ? `UTC ${location?.timezone}` : 'No Disponible'

    const ipInformation = {
      ip:(ip) ? ip : 'No Disponible',
      location: locationIP,
      timezone: timezone,
      isp: (isp) ? isp: 'No Disponible'
    }
    console.log(ipInformation)
    return ipInformation
  }
  return {}
}

export default transformData