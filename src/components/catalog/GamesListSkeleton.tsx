export default function GamesListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4 shadow-md animate-pulse">
          <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-10"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
