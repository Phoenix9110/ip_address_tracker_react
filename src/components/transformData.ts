import {initialIPInformation} from '@/constants/initValues'

function transformData(data:object):array {
  if(data!==undefined){
    const {ip, location, as, isp} = data

    const ipItem = extractIPItem(ip)

    const locationItem = extractLocationItem(location, as)

    const timezoneItem = extractTimezoneItem(location)

    const ispItem = extractISPItem(isp)

    const coordinatesItem = extractCoordinatesItem(location)

    const ipInformation = [
      ipItem,
      locationItem,
      timezoneItem,
      ispItem,
      coordinatesItem
    ]
    
    return ipInformation
  }
  return initialIPInformation
}

function extractIPItem(ip):object {
  return {
    item : 'ip',
    title: 'Ip address',
    content: ip,
    separator: true
  }
}
function extractLocationItem(location, as):object {
  let content = 'No Disponible'
  if (location?.country!=='ZZ') content = `${location?.region}, ${location?.country} ${as?.asn}`
  
  return {
    item : 'location',
    title: 'location',
    content: content, 
    separator: true
  }
}
function extractTimezoneItem(location):object {
  let content = 'No Disponible'
  if (location?.timezone!=='') content = `UTC ${location?.timezone}`
  
  return {
    item : 'timezone',
    title: 'timezone',
    content: content,
    separator: true
  }
}
function extractISPItem(isp):object {
  const content = (isp) ? isp: 'No Disponible'
  
  return {
    item : 'isp',
    title: 'isp',
    content: content,
    separator: false
  }
}
function extractCoordinatesItem(location):object {
  const {lat, lng} = location
  return {
    item : 'coordinates',
    title: 'coordinates',
    content: [lat,lng],
    separator: false
  }
}

export default transformData