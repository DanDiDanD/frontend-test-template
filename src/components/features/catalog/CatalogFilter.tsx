"use client";

import Select from "@/components/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type GameFilterProps = {
  availableFilters: string[];
};

const DEFAULT_OPTION = { value: "", label: "All" };

export default function CatalogFilter({ availableFilters }: GameFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, refresh } = useRouter();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (genre) {
      params.set("genre", genre);
    } else {
      params.delete("genre");
    }

    replace(`${pathname}?${params.toString()}`);

    if (!genre) {
      refresh();
    }
  };

  const genreOptions = [
    DEFAULT_OPTION,
    ...availableFilters.map((genre) => ({
      value: genre,
      label: genre,
    })),
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-4 mb-6">
      <div className="flex items-center">
        <label
          htmlFor="genre-filter"
          className="text-xl font-bold text-gray-medium"
        >
          Genre
        </label>
        <div className="mx-6 text-gray-medium" aria-hidden="true">
          |
        </div>
        <Select
          id="genre-filter"
          options={genreOptions}
          variant="ghost"
          onChange={handleGenreChange}
          value={searchParams.get("genre") || ""}
          color="gray-medium"
        />
      </div>
    </div>
  );
}
