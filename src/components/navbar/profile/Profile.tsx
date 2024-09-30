import { MdOutlineMenu } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";

const Profile = () => {
    return (
        <div className="flex items-center gap-4 text-[14px] font-semibold w-fit">
            <p>Airbnb your Home</p>
            <RiGlobalLine size={20} className="hover:cursor-pointer" />
            <div className="flex items-center justify-center gap-2 p-3 h-[48px] w-[85px] rounded-l-full rounded-r-full border hover:shadow-md hover:cursor-pointer">
                <MdOutlineMenu size={20} />
                <PiUserCircleDuotone size={40} />
            </div>
        </div>
    );
};

export default Profile;