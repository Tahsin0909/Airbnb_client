/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Room } from "@/app/types";
import useRooms from "../hooks/useRooms";
import { formatDateRange } from "@/helper/date";


// {
//     "id": "room_002",
//     "name": "Charming Mountain Cabin",
//     "country": "Switzerland",
//     "available_dates": [
//       "2024-12-01",
//       "2024-12-05",
//       "2024-12-15"
//     ],
//     "price": 350, 
//     "max_guest": 5,
//     "images": [
//       "https://example.com/cabin1.jpg",
//       "https://example.com/cabin2.jpg",
//       "https://example.com/cabin3.jpg",
//       "https://example.com/cabin4.jpg"
//     ],
//     "room_type_categories": ["Mountain", "Cabin", "Private", "Cozy"],
//     "bedrooms": 2,
//     "bathrooms": 2,
//     "max_guests": 5,
//     "amenities": [
//       "WiFi",
//       "Fireplace",
//       "Mountain View",
//       "Free Parking",
//       "Hot Tub"
//     ],
//     "rating": 4.7,
//     "reviews_count": 95,
//     "booking_options": {
//       "instant_book": false,
//       "self_check_in": true,
//       "free_cancellation": true,
//       "allow_pets": true
//     },
//     "property_type": "Cabin"
//   }




const Content = () => {
    const [roomsData, isLoading, refetch] = useRooms()
    console.log(roomsData);
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