import { create } from 'zustand'



export const ipStore = create((set) => ({
  ip: '',
  setIp: (ip) => set({ip}),
  ipInformation: {
    ip:'No Disponible',
    location:'No Disponible',
    timezone:'No Disponible',
    isp:'No Disponible'
  },
  setIpInformation: (ipInformation) => set({ipInformation})
}))
