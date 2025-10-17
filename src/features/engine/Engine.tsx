import { useMockEngineData } from "./hooks/useMockEngineData"
import {Card, CardContent} from "@/components/ui/card"
import EngineOverlay from "@/features/engine/components/EngineOverlay"
import { GaugeCardEngine, GaugeEngine } from "@/features/engine/components/GaugeCardEngine"
// import { useEngineDataRQ } from "./hooks/useEngineDataRQ"

export default function Engine() {
  const data = useMockEngineData()
  // const { data, isLoading, error } = useEngineDataRQ(apiUrl)

  return (
    <div className="bg-bridge-dark text-white">

      {/* FO LO */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 items-stretch">
        <GaugeCardEngine 
          title="FO Inlet Pressure (Kg/cm2)"
          gaugeComponentType={{
            value: data.power,
            maxValue: 500,
            mainColor: "#00A31E"
          }}
        />

        <GaugeCardEngine 
          title="FO Filter Inlet Pressure (Kg/cm2)"
          gaugeComponentType={{
            value: data.voltage,
            maxValue: 500,
            mainColor: "#00A31E"
          }}
        />

        <GaugeCardEngine 
          title="FO Inlet Temperature (℃)"
          gaugeComponentType={{
            value: data.current,
            maxValue: 700,
            mainColor: "#00A31E"
          }}
        />

        <GaugeCardEngine 
          title="LO Inlet Pressure (kg/cm2)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#51B85F"
          }}
        />

        <GaugeCardEngine 
          title="LO Filter Inlet Pressure (kg/cm2)"
          gaugeComponentType={{
            value: data.frequency,
            maxValue: 60,
            mainColor: "#51B85F"
          }}
        />

        <GaugeCardEngine 
          title="LO Inlet Temperature (℃)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#51B85F"
          }}
        />
      </div>
      
      {/* HT LT */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 items-stretch">
      
        <GaugeCardEngine 
          title="HT Water Inlet Press (kg/cm2)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#47CEFF"
          }}
        />

        
        <GaugeCardEngine 
          title="HT Water Inlet Temp (℃)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#47CEFF"
          }}
        />

        <GaugeCardEngine 
          title="HT Water Outlet Temp (℃)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#47CEFF"
          }}
        />
        
        <GaugeCardEngine 
          title="LT Water Inlet Press (kg/cm2)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#00AEEF"
          }}
        />
        
        <GaugeCardEngine 
          title="LT Water Inlet Temp (℃)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#00AEEF"
          }}
        />
        
        <GaugeCardEngine 
          title="LT Water Outlet Temp (℃)"
          gaugeComponentType={{
            value: data.speed,
            maxValue: 1800,
            mainColor: "#00AEEF"
          }}
        />

      </div>

      {/* Generator Engine */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 items-stretch">
        {/* Info */}
        <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
          <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
            <h3 className="font-semibold text-bridge-accent mb-2">Turbo Charger</h3>
            <div className="w-auto h-auto flex justify-center">
              <table className="border-separate border-spacing-x-8">
                <thead>
                  <tr>
                    <th className="text-left">Data Name</th>
                    <th className="text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Exh. Gas Outlet</td>
                    <td className="text-left"><span className="text-blue-400">32.9</span><span className="ms-1">℃</span></td>
                  </tr>
                  <tr>
                    <td className="text-left">Exh. Gas Inlet A</td>
                    <td className="text-left"><span className="text-blue-400">32.9</span><span className="ms-1">℃</span></td>    
                  </tr>
                  <tr>
                    <td className="text-left">Exh. Gas Inlet B</td>
                    <td className="text-left"><span className="text-blue-400">32.9</span><span className="ms-1">℃</span></td>
                  </tr>
                  <tr>
                    <td className="text-left">TC LO Pressure</td>
                    <td className="text-left"><span className="text-blue-400">32.9</span><span className="ms-1">kg/cm2</span></td>
                  </tr>
                  <tr>
                    <td className="text-left">TC rpm (x10)</td>
                    <td className="text-left"><span className="text-blue-400">32</span><span className="ms-1">rpm</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full row-span-2">
          <CardContent className="p-4 flex flex-col items-center justify-center h-auto gap-y-2 xl:gap-y-6">
            <GaugeEngine
              title="Charge Air Pressure (kg/cm2)"
              gaugeComponentType={{
                value: data.speed,
                maxValue: 1800,
                mainColor: "#00AEEF"
              }} 
            />
            <GaugeEngine
              title="Charge Air Temp (℃)"
              gaugeComponentType={{
                value: data.speed,
                maxValue: 1800,
                mainColor: "#00AEEF"
              }} 
            />
          </CardContent>
        </Card>

        {/* Engine Overlay */}
        <Card className="sm:col-span-1 md:col-span-2 lg:col-span-3 bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full row-span-2">
          <CardContent className="p-4">
            <h3 className="font-semibold text-bridge-accent mb-4">Generator Engine</h3>
            <div className="w-auto h-auto flex justify-center">
              <EngineOverlay />
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}
