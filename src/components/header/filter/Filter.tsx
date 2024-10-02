/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RxMixerHorizontal } from "react-icons/rx";
import MultiInputSlider from "react-multi-input-rangeslider";
import "react-multi-input-rangeslider/style/style.css"


import { FaWifi } from "react-icons/fa6";
import { TbToolsKitchen3 } from "react-icons/tb";
import { PiWashingMachineBold } from "react-icons/pi";
import { PiHairDryerLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LiaTemperatureHighSolid } from "react-icons/lia"



import { IconType } from 'react-icons'; // This helps with the type of the icons
import { useRouter } from "next/navigation";
import useRooms from "@/components/hooks/useRooms";

// Map the icon strings to their respective components



const Filter = () => {
    // to do fileter 
    // min_price: req.query.min_price,
    // max_price: req.query.max_price,
    // bedrooms: req.query.bedrooms,
    // amenities: req.query.amenities,
    // property_type: req.query.property_type,
    // instant_book: req.query.instant_book,
    // self_check_in: req.query.self_check_in,
    // free_cancellation: req.query.free_cancellation,
    // allow_pets: req.query.allow_pets,
    // rating: req.query.rating

    const router = useRouter()


    const [roomsData, isLoading, refetch ] = useRooms()

    const iconMapping: Record<string, IconType> = {
        FaWifi: FaWifi,
        TbToolsKitchen3: TbToolsKitchen3,
        PiWashingMachineBold: PiWashingMachineBold,
        PiHairDryerLight: PiHairDryerLight,
        TbAirConditioning: TbAirConditioning,
        LiaTemperatureHighSolid: LiaTemperatureHighSolid,
    };

    type Amenity = {
        amenity: string;
        icon: keyof typeof iconMapping;
    };

    const amenities: Amenity[] = [
        { amenity: "Wifi", icon: "FaWifi" },
        { amenity: "Kitchen", icon: "TbToolsKitchen3" },
        { amenity: "Washer", icon: "PiWashingMachineBold" },
        { amenity: "Dryer", icon: "PiHairDryerLight" },
        { amenity: "Air conditioning", icon: "TbAirConditioning" },
        { amenity: "Heating", icon: "LiaTemperatureHighSolid" },
    ];


    const propertyTypes = [
        { type: "House", icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" },
        { type: "Apartment", icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" },
        { type: "Guesthouse", icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" },
        { type: "Hotel", icon: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg" }
    ];
    const bookingTypes = [
        { type: "Instant Book", params: 'instant_book', icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" },
        { type: "Self CheckIn", params: 'self_check_in', icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" },
        { type: "Free Cancelation", params: 'free_cancellation', icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" },
        { type: "Allow Pets", params: 'allow_pets', icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" },
    ];



    const handleModalOpen = () => {
        const filterElement = document.getElementById('filter');
        if (filterElement instanceof HTMLDialogElement) {
            filterElement.showModal();
        } else {
            console.error('Filter dialog not found or element is not a <dialog> tag');
        }
    }
    const handleModalClose = () => {
        const filterElement = document.getElementById('filter');
        if (filterElement instanceof HTMLDialogElement) {
            filterElement.close();
        } else {
            console.error('Filter dialog not found or element is not a <dialog> tag');
        }
    }




    const [property, setProperty] = useState<string | null>(null);
    const [amenitiesState, setAmenitiesState] = useState<string[] | null>([]); // Update to array for multiple amenities
    const [bookingState, setBookingState] = useState<string[]>([]);
    const [price, setPrice] = useState<{ minPrice: number; maxPrice: number }>({
        minPrice: 0,
        maxPrice: 0,
    });
    const [bedRoom, setBedroom] = useState<number>(0);

    const handleAmenities = (data: string) => {
        setAmenitiesState((prevAmenities) => {
            if (prevAmenities) {
                // If the amenity is already selected, remove it
                if (prevAmenities.includes(data)) {
                    return prevAmenities.filter(amenity => amenity !== data);
                } else {
                    // Otherwise, add the new amenity to the array
                    return [...prevAmenities, data];
                }
            }
            // Return the new state if prevAmenities is null
            return [data]; // Start with the selected amenity
        });
    };
    
    const handleBooking = (type: string) => {
        setBookingState((prevBooking) => {
            if (prevBooking) {
                // If the type is already selected, remove it
                if (prevBooking.includes(type)) {
                    return prevBooking.filter(booking => booking !== type);
                } else {
                    // Otherwise, add the new type to the array
                    return [...prevBooking, type];
                }
            }
            // Return the new state if prevBooking is null
            return [type]; // Start with the selected type
        });
    };

    const handleFilter = () => {
        const query = new URLSearchParams(window.location.search);

        // Set or update each search parameter (property, amenities, booking types, price, bedrooms)
        if (property) query.set("property_type", property);

        // Handle amenities as an array
        if (amenitiesState && amenitiesState.length > 0) {
            query.delete("amenities[]"); // Clear previous amenities
            amenitiesState.forEach((amenity) => query.append("amenities[]", amenity));
        }

        // Handle booking state as an array of booking types
        if (bookingState && bookingState.length > 0) {

            bookingState.forEach((booking) => {
                query.delete(booking);
                query.append(booking, "true");
            });
        }

        // Handle price range
        if (price.minPrice > 0) query.set("min_price", price.minPrice.toString());
        if (price.maxPrice > 0) query.set("max_price", price.maxPrice.toString());

        // Handle bedroom count
        if (bedRoom > 0) query.set("bedrooms", bedRoom.toString());

        // Push the updated query to the router
        router.push(`?${query.toString()}`);
        refetch()
        handleModalClose()

    };



    return (
        <div>
            <button onClick={handleModalOpen} className="flex items-center gap-2 border p-3 border-black rounded-md hover:shadow-lg active:scale-95 transition-all ease-linear">
                <RxMixerHorizontal size={20} />
                <span>Filter</span>
            </button>
            <dialog id="filter">
                <div
                    className="fixed inset-0 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg relative countryList h-[500px] overflow-y-scroll">
                        <div className="flex items-center border-b border-black p-4">
                            <IoMdClose onClick={handleModalClose} size={20} className="hover:text-primary cursor-pointer " />
                            <p className="text-center flex-1">Filter</p>
                        </div>
                        <div className="p-6">
                            <p className="text-lg">Price Range</p>
                            <div className="w-full flex items-center justify-center">

                                <div className="py-8">
                                    <MultiInputSlider
                                        min={0}
                                        max={10000}
                                        width="400px"
                                        rangeColor="#FF385c"
                                        onChange={({ min, max }) => setPrice({ minPrice: min, maxPrice: max })}
                                        valueStyle={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "10p", gap: "8px", padding: "20px 0px" }}
                                    />
                                </div>

                            </div>
                            <div>
                                <p className="text-lg">Bedroom</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <p>Beds</p>
                                    <div className="flex items-center justify-center ">
                                        <button className="text-lg" onClick={() => setBedroom(bedRoom > 0 ? bedRoom - 1 : 0)}>
                                            <FaMinus size={20} />
                                        </button>
                                        <p className="px-3">{bedRoom == 0 ? "Any" : bedRoom}</p>
                                        <button className="text-lg" onClick={() => setBedroom(bedRoom + 1)}>
                                            <FaPlus size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-lg">Amenities</p>
                                <div className="py-4 flex items-center flex-wrap gap-3">
                                    {
                                        amenities.map((data) => {
                                            const IconComponent = iconMapping[data.icon]; // Dynamically get the icon component

                                            return (
                                                <div onClick={() => handleAmenities(data.amenity)} key={data.amenity} className={`${amenitiesState?.includes(data.amenity) ? "opacity-100" : "opacity-60"
                                                    } border rounded-full p-4 flex gap-2 justify-center items-center cursor-pointer`}>
                                                    {IconComponent && <IconComponent className="text-xl" />} {/* Render icon */}
                                                    <p className="text-center text-nowrap">{data.amenity}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-lg">Property Type</p>
                                <div className="py-4 flex items-center flex-wrap gap-3">
                                    {
                                        propertyTypes.map((data) => {
                                            return (
                                                <div onClick={() => setProperty(data.type)} key={data.type} className={`${property == data.type ? "opacity-100" : 'opacity-60'} border rounded-full p-4 flex gap-2 justify-center items-center cursor-pointer`}>
                                                    <img src={data.icon} className="w-6 h-6" alt="" />
                                                    <p className="text-center text-nowrap">{data.type}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="py-4">
                                <p className="text-lg">Booking Options</p>
                                <div className="py-4 flex items-center flex-wrap gap-3">
                                    {
                                        bookingTypes.map((data) => {
                                            return (
                                                <div
                                                    key={data.type}
                                                    onClick={() => handleBooking(data.params)} // Handle click to toggle selection
                                                    className={`${bookingState.includes(data.params) ? "opacity-100" : "opacity-60"
                                                        } border rounded-full p-4 flex gap-2 justify-center items-center cursor-pointer`}
                                                >
                                                    <img src={data.icon} className="w-6 h-6" alt="" />
                                                    <p className="text-center text-nowrap">{data.type}</p>
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                            </div>
                            <button onClick={() => handleFilter()} type="button"
                                className="px-5 py-2.5 w-full rounded-lg text-white text-sm border-none outline-none bg-gray-800 hover:bg-gray-700">Filter</button>
                        </div>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Filter;