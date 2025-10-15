import { useMockEngineData } from "../hooks/useMockEngineData"
import GaugeComponent from "react-gauge-component"
import {Card, CardContent} from "@/components/ui/card"
import EngineOverlay from "@/components/EngineOverlay"

export default function EngineStatus() {
  const data = useMockEngineData()

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 p-2 bg-bridge-dark text-white items-stretch">
      {/* Power Gauge */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Power (Kw)</h3>
          {/* <p className="text-3xl font-bold text-bridge-success">{data.power.toFixed(1)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 75, color: "#00AEEF", showTick: true },
                  { limit: 150, color: "#00AEEF", showTick: true },
                  { limit: 225, color: "#00AEEF", showTick: true },
                  { limit: 300, color: "#00AEEF", showTick: true },
                  { limit: 375, color: "#00AEEF", showTick: true }, 
                  { limit: 450, color: "#00AEEF", showTick: true }, 
                  { limit: 500, color: "#FF4E4E", showTick: true }, 
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
                  formatTextValue: value => value + '',
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
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 75, color: "#00AEEF", showTick: true },
                  { limit: 150, color: "#00AEEF", showTick: true },
                  { limit: 225, color: "#00AEEF", showTick: true },
                  { limit: 300, color: "#00AEEF", showTick: true },
                  { limit: 375, color: "#00AEEF", showTick: true }, 
                  { limit: 450, color: "#00AEEF", showTick: true }, 
                  { limit: 500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.voltage}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Current */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Current (A)</h3>
          {/* <p className="text-3xl font-bold text-bridge-warning">{data.current.toFixed(1)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 75, color: "#00AEEF", showTick: true },
                  { limit: 150, color: "#00AEEF", showTick: true },
                  { limit: 225, color: "#00AEEF", showTick: true },
                  { limit: 300, color: "#00AEEF", showTick: true },
                  { limit: 375, color: "#00AEEF", showTick: true }, 
                  { limit: 450, color: "#00AEEF", showTick: true }, 
                  { limit: 500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Frequency */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Frequency (Hz)</h3>
          {/* <p className="text-3xl font-bold text-bridge-success">{data.frequency.toFixed(1)}</p> */}
          <div className="w-auto h-auto flex justify-center">
          <GaugeComponent
            value={Number(data.frequency.toFixed(1))}
            maxValue={60}
            type="radial"
            labels={{
              tickLabels: {
                type: "outer",
              },
              valueLabel: {
                style: {
                    color: "#00FF9C", // ✅ ubah warna teks utama
                    textShadow: "0 0 6px black, 0 0 12px rgba(0,0,0,0.6)",
                    fontWeight: "bold",
                    fontSize: "30px",
                }
              }
            }}
            arc={{
              // colorArray: ['#5BE12C','#EA4228'],
              subArcs: [
                {limit: 28, color: "#FF4E4E", showTick: true}, 
                {limit: 32, color: "#00AEEF", showTick: true}, 
                {limit: 60, color: "#FF4E4E", showTick: true}, 
              ],
              padding: 0.02,
              width: 0.3
            }}
            pointer={{
              elastic: true,
              animationDelay: 0
            }}
            style={{ width: "100%", height: "auto", maxWidth: "250px"}}
          />
          </div>
        </CardContent>
      </Card>

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Speed */}
      <Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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
        <CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">Speed (RPM)</h3>
          {/* <p className="text-3xl font-bold text-bridge-danger">{data.speed.toFixed(0)}</p> */}
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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
          <h3 className="font-semibold text-bridge-accent mb-2 mt-2">Speed (RPM)</h3>
          <div className="w-auto h-auto flex justify-center">
            <GaugeComponent
              id="simple-gauge"
              minValue={0}
              maxValue={1500}
              arc={{
                // colorArray: ["#00FF9C", "#FFB800", "#FF4E4E"], // default OpenBridge-style green → amber → red
                subArcs: [
                  { limit: 100, color: "#C2C2C2", showTick: true },
                  { limit: 500, color: "#00AEEF", showTick: true },
                  { limit: 850, color: "#00AEEF", showTick: true },
                  { limit: 1200, color: "#00AEEF", showTick: true },
                  { limit: 1400, color: "#00AEEF", showTick: true }, 
                  { limit: 1500, color: "#FF4E4E", showTick: true }, 
                  { color: '#EA4228' }
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={data.current}
              labels={{
                valueLabel: { 
                  formatTextValue: value => value + '',
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

      {/* Power Trend */}
      <Card className="col-span-2 lg:col-span-4 bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full mt-4 row-span-2">
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
