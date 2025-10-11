import { useMockEngineData } from "../hooks/useMockEngineData"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import GaugeComponent from "react-gauge-component"
import {Card, CardContent} from "@/components/ui/card"

export default function EngineStatus() {
  const data = useMockEngineData()

  const chartData = Array.from({ length: 10 }).map((_, i) => ({
    time: i,
    power: data.power + Math.sin(i) * 5,
  }))

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-bridge-dark min-h-screen text-white">
      {/* Power Gauge */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Power (kW)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.power.toFixed(1)}</p>
          <GaugeComponent
            value={data.power}
            minValue={0}
            maxValue={2000}
            type="semicircle"
            arc={{
              width: 0.3,
              padding: 0.02,
              cornerRadius: 1,
              gradient: true,
              subArcs: [
                { limit: 1000, color: "#00C48C" },
                { limit: 1500, color: "#FFA500" },
                { limit: 2000, color: "#FF3B30" },
              ],
            }}
            labels={{
              valueLabel: {
                formatTextValue: (value: number) => `${value.toFixed(0)} kW`,
                style: { fill: "#00AEEF", fontSize: "1.25rem", fontWeight: "bold" },
              },
              tickLabels: {
                type: "inner",
                defaultTickValueConfig: {
                  formatTextValue: (v: number) => v.toString(),
                  style: { fill: "#ffffff", fontSize: "0.75rem" },
                },
              },
            }}
            pointer={{
              color: "#00AEEF",
              length: 0.8,
              width: 6,
              elastic: true,
            }}
          />
        </CardContent>
      </Card>

      {/* Voltage */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Voltage (V)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.voltage.toFixed(1)}</p>
        </CardContent>
      </Card>

      {/* Current */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Current (A)</h3>
          <p className="text-3xl font-bold text-bridge-warning">{data.current.toFixed(1)}</p>
        </CardContent>
      </Card>

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p>
        </CardContent>
      </Card>

      {/* Power Trend */}
      <Card className="col-span-2 lg:col-span-4 bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg mt-4">
        <CardContent className="p-4">
          <h3 className="font-semibold text-bridge-accent mb-4">Power Trend (kW)</h3>
          <div className="overflow-x-auto">
            <LineChart width={600} height={250} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#004080" />
              <XAxis dataKey="time" stroke="#00AEEF" />
              <YAxis stroke="#00AEEF" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="power"
                stroke="#00AEEF"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
