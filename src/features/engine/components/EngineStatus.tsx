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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-9 p-2 bg-bridge-dark min-h-screen text-white">
      {/* Power Gauge */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Power (kW)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.power.toFixed(1)}</p>
          <div className="w-auto">
            <GaugeComponent
              className="grafana-gauge"
              minValue={0}
              maxValue={750}
              type="semicircle"
              arc={{
                width: 0.3,
                padding: 0.02,
                cornerRadius: 1,
                gradient: true,
                subArcs: [
                  { limit: 150, color: "#00C48C" },
                  { limit: 450, color: "#FFA500" },
                  { limit: 750, color: "#FF3B30" },
                ],
              }}
              value={data.power}
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
              style={{ width: "100%", height: "auto"}}
            />
          </div>
        </CardContent>
      </Card>

      {/* Voltage */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Voltage (V)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.voltage.toFixed(1)}</p>
          <div className="w-auto">
            <GaugeComponent
              minValue={400}
              maxValue={500}
              value={data.voltage}
              type="radial"
              labels={{
                tickLabels: {
                  type: "inner",
                  ticks: [
                    { value: 420 },
                    { value: 440 },
                    { value: 460 },
                    { value: 480 },
                    { value: 500 }
                  ]
                }
              }}
              arc={{
                colorArray: ['#5BE12C','#EA4228'],
                subArcs: [{limit: 420}, {limit: 440}, {limit: 460}, {limit: 480}, {limit: 500}],
                padding: 0.02,
                width: 0.3
              }}
              pointer={{
                elastic: true,
                animationDelay: 0
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Current */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Current (A)</h3>
          <p className="text-3xl font-bold text-bridge-warning">{data.current.toFixed(1)}</p>
        </CardContent>
      </Card>

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p>
        </CardContent>
      </Card>

      {/* Frequency */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="font-semibold text-bridge-accent mb-2">Frequency (Hz)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.frequency.toFixed(1)}</p>
          <div className="w-auto">
            <GaugeComponent
              id="gauge-component4"
              arc={{
                gradient: true,
                width: 0.15,
                padding: 0,
                subArcs: [
                  {
                    limit: 15,
                    color: '#EA4228',
                    showTick: true
                  },
                  {
                    limit: 37,
                    color: '#F5CD19',
                    showTick: true
                  },
                  {
                    limit: 58,
                    color: '#5BE12C',
                    showTick: true
                  },
                  {
                    limit: 75,
                    color: '#F5CD19',
                    showTick: true
                  },
                  { color: '#EA4228' }
                ]
              }}
              value={data.frequency}
              pointer={{type: "arrow", elastic: true}}
            />
          </div>
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
