import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GrStatusInfo } from "react-icons/gr";

const CharacterCard: React.FC<ICharacterCardProps> = ({ item }) => {
  const [showPop, setShowPop] = useState(false);

  return (
    <div
      className="w-full p-3 flex gap-4 items-center bg-blue-50 shadow-sm rounded-lg hover:bg-blue-100 duration-200 transition-all cursor-pointer relative"
      onMouseEnter={() => setShowPop(true)}
      onMouseLeave={() => setShowPop(false)}
    >
      {/* Character image */}
      <img src={item.image} className="sm:w-28 sm:h-28 w-20 h-20 relative" />
      {/* Character info */}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg tracking-wide">{item.name}</h1>
        <span className="text-blue-600 text-sm flex gap-1 items-center">
          <GrStatusInfo size={15} />
          <span>{item.status}</span>
        </span>
        <span className="text-blue-500 underline text-sm flex gap-1 items-center">
          <IoLocationSharp size={15} />
          <span>{item.origin.name}</span>
        </span>
      </div>
      {/* Popover */}
      {showPop && (
        <div className="absolute z-10 top-1/2 w-full bg-white border shadow-sm px-3 py-2">
          <h1 className="text-lg font-bold">{item.name}</h1>
          <div className="grid grid-cols-3">
            <span>{item.gender}</span>
            <span>{item.origin.name}</span>
            <span>{item.species}</span>
            <span>{item.status}</span>
            <span>{item.episode?.length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
