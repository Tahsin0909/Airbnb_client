/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Room } from "@/app/types";
import useRooms from "../hooks/useRooms";
import { formatDateRange } from "@/helper/date";



const Content = () => {
    const [roomsData, isLoading, refetch] = useRooms()
    return (
        <div className="grid grid-cols-4 items-center mt-72 gap-6">
            {
                roomsData?.rooms?.map((data: Room) => <div key={data.id} className=" space-y-2 p-2 rounded-md hover:shadow-xl shadow-md
                 transition-all">
                    <div>
                        <img className="w-80 h-64 object-fit" src={data.images[0]} alt="" />
                    </div>
                    <div>
                        <p>{data.name}</p>
                        <p>{formatDateRange(data.available_dates)}</p>
                        <p className="font-semibold">${data.price} night</p>
                    </div>
                </div>)
            }
        </div>

    );
};

export default Content;