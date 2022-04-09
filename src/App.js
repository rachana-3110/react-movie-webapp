import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PopularMovie from "./components/PopularMovie";
import MovieInfo from "./components/MovieInfo";
import TrendMovie from "./components/TrendMovie";

const App = () => {
  const [data, setData] = useState(null);

  const movieData = (data) => {
    setData(data);
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<PopularMovie movieData={movieData} />}
        />
        <Route
          exact
          path="/movieInfo"
          element={<MovieInfo movieData={data} />}
        />
        <Route
          exact
          path="/trendMoive"
          element={<TrendMovie movieData={movieData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
