import Engine from "@/features/engine/Engine";
import { useCallback, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

type OutletContextType = {
    setPageTitle: (title: string) => void
}

type EngineData = {
    rpm: number
}

export default function EnginePage() {
    const { setPageTitle } = useOutletContext<OutletContextType>()
    const [ engineData, setEngineData ] = useState<EngineData | null>(null)

    useEffect(() => {
        setPageTitle("Engine Monitoring 1")
    }, [setPageTitle])

    const handleEngineData = useCallback((data: EngineData) => {
        setEngineData(prev => {
            if (JSON.stringify(prev) === JSON.stringify(data)) {
                return prev; // tidak ada perubahan, jangan render ulang
            }

            return data
        })
    }, []);
    
    useEffect(() => {
        if (engineData) {
            console.log(engineData?.rpm)
        }
    }, [engineData])

    return <Engine onData={handleEngineData} />
}