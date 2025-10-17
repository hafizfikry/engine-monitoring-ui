import { useQuery } from "@tanstack/react-query";
import type { EngineData } from "@/features/engine/types";

async function fetchEngine(apiUrl: string) {
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as EngineData
}

export function useEngineDataRQ(apiUrl: string | null) {
    return useQuery<EngineData, Error>({
        queryKey: ["engineData", apiUrl],
        queryFn: () => fetchEngine(apiUrl!),
        enabled: !!apiUrl,
        staleTime: 1000 * 5,
        refetchInterval: 10000,
        retry: 1,
    })
}