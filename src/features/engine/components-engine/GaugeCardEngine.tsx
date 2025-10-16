import { Card, CardContent } from "@/components/ui/card";
import type { GaugeComponentType } from "@/features/engine/types";
import GaugeComponent from "react-gauge-component";

interface EngineCardData {
	title: string
	gaugeComponentType: GaugeComponentType
}

function GaugeCardEngine({title, gaugeComponentType}: EngineCardData) {
	const renderGauge = () => {
		if (gaugeComponentType.type === "radial") {
			return <GaugeComponent
							value={Number(gaugeComponentType.value.toFixed(1))}
							maxValue={gaugeComponentType.maxValue}
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
									{limit: Math.floor(gaugeComponentType.maxValue * 0.45), color: "#FF4E4E", showTick: true}, 
									{limit: Math.floor(gaugeComponentType.maxValue * 0.55), color: gaugeComponentType.mainColor, showTick: true}, 
									{limit: gaugeComponentType.maxValue, color: "#FF4E4E", showTick: true}, 
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
		} else {
			return <GaugeComponent
              id="simple-gauge"
              maxValue={gaugeComponentType.maxValue}
              arc={{
                subArcs: [
                  { limit: Math.floor(gaugeComponentType.maxValue * 0.1), color: "#BFBFBF", showTick: true },
                  { limit: Math.floor(gaugeComponentType.maxValue * 0.3), color: gaugeComponentType.mainColor, showTick: true },
                  { limit: Math.floor(gaugeComponentType.maxValue * 0.7), color: gaugeComponentType.mainColor, showTick: true },
                  { limit: Math.floor(gaugeComponentType.maxValue * 0.9), color: gaugeComponentType.mainColor, showTick: true },
                  { limit: gaugeComponentType.maxValue, color: "#EA4228", showTick: true },
                ],
                width: 0.25,
                padding: 0.02,
                cornerRadius: 6,
                // gradient: true,  
              }}
              value={gaugeComponentType.value}
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
		}
	}

	return (
		<Card className="bg-bridge-medium border border-bridge-accent rounded-2xl shadow-lg w-full">
			<CardContent className="p-4 flex flex-col items-center justify-center h-auto">
          <h3 className="font-semibold text-bridge-accent mb-2">{title}</h3>
					<div className="w-auto h-auto flex justify-center">
						{renderGauge()}
					</div>
			</CardContent>
		</Card>
	)

}

function GaugeEngine({title, gaugeComponentType}: EngineCardData) {
	const renderGauge = () => {
		if (gaugeComponentType.type === "radial") {
			return <>
							<h3 className="font-semibold text-bridge-accent mb-1">{title}</h3>
							<GaugeComponent
								value={Number(gaugeComponentType.value.toFixed(1))}
								maxValue={gaugeComponentType.maxValue}
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
										{limit: Math.floor(gaugeComponentType.maxValue * 0.45), color: "#FF4E4E", showTick: true}, 
										{limit: Math.floor(gaugeComponentType.maxValue * 0.55), color: gaugeComponentType.mainColor, showTick: true}, 
										{limit: gaugeComponentType.maxValue, color: "#FF4E4E", showTick: true}, 
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
						</>
		} else {
			return <>
							<h3 className="font-semibold text-bridge-accent mb-0">{title}</h3>
							<GaugeComponent
								id="simple-gauge"
								maxValue={gaugeComponentType.maxValue}
								arc={{
									subArcs: [
										{ limit: Math.floor(gaugeComponentType.maxValue * 0.1), color: "#BFBFBF", showTick: true },
										{ limit: Math.floor(gaugeComponentType.maxValue * 0.3), color: gaugeComponentType.mainColor, showTick: true },
										{ limit: Math.floor(gaugeComponentType.maxValue * 0.7), color: gaugeComponentType.mainColor, showTick: true },
										{ limit: Math.floor(gaugeComponentType.maxValue * 0.9), color: gaugeComponentType.mainColor, showTick: true },
										{ limit: gaugeComponentType.maxValue, color: "#EA4228", showTick: true },
									],
									width: 0.25,
									padding: 0.02,
									cornerRadius: 6,
									// gradient: true,  
								}}
								value={gaugeComponentType.value}
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
						</> 
		}
	}

	return renderGauge()
}


export {GaugeCardEngine, GaugeEngine}