/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import useRooms from "../hooks/useRooms";

const Content = () => {
    const [roomsData, isLoading, refetch ] = useRooms()
    console.log(roomsData);
    return (
        <div className="text-center w-full h-[200vh] mt-80">
            <p>{isLoading ?  <span>Loading</span> : roomsData?.rooms?.length}</p>
        </div>
        // <p>

        // </p>
    );
};

export default Content;