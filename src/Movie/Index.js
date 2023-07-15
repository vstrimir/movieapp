import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";

const Index = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_END_POINT + "/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container  flex-row">
        <div className="card-columns">
          {movies.length > 0 && <List items={movies} />}
        </div>
      </div>
    </>
  );
};

export default Index;
