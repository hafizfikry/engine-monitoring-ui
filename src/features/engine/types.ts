export interface EngineData {
    power: number
    voltage: number
    current: number
    frequency: number
    speed: number
    timestamp: string
}

export interface GaugeComponentType {
    value: number
    maxValue: number
    type?: "radial"
    mainColor: string
}

export type EngineKeyType = "main" | "aux" | "emergency" | "shaft" | string
export type EngineNumber = 1 | 2 | 3 | 4 | number