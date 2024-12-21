import React, {useState} from 'react';

const PelisApp = () => {

    const URL='https://api.themoviedb.org/3/search/movie?query='
    const HEADER='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGEwN2U0ZDgwNzcyMjgyYzZjMzJmYWE5Y2EwMDVmYSIsIm5iZiI6MTU5OTUyNDI2OC4zNTYsInN1YiI6IjVmNTZjZGFjOWQ4OTM5MDAzNGQyMzdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2Du1HYeKFjqwqm1JECzEhBMgryJP4-xrScA5NyieXs'
    
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        fetchPeliculas(search)
    }

    const fetchPeliculas = async (search)=> {
        try {
            const response =await fetch(`${URL}${search}`,{headers:{'Authorization':`Bearer ${HEADER}`}})
            const data = await response.json()
            setMovies(data.results)
            console.log(data.results)
        } catch (error) {
            console.error('Ha ocurrido un error : ',error)
        }
    }

    return ( 
        <div className="container">
            <h1 className="title">PelisApp</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search a movie"
                    name='search'
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            <div className='movie-list'>
                {movies.map((movie)=>(
                    <div className='movie-card' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default PelisApp;