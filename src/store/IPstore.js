import { create } from 'zustand'



export const ipStore = create((set) => ({
  ip: '',
  setIp: (ip) => set({ip}),
  ipInformation: [],
  setIpInformation: (ipInformation) => set({ipInformation})
}))
