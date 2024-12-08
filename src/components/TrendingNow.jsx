import { useEffect, useState } from "react";
import TrendingMovie from "./TrendingMovie";


const TrendingNow = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => setMovies(data));
    }, [])

    // console.log(movies)
    const trendingMovies = movies.filter(movie => movie.rating == 5)
    
    return (
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500">
          Trending Now
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-12">
          {trendingMovies.slice(0,4).map((movie) => (
            <TrendingMovie movie={movie} key={movie._id}></TrendingMovie>
          ))}
        </div>
      </div>
    );
};

export default TrendingNow;