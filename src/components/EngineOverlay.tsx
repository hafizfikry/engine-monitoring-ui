import React from "react";
import GaugeComponent from "react-gauge-component"
import { Field, FieldSet, FieldLegend, FieldGroup,  } from "@/components/ui/field";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

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
        style={{ top: "25%", left: "7.1%" }}
      >
        Exh. Gas Outlet
      </div>
      <div
        className="absolute text-black font-semibold text-sm"
        style={{ top: "28%", left: "7.1%" }}
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
              top: "28%",
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

      {/* Gauge */}
      <div className="absolute" style={{top: "40%", left: "0%"}}>
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
            style={{ width: "100%", height: "auto", maxWidth: "250px"}}
        />
      </div>

      {/* Field Box */}
      {/* <div className="absolute" style={{top: "40%", left: "40%"}}>
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-300 shadow-lg">
          <CardContent>
            <FieldSet>
                <FieldLegend>Trip Conditions</FieldLegend>
            </FieldSet>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
