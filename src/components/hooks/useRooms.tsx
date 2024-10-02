'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // Import axios
import { useSearchParams } from "next/navigation";


const useRooms = () => {
    const searchParams = useSearchParams()

    const { isLoading, data: roomsData, refetch } = useQuery({
        queryKey: ["roomsData", searchParams], // Include searchParams in the query key to refetch data when it changes
        queryFn: async () => {
            const params = new URLSearchParams(searchParams.toString())
            console.log(params);
            const baseURL = `https://air-bnb-server-beryl.vercel.app/rooms`;
            const fetchURL = params ? `${baseURL}?${params}` : baseURL;

            try {
                if (params) {
                    const res = await axios.get(fetchURL); // Use axios to fetch data
                    return res.data; // Return the response data
                }
                else {
                    const res = await axios.get(baseURL); // Use axios to fetch data
                    return res.data; // Return the response data
                }

            } catch (error) {
                console.error("Error fetching rooms data:", error);
                return []; // Return an empty array on error
            }
        },
        enabled: !!searchParams, // Only run the query if searchParams is set
    });

    return [roomsData, isLoading, refetch];
};

export default useRooms;
