import { useEffect, useState } from "react";

const List = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(props.items);
  }, []);

  return (
    <>
      {movies.map((movie, index) => (
        <div key={index} className="card col-2">
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">Rating: {movie.rating}</p>
            <p className="card-text">Release Date: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
