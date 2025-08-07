"use client";

import { useTransition, useEffect, useRef } from "react";
import Select from "@/components/ui/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type GameFilterProps = {
  availableFilters: string[];
};

const DEFAULT_OPTION = { value: "", label: "All" };

export default function CatalogFilter({ availableFilters }: GameFilterProps) {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, refresh } = useRouter();

  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const currentGenre = searchParams.get("genre") || "";
    if (selectRef.current) {
      selectRef.current.value = currentGenre;
    }
  }, [searchParams]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;

    startTransition(() => {
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
    });
  };

  const genreOptions = [
    DEFAULT_OPTION,
    ...availableFilters.map((genre) => ({
      value: genre,
      label: genre,
    })),
  ];

  return (
    <div
      role="search"
      aria-label="Game catalog filters"
      className="flex flex-col md:flex-row md:justify-end gap-4 mb-8 md:mb-12"
    >
      <div className="flex items-center">
        <label
          htmlFor="genre-filter"
          className="text-xl font-bold text-gray-medium"
        >
          Genre
        </label>
        <div
          className="mx-6 text-gray-medium text-lg font-light"
          aria-hidden="true"
        >
          |
        </div>
        <Select
          ref={selectRef}
          id="genre-filter"
          options={genreOptions}
          variant="ghost"
          onChange={handleGenreChange}
          defaultValue={searchParams.get("genre") || ""}
          color="gray-medium"
          loading={isPending}
        />
      </div>
    </div>
  );
}
