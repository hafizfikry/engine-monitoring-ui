import React from "react";
import GaugeComponent from "react-gauge-component"
import { Field, FieldSet, FieldLegend, FieldGroup,  FieldLabel} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card"
// import { GaugeEngine } from "@/features/engine/components-engine/GaugeCardEngine"

export default function EngineOverlay() {

  // Data posisi & label untuk tiap silinder
  const enginePositions = [
    { id: 1, top: "15%", left: "18%" },
    { id: 2, top: "15%", left: "25%" },
    { id: 3, top: "15%", left: "32.3%" },
    { id: 4, top: "15%", left: "39.5%" },
    { id: 5, top: "15%", left: "46.8%" },
    { id: 6, top: "15%", left: "54%" },
    { id: 7, top: "15%", left: "61.2%" },
    { id: 8, top: "15%", left: "68.4%" },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <img
        src="/images/Engine-Blueprint.png"
        alt="Engine Blueprint"
        className="w-full h-auto opacity-90"
      />

      {/* --- Static Labels --- */}
      <div
        className="absolute text-black font-semibold text-sm"
        style={{ top: "18%", left: "3%" }}
      >
        TC
      </div>
      
      <div
        className="absolute text-black font-semibold text-sm"
        style={{ top: "25%", left: "6.8%" }}
      >
        Exh. Gas Outlet
      </div>
      <div
        className="absolute text-black font-semibold text-sm"
        style={{ top: "29%", left: "6.8%" }}
      >
        Exh. Gas Dev
      </div>

      {/* --- Engine Numbers (Dynamic) --- */}
      {enginePositions.map((pos) => (
        <React.Fragment key={pos.id}>
          {/* Nomor silinder */}
          <div
            className="absolute text-black font-semibold text-sm"
            style={{ top: pos.top, left: pos.left }}
          >
            {pos.id}
          </div>

          {/* Exhaust Gas Outlet */}
          <div
            className="absolute text-blue-500 font-semibold text-sm"
            style={{
              top: "25%",
              left: `calc(${pos.left} - 1.5%)`, // sedikit ke kiri
            }}
          >
            32.9<span className="text-black">℃</span>
          </div>

          {/* Exhaust Gas Dev */}
          <div
            className="absolute text-blue-500 font-semibold text-sm"
            style={{
              top: "29%",
              left: `calc(${pos.left} - 1.5%)`,
            }}
          >
            32.9<span className="text-black">℃</span>
          </div>
        </React.Fragment>
      ))}

      {/* --- Mean --- */}
      <div
        className="absolute text-black font-semibold text-sm"
        style={{ top: "16%", left: "74.6%" }}
      >
        Mean
      </div>

      {/* Left Gauge */}
      <div className="absolute" style={{top: "40%", left: "0%"}}>
        <p className="text-xs font-semibold text-bridge-accent mb-0">Starting Air Inlet Press</p>
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
            value={200}
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
                        color: "rgba(66, 98, 255)",
                        textShadow: "",
                        fontWeight: "bold",
                    }
                }
            }
            }}
            pointer={{ elastic: true }}
            style={{ width: "100%", height: "auto", maxWidth: "200px"}}
        />
      </div>

      {/* Field Box */}
      <div className="absolute" style={{top: "39.3%", left: "25%", width: "30%"}}>
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-300 shadow-lg p-2">
          <CardContent className="p-2 text-xs">
            <FieldSet>
                <FieldLegend>Trip Conditions</FieldLegend>
                <FieldGroup className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {[...Array(8)].map((_, i) => (
                  <Field key={i} orientation={"horizontal"} className="flex items-center space-x-1">
                    <label className="flex items-center space-x-1 cursor-pointer">
                    <input
                      type="checkbox"
                      id={`check-${i}`}
                      className="
                        appearance-none h-3 w-3 border border-gray-400
                        checked:bg-blue-500 checked:border-blue-500
                        flex items-center justify-center relative
                        after:content-[''] after:absolute after:top-[1px] after:left-[3px]
                        after:w-[3px] after:h-[6px] after:border-r-[2px] after:border-b-[2px]
                        after:border-white after:rotate-45
                        after:opacity-0 checked:after:opacity-100
                        transition-all duration-200
                      "
                    />
                    <FieldLabel htmlFor={`check-${i}`} className="text-[10px] font-medium select-none">
                      Option {i + 1}
                    </FieldLabel>
                  </label>
                  </Field>
                  ))}
                </FieldGroup>
            </FieldSet>
          </CardContent>
        </Card>
      </div>

      {/* Right Gauge */}
      <div className="absolute" style={{top: "40%", right: "20%"}}>
        <p className="text-xs font-semibold text-bridge-accent mb-0">Engine RPM</p>
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
            value={200}
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
                        color: "rgba(66, 98, 255)",
                        textShadow: "",
                        fontWeight: "bold",
                    }
                }
            }
            }}
            pointer={{ elastic: true }}
            style={{ width: "100%", height: "auto", maxWidth: "200px"}}
        />
      </div>

      {/* Turning Gear Engaged */}
      <div className="absolute" style={{ top: "32%", right: "12.5%" }}>
        <Field orientation="vertical" className="flex flex-col items-center space-y-1">
          <FieldLabel
            htmlFor="check-tge"
            className="text-[10px] font-medium select-none text-center"
          >
            Turning Gear <br /> Engaged
          </FieldLabel>

          <label className="flex justify-center cursor-pointer">
            <input
              type="checkbox"
              id="check-tge"
              className="
                appearance-none h-3 w-3 border border-gray-400
                checked:bg-blue-500 checked:border-blue-500
                flex items-center justify-center relative
                after:content-[''] after:absolute after:top-[1px] after:left-[4px]
                after:w-[3px] after:h-[6px] after:border-r-[2px] after:border-b-[2px]
                after:border-white after:rotate-45
                after:opacity-0 checked:after:opacity-100
                transition-all duration-200
              "
            />
          </label>
        </Field>
      </div>

      {/* Generator */}
      <div className="absolute" style={{ top: "37%", right: "2.2%" }}>
        <h3 className="font-semibold text-bridge-accent mb-1">Generator</h3>
        <p className="text-xs mb-1">Winding Temp.</p>
        <p className="font-semibold text-xs text-start mb-1">R: <span className="ms-3 text-blue-500"> 32.5</span>℃</p>
        <p className="font-semibold text-xs text-start mb-1">S: <span className="ms-3 text-blue-500"> 32.5</span>℃</p>
        <p className="font-semibold text-xs text-start mb-2">T: <span className="ms-3 text-blue-500"> 32.5</span>℃</p>
        <p className="text-xs mb-1">Bearing Temp.</p>
        <p className="font-semibold text-xs mb-2"><span className="text-blue-500">32.5</span>℃</p>
        <p className="text-xs mb-1">Cooling Air Temp.</p>
        <p className="font-semibold text-xs mb-2"><span className="text-blue-500">32.5</span>℃</p>
      </div>
    </div>
  );
}
