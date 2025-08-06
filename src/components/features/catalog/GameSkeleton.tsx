export default function GameSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 md:mb-12"
      aria-label="Loading games"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading more games, please wait...</span>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-gray-300 rounded-2xl px-6 py-6 flex flex-col animate-pulse"
          aria-hidden="true"
        >
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
      ))}
    </div>
  );
}
