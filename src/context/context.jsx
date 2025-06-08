import React, { createContext, useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=movie`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched Data:", data);

      if (data.Response === "True") {
        setMovie(data.Search);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({
          show: true,
          msg: data.Error || "Movie not found.",
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setIsError({ show: true, msg: "Something went wrong!" });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ movie, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom Hook
export const useGlobalAppContext = () => {
  return useContext(AppContext);
};
