import { useMockEngineData } from "../hooks/useMockEngineData"

export default function EngineStatus() {
  const data = useMockEngineData()

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Power (kW)</h3>
        <p className="text-2xl text-blue-600">{data.power.toFixed(1)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Voltage (V)</h3>
        <p className="text-2xl text-green-600">{data.voltage.toFixed(1)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Current (A)</h3>
        <p className="text-2xl text-orange-600">{data.current.toFixed(1)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Speed (RPM)</h3>
        <p className="text-2xl text-red-600">{data.speed.toFixed(0)}</p>
      </div>
    </div>
  )
}
