import { useEffect, useState } from "react"
import type { EngineData } from "../types"

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
