import { useEffect, useState } from "react"
import type { EngineData, EngineDataRQ } from "@/features/engine/types"

export function useMockEngineData() {
  const [data, setData] = useState<EngineData>({
    power: 0,
    voltage: 440,
    current: 0,
    frequency: 60,
    speed: 0,
    timestamp: new Date().toISOString()
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        power: Math.random() * 500,
        voltage: 440 * Math.random() + 5,
        current: Math.random() * 800,
        frequency: 60 * Math.random() + 2,
        speed: 1500 + Math.random() * 100,
        timestamp: new Date().toISOString()
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return data
}

export function useMockEngineDataRQ(name: string) {
  const [data, setData] = useState<EngineDataRQ>({
    id: `mock-${name}`,
    name,
    rpm: 720,
    load: 65,
    temperature: {
      exhaust: 350,
      coolant: 85,
      lubeOil: 78,
    },
    pressure: {
      fuel: 6.5,
      lubeOil: 3.2,
      air: 2.4,
    },
    voltage: 440,
    current: 120,
    power: 2500,
    status: "Running",
    updatedAt: new Date().toISOString(),
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        rpm: 600 * Math.random() + 200,
        load: 60 * Math.random() + 20,
        temperature: {
          exhaust: 300 * Math.random() + 100,
          coolant: 80 * Math.random() + 20,
          lubeOil: 70 * Math.random() + 30,
        },
        pressure: {
          fuel: 7 * Math.random() + 3,
          lubeOil: 3 * Math.random() + 2,
          air: 2 * Math.random() + 3
        },
        voltage: 440 * Math.random() + 5,
        current: 100 * Math.random() + 50,
        power: 2200 * Math.random() + 400,
      }))
    }, 2000) 

    return () => clearInterval(interval)
  }, [])

  return data
}
