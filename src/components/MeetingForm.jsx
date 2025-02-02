import React from 'react';

export default function MeetingForm({ locations, loading, meetingPoint, error, onChange, onAdd, onRemove, onSubmit }) {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold mb-4">Find Your Optimal Meeting Point</h2>
      <form onSubmit={onSubmit}>
        {locations.map((loc, index) => (
          <div key={index} className="mb-3 flex items-center">
            <input
              type="text"
              value={loc}
              onChange={(e) => onChange(index, e.target.value)}
              placeholder={`Enter location ${index + 1}`}
              className="box-border border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
            {locations.length > 2 && (
              <button
                type="button"
                className="ml-2 bg-red-500 text-white px-3 py-2 rounded cursor-pointer"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={onAdd}
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add Location
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Calculating...' : 'Find Meeting Point'}
          </button>
        </div>
      </form>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {meetingPoint && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-medium">Recommended Meeting Point:</h3>
          <p>{meetingPoint}</p>
          <div className="mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
              Get Directions
            </button>
            <button className="ml-2 bg-gray-600 text-white px-4 py-2 rounded cursor-pointer">
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}