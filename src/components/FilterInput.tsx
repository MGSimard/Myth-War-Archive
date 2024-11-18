"use client";
import { useFilter } from "@/components/FilterProvider";

export function FilterInput() {
  const { setFilter } = useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="search"
      onChange={handleChange}
      placeholder="Search..."
      className="table-search"
      aria-label="Search Maps"
    />
  );
}
