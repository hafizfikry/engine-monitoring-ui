import { useMockEngineData } from "../hooks/useMockEngineData"
import {Card, CardContent} from "@/components/ui/card"
import EngineOverlay from "@/features/engine/components-engine/EngineOverlay"
import { GaugeCardEngine, GaugeEngine } from "@/features/engine/components-engine/GaugeCardEngine"

export default function EngineStatus() {
  const data = useMockEngineData()

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 bg-bridge-dark text-white items-stretch">
      {/* Power Gauge */}
      <GaugeCardEngine 
        title="Power (Kw)"
        gaugeComponentType={{
          value: data.power,
          maxValue: 500,
          mainColor: "#00AEEF"
        }}
      />

      {/* Voltage */}
      <GaugeCardEngine 
        title="Voltage (V)"
        gaugeComponentType={{
          value: data.voltage,
          maxValue: 500,
          mainColor: "#00AEEF"
        }}
      />

      {/* Current */}
      <GaugeCardEngine 
        title="Current (A)"
        gaugeComponentType={{
          value: data.current,
          maxValue: 700,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Frequency */}
      <GaugeCardEngine 
        title="Frequency (Hz)"
        gaugeComponentType={{
          type: "radial",
          value: data.frequency,
          maxValue: 60,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Speed */}
      <GaugeCardEngine 
        title="Speed (RPM)"
        gaugeComponentType={{
          value: data.speed,
          maxValue: 1800,
          mainColor: "#00AEEF"
        }}
      />

      {/* Info */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full col-span-2">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Data String</h3>
          <div className="w-auto h-auto flex justify-center">
            <table className="border-separate border-spacing-x-8">
              <thead>
                <tr>
                  <th className="text-left">Data</th>
                  <th className="text-left">Value</th>
                  <th className="text-left">Data</th>
                  <th className="text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
                <tr>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                  <td className="text-left">Data Name</td>
                  <td className="text-left text-blue-400">Value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full row-span-2">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto gap-y-2 xl:gap-y-6">
          <GaugeEngine
            title="Speed (RPM)"
            gaugeComponentType={{
              value: data.speed,
              maxValue: 1800,
              mainColor: "#00AEEF"
            }} 
          />
          <GaugeEngine
            title="Speed 2 (RPM)"
            gaugeComponentType={{
              value: data.speed,
              maxValue: 1800,
              mainColor: "#00AEEF"
            }} 
          />
        </CardContent>
      </Card>

      {/* Power Trend */}
      <Card className="col-span-2 lg:col-span-3 bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full mt-4 row-span-2">
        <CardContent className="p-4">
          <h3 className="font-semibold text-bridge-accent mb-4">Generator Engine</h3>
          <div className="w-auto h-auto flex justify-center">
            <EngineOverlay />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
