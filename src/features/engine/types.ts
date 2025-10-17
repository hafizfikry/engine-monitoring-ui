export interface EngineData {
    power: number
    voltage: number
    current: number
    frequency: number
    speed: number
    timestamp: string
}

export interface EngineDataRQ {
    id: string,
    name: string,
    rpm: number,
    load: number,
    temperature: {
        exhaust: number,
        coolant: number,
        lubeOil: number
    },
    pressure: {
        fuel: number
        lubeOil: number,
        air: number
    },
    voltage: number,
    current: number,
    power: number,
    status: string,
    updatedAt: string
}

export interface GaugeComponentType {
    value: number
    maxValue: number
    type?: "radial"
    mainColor: string
}

export type EngineKeyType = "main" | "aux" | "emergency" | "shaft" | string
export type EngineNumber = 1 | 2 | 3 | 4 | number