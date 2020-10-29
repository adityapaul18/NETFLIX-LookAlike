import React,{ useState ,useEffect} from 'react'
import axios from "./axios"
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl ,islarge }) {

    const [ movies, setMovies ]  = useState([]);
   
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    } , [fetchUrl]);

    // console.table(movies);

    return (
        <div>
            <div className="row">
                <h2>{title}</h2>
                <div className="row_posters">
                   
                   {movies.map( movie => (
                       <img key={movie.id} className={`row_poster ${islarge && "row_posterlarger"} `}   src={`${base_url}${islarge ? movie.poster_path : movie.backdrop_path
                      }`}  alt="" />
                   ))}  
                </div>
            </div>
        </div>
    )
}

export default Row
