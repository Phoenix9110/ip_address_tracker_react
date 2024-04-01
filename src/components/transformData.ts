import { initialIPInformation } from '@/constants/initValues.ts'
import type { IPData } from '@/intefaces/ipLocation'
import type { ResumeData } from '@/intefaces/resumeData'

function transformData(data:IPData):ResumeData[] {
  if(data!==undefined){
    const {ip, location, as, isp} = data

    const ipItem:ResumeData = extractIPItem(ip)

    const locationItem:ResumeData = extractLocationItem(location, as)

    const timezoneItem:ResumeData = extractTimezoneItem(location)

    const ispItem:ResumeData = extractISPItem(isp)

    const coordinatesItem:ResumeData = extractCoordinatesItem(location)

    const ipInformation  = [
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

function extractIPItem(ip:any):ResumeData {
  return {
    item : 'ip',
    title: 'Ip address',
    content: ip,
    separator: true
  }
}
function extractLocationItem(location:any, as:any):ResumeData {
  let content = 'No Disponible'
  if (location?.country!=='ZZ') content = `${location?.region}, ${location?.country} ${as?.asn}`
  
  return {
    item : 'location',
    title: 'location',
    content: content, 
    separator: true
  }
}
function extractTimezoneItem(location:any):ResumeData {
  let content = 'No Disponible'
  if (location?.timezone!=='') content = `UTC ${location?.timezone}`
  
  return {
    item : 'timezone',
    title: 'timezone',
    content: content,
    separator: true
  }
}
function extractISPItem(isp:any):ResumeData {
  const content = (isp) ? isp: 'No Disponible'
  
  return {
    item : 'isp',
    title: 'isp',
    content: content,
    separator: false
  }
}
function extractCoordinatesItem(location:any):ResumeData {
  const {lat, lng} = location
  return {
    item : 'coordinates',
    title: 'coordinates',
    content: [lat,lng],
    separator: false
  }
}

export default transformData