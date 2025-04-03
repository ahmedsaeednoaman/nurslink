'use client';

export default function ProductFilter() {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">????? ???????</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">?????</h3>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              placeholder="??"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <span className="text-gray-500">???</span>
            <input
              type="number"
              placeholder="???"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">???????</h3>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  id={ating-}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={ating-} className="mr-2 text-sm text-gray-700">
                  {rating} ???? ?????
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
