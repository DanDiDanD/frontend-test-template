"use client";

import Select from "@/components/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type GameFilterProps = {
  availableFilters: string[];
};

const DEFAULT_OPTION = { value: "", label: "All" };

export default function GameFilter({ availableFilters }: GameFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (genre) {
      params.set("genre", genre);
    } else {
      params.delete("genre");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const genreOptions = [
    DEFAULT_OPTION,
    ...availableFilters.map((genre) => ({
      value: genre,
      label: genre,
    })),
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Select
        options={genreOptions}
        aria-label="Filter by game genre"
        variant="outline"
        onChange={handleGenreChange}
        value={searchParams.get("genre") || ""}
        color="gray-medium"
      />
    </div>
  );
}
