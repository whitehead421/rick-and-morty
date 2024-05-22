interface IFilterWidgetProps {
  items: Filter[];
  title: string;
  description?: string;
  icon?: string;
  onFilterChange: (value: string) => void;
}

interface IFilter {
  label: string;
  value: string;
  checked: boolean;
  onChecked: () => void;
}

type Filter = {
  label: string;
  value: string;
  checked: boolean;
};

interface ICharacterCardProps {
  item: Character;
}
