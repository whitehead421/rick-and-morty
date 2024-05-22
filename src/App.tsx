import { useEffect, useMemo, useState } from "react";
import AppLayout from "./components/layout";
import ApiService from "./services/ApiService";
import CharacterCard from "./components/ui/CharacterCard";
import FilterWidget from "./components/ui/FilterWidget";

function App() {
  const [data, setData] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const aliveFiltersContent = [
    {
      label: "Alive",
      value: "alive",
      checked: false,
    },
    {
      label: "Dead",
      value: "dead",
      checked: false,
    },
    {
      label: "Unknown",
      value: "unknown",
      checked: false,
    },
  ];
  const [aliveFilters, setAliveFilters] = useState(aliveFiltersContent);
  useEffect(() => {
    const bootstrap = async () => {
      const query = [];

      // Alive filters
      const checkedFilters = aliveFilters
        .filter((f) => f.checked)
        .map((f) => f.value);
      const queryStr = checkedFilters.join(",");
      query.push({ key: "status", value: queryStr });

      const response = await ApiService.getAllCharacters(query);
      setData(response);
    };
    bootstrap();
  }, [aliveFilters]);

  const handleFilterChange = (value: string) => {
    const filterItem = aliveFilters.find((f) => f.value === value);

    if (!filterItem) {
      return;
    }

    if (filterItem.checked) {
      filterItem.checked = false;
      setAliveFilters([
        filterItem,
        ...aliveFilters.filter((f) => f.value !== value),
      ]);
    } else {
      filterItem.checked = true;
      setAliveFilters([
        filterItem,
        ...aliveFilters.filter((f) => f.value !== value),
      ]);
    }
  };

  const filteredResults = useMemo(() => {
    if (searchTerm.trim() === "") return data;

    return data.filter((c) =>
      c.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }, [searchTerm, data]);

  const clearFilters = () => {
    setSearchTerm("");
    setAliveFilters(aliveFilters.map((f) => ({ ...f, checked: false })));
  };

  return (
    <AppLayout>
      <div className="sm:grid sm:grid-cols-4 gap-4 px-8 py-4 flex flex-col">
        {/* Filters section */}
        <section className="col-span-1 flex flex-col gap-2">
          <FilterWidget
            title="Status"
            items={aliveFilters}
            onFilterChange={handleFilterChange}
          />
          <div className="px-2 py-1 border">
            <input
              className="outline-none border-none placeholder:text-sm placeholder:text-gray-300 placeholder:font-light"
              placeholder="Type to filter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="text-sm bg-blue-500 py-2 rounded-lg text-white cursor-pointer active:scale-95"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </section>
        {/* Results section */}
        <section className="flex flex-col gap-4 col-span-3">
          {filteredResults.map((c) => (
            <CharacterCard key={c.id} item={c} />
          ))}
        </section>
      </div>
    </AppLayout>
  );
}

export default App;
