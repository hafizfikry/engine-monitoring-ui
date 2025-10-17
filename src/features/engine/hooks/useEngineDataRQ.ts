import { useQuery } from "@tanstack/react-query";
import type { EngineDataRQ } from "@/features/engine/types";
import { useMockEngineDataRQ } from "@/features/engine/hooks/useMockEngineData";

async function fetchEngine(apiUrl: string) {
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as EngineDataRQ
}

export function useEngineDataRQ(apiUrl: string | null) {
    const mock1 = useMockEngineDataRQ("Engine 1")
    const mock2 = useMockEngineDataRQ("Engine 2")
    const mock3 = useMockEngineDataRQ("Engine 3")
    const mock4 = useMockEngineDataRQ("Engine 4")
    
    const query = useQuery<EngineDataRQ, Error>({
        queryKey: ["engineData", apiUrl],
        queryFn: () => fetchEngine(apiUrl!),
        enabled: !!apiUrl,
        staleTime: 1000 * 5,
        refetchInterval: 10000,
        retry: 1,
    })

    if (apiUrl?.startsWith("mock://")) {
        switch (apiUrl) {
        case "mock://engine1": return { data: mock1, isLoading: false, error: null, refetch: () => {} }
        case "mock://engine2": return { data: mock2, isLoading: false, error: null, refetch: () => {} }
        case "mock://engine3": return { data: mock3, isLoading: false, error: null, refetch: () => {} }
        case "mock://engine4": return { data: mock4, isLoading: false, error: null, refetch: () => {} }
        default: return { data: mock1, isLoading: false, error: null, refetch: () => {} }
        }
    }

    return query
}