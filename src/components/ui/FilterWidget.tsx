import { useState } from "react";
import FilterItem from "./FilterItem";
import { IoChevronDownOutline } from "react-icons/io5";

const FilterWidget: React.FC<IFilterWidgetProps> = ({
  items,
  description,
  icon,
  title,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex flex-col border">
      {description && icon && (
        <div className="p-2">
          <div>Icon</div>
          <h2>{description}</h2>
        </div>
      )}
      <div
        className="flex flex-col px-2 py-1 select-none cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center border-b mb-1">
          <h3>{title}</h3>
          <IoChevronDownOutline
            size={15}
            className={`${
              isOpen ? "rotate-180" : ""
            } transform transition-transform duration-300`}
          />
        </div>
        {isOpen && (
          <div className="flex flex-col">
            {items.map((i, index) => (
              <FilterItem
                key={index}
                label={i.label}
                value={i.value}
                checked={i.checked}
                onChecked={() => onFilterChange(i.value)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterWidget;
