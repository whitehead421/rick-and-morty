const FilterItem: React.FC<IFilter> = ({ label, checked, onChecked }) => {
  return (
    <div
      className="flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        className="w-3 h-3"
        type="checkbox"
        checked={checked}
        onChange={onChecked}
      />
      <label className="text-sm">{label}</label>
    </div>
  );
};

export default FilterItem;
