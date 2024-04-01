import type { ResumeData } from "@/intefaces/resumeData"

export const initialIPInformation:ResumeData[] = [
  {
    item: 'ip',
    title: 'Ip address',
    content: 'No Disponible',
    separator: true
  },
  {
    item: 'location',
    title: 'location',
    content: 'No Disponible',
    separator: true
  },
  {
    item: 'timezone',
    title: 'timezone',
    content: 'No Disponible',
    separator: true
  },
  {
    item: 'isp',
    title: 'isp',
    content: 'No Disponible',
    separator: false
  },
  {
    item: 'coordinates',
    title: 'coordinates',
    content: [ 4.541, -74.05506 ],
    separator: false
  }
]