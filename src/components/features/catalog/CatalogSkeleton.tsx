import Select from "@/components/ui/Select";

function Filter({ genre }: { genre?: string }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-end gap-4 mb-8 md:mb-12">
      <div className="flex items-center">
        <label className="text-xl font-bold text-gray-medium">Genre</label>
        <div className="mx-6 text-gray-medium text-lg font-light">|</div>
        <Select
          options={[{ value: "", label: genre || "All" }]}
          variant="ghost"
          color="gray-medium"
          disabled
          loading
        />
      </div>
    </div>
  );
}

function GameCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl px-6 py-6 flex flex-col animate-pulse">
      <div className="aspect-[6/5] md:aspect-[4/3] relative mb-6">
        <div className="w-full h-full bg-gray-300 rounded-t-lg"></div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="h-4 bg-gray-200 rounded mb-3 w-16"></div>

        <div className="flex justify-between gap-2 mb-5">
          <div className="h-5 bg-gray-300 rounded flex-1"></div>
          <div className="h-5 bg-gray-300 rounded w-12"></div>
        </div>

        <div className="mt-auto">
          <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
}

function GameList() {
  return Array.from({ length: 12 }).map((_, i) => <GameCard key={i} />);
}

function CatalogSkeleton({ genre }: { genre?: string }) {
  return (
    <div aria-label="Loading catalog content" role="status" aria-live="polite">
      <span className="sr-only">
        Loading catalog with filters and games, please wait...
      </span>
      <div aria-hidden="true">
        <Filter genre={genre} />
        <div className="separator" aria-hidden="true"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 md:mb-12 pt-8 md:pt-12">
          <GameList />
        </div>
      </div>
    </div>
  );
}

CatalogSkeleton.Filter = Filter;
CatalogSkeleton.GameList = GameList;

export default CatalogSkeleton;
