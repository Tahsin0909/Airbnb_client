import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    return (
        <div className='flex items-center w-fit gap-2 border h-[48px] rounded-full shadow-md text-[14px] font-semibold'>
            <div className="px-4 border-r-2 border-gray-300">
                <p>AnyWhere</p>
            </div>
            <div className="px-4 border-r-2 border-gray-300">
                <p>Any Date</p>
            </div>
            <div className="pl-4">
                <p>Add Guest</p>
            </div>
            <div className="my-[7px] mr-[7px] p-[10px] bg-primary rounded-full">
                <IoSearchSharp size={20} className="text-white"/>
            </div>
        </div>
    );
};

export default Search;