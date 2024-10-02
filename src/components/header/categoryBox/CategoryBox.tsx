/* eslint-disable @next/next/no-img-element */
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { useState } from "react";
import { Swiper as SwiperCore } from 'swiper';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";


interface categories {
    category: string;
    icon: string;
}


const CategoryBox = () => {

    const router = useRouter()
    const categories: categories[] = [
        { category: "Luxury Stays", icon: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" },
        { category: "Villas", icon: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg" },
        { category: "Campers and RVs", icon: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" },
        { category: "Lofts", icon: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg" },
        { category: "Apartments", icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg" },
        { category: "Chalets", icon: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" },
        { category: "Cottages", icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" },
        { category: "Hostels", icon: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg" },
        { category: "Entire Place", icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" },
        { category: "Private Room", icon: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg" },
        { category: "Shared Room", icon: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg" },
        { category: "Unique Stays", icon: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" },
        { category: "Treehouses", icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" },
        { category: "Houseboats", icon: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg" },
        { category: "Caves", icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" },
        { category: "Yurts", icon: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" },
        { category: "Domes", icon: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" },
        { category: "Airstreams", icon: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg" },
        { category: "Barns", icon: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg" },
        { category: "Cabins", icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" },
        { category: "Earth Homes", icon: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" },
        { category: "Farm Stays", icon: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" },
        { category: "Tiny Homes", icon: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg" },
        { category: "Beachfront", icon: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" },
        { category: "Amazing Views", icon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" },
        { category: "Countryside", icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" },
        { category: "Island Stays", icon: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" },

        { category: "Off-the-Grid", icon: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" },
        { category: "Pet-Friendly", icon: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg" },
        { category: "Bed & Breakfast", icon: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" }
    ];

    // State for storing the Swiper instance, typed with SwiperCore
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null)

    const handleCategory = (category: string) => {
        setActiveCategory(category);
    
        const query = new URLSearchParams(window.location.search);
    
        query.set("room_type_categories", category);
    
        router.push(`?${query.toString()}`);
    };

    return (
        <div className=" w-full h-full bg-white relative flex items-center justify-between">
            <div className="flex justify-between">
                {/* Left (Previous) button */}
                <button className={` p-3 rounded-full border hover:shadow-xl transition-all ease-linear`}
                    onClick={() => swiperInstance?.slidePrev()}>
                    <MdArrowBackIos className='  relative ' />
                </button>

            </div>
            <Swiper
                slidesPerView={7}
                slidesPerGroup={5}

                onSwiper={(swiper) => setSwiperInstance(swiper)}
                className="mySwiper">
                {categories?.map((category, idx) => (
                    <SwiperSlide key={idx} className={`${category.category == activeCategory ? 'border-b-2 border-black' : ""} flex items-center justify-center`}
                        onClick={() => handleCategory(category.category)}>
                        <div className="flex flex-col items-center justify-center w-28 space-y-2 cursor-pointer group h-full py-3">
                            {/* Icon */}
                            <img
                                src={category.icon}
                                alt={category.category}
                                className={`${category.category == activeCategory ? 'opacity-100' : ""} w-6 h-6  transition-opacity duration-300 ease-in-out opacity-60 group-hover:opacity-100`}
                            />
                            {/* Category Name */}
                            <p className={`${category.category == activeCategory ? 'opacity-100' : ""} text-[12px] text-center font-semibold  transition-opacity duration-300 ease-in-out text-nowrap opacity-60 group-hover:opacity-100`}>
                                {category.category}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* Right (Next) button */}
            <button className={`p-3 rounded-full border hover:shadow-xl transition-all ease-linear `}
                onClick={() => swiperInstance?.slideNext()}>
                <MdArrowForwardIos className='  relative ' />
            </button>
        </div>
    );
};

export default CategoryBox;