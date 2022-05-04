import { MdOutlineShortText } from "react-icons/md";
import Image from "next/image";

function Search({ search, setSearch }) {
  return (
    <>
      <div className="w-5/6 bg-[#1A1A1A] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-3 lg:pr-8 flex items-center">
        <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#1A1A1A] text-white border-none w-full focus:ring-0 outline-none placeholder-[#FAFAFA] lg:text-lg text-sm"
          placeholder="Search..."
        />

        <div className="hidden lg:flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
          <div className="flex space-x-2 pr-5">
            <button className="tag">Minimal</button>
            <button className="tag">House</button>
            <button className="tag">Minimal</button>
          </div>

          <div className="flex items-center space-x-1.5 text-[#CECECE] pl-4">
            <MdOutlineShortText className="text-2xl animate-pulse" />
            <span className="font-medium text-sm">Filters</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
