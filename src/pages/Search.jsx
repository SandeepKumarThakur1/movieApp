import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <input
        type="text"
        placeholder="Search for movies..."
        className="w-full max-w-md px-4 py-2 border rounded-xl shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default Search;
