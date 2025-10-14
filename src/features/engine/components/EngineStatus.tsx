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
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 bg-bridge-dark text-white items-stretch">
      {/* Power Gauge */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Power (kW)</h3>
          {/* <p className="text-3xl font-bold text-bridge-success">{data.power.toFixed(1)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={750}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 250, color: "#00FF9C", showTick: true }, 
                  { limit: 500, color: "#FFB800", showTick: true }, 
                  { limit: 750, color: "#FF4E4E", showTick: true },
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.power}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + 'Kw',
                  style: {
                    color: "#00FF9C", // ✅ ubah warna teks utama
                    textShadow: "0 0 6px black, 0 0 12px rgba(0,0,0,0.6)",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }
                },
                tickLabels: {
                  defaultTickValueConfig: {
                    style: {
                      textShadow: "black 0px 0px 0px, black 0px 0px 0em, black 0px 0px 0em",
                    }
                  }
                }
              }}
              pointer={{ elastic: true }}
              style={{ width: "100%", height: "auto", maxWidth: "250px"}}
            />
          </div>
        </CardContent>
      </Card>

      {/* Voltage */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Voltage (V)</h3>
          {/* <p className="text-3xl font-bold text-bridge-success">{data.voltage.toFixed(1)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            
          </div>
        </CardContent>
      </Card>

      {/* Current */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Current (A)</h3>
          <p className="text-3xl font-bold text-bridge-warning">{data.current.toFixed(1)}</p>
        </CardContent>
      </Card>

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p>
        </CardContent>
      </Card>

      {/* Frequency */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Frequency (Hz)</h3>
          <p className="text-3xl font-bold text-bridge-success">{data.frequency.toFixed(1)}</p>
          <div className="w-auto h-auto flex justify-center">

          </div>
        </CardContent>
      </Card>

      {/* Power Trend */}
      <Card className="col-span-2 lg:col-span-4 bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full mt-4">
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
