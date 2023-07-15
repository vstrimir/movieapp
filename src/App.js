import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./Movie/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
