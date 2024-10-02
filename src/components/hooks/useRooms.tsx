'use client';

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios

const useRooms = () => {
    const [searchParams, setSearchParams] = useState<string | null>(null);

    // Ensure this runs only in the client
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            setSearchParams(params.toString());
        }
    }, []);

    const { isLoading, data: roomsData, refetch } = useQuery({
        queryKey: ["roomsData", searchParams], // Include searchParams in the query key to refetch data when it changes
        queryFn: async () => {
            const baseURL = `https://air-bnb-server-beryl.vercel.app/rooms`;
            const fetchURL = searchParams ? `${baseURL}?${searchParams}` : baseURL;

            try {
                const res = await axios.get(fetchURL); // Use axios to fetch data
                return res.data; // Return the response data
            } catch (error) {
                console.error("Error fetching rooms data:", error);
                return []; // Return an empty array on error
            }
        },
        // Enable refetch on window focus
        refetchOnWindowFocus: true,
        enabled: !!searchParams, // Only run query when searchParams is set
    });

    return [roomsData, isLoading, refetch];
};

export default useRooms;
