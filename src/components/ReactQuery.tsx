'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
const ReactQuery = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>)

export default ReactQuery;