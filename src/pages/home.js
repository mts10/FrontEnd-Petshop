
import { Movie } from "../componentes/Style/styleMovie";
import { Container, MovieList, OrderByContainer } from "../componentes/Style/styles";
import Keys from "../Config/key";
import { useState } from "react";
import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import Assistido from "../componentes/Button/assistido";




function Home() {
    const [movies, setMovies] = useState([]);
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);


    

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    useEffect(() => {
        const sortedMovies = sortMovies(movies, orderBy, orderDirection);
        const filtered = searchTerm ? 
          movies.filter(movie => movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())) :
          [];
        setFilteredMovies(filtered);
      }, [movies, searchTerm, orderBy, orderDirection]);
    
      function handleSearchTermChange(event) {
        setSearchTerm(event.target.value);
      }
    

    const handleSearchClick = () => {
        const filteredMovies = movies.filter(movie => {
          return movie.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setMovies(filteredMovies);
        setFilteredMovies(filteredMovies);
      };

      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        if(!event.target.value){
            setFilteredMovies(movies);
        }
    };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    

    
    const sortMovies = (movies, orderBy, orderDirection) => {
        return movies.sort((a, b) => {
          const aValue = a[orderBy];
          const bValue = b[orderBy];
          if (aValue < bValue) {
            return orderDirection === 'asc' ? -1 : 1;
          } else if (aValue > bValue) {
            return orderDirection === 'asc' ? 1 : -1;
          } else {
            return 0;
          }
        });
      };
      

    const compareMovies = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.titulo.localeCompare(b.titulo);
        } else if (orderBy === 'ano') {
            comparison = a.ano - b.ano;
        } else if (orderBy === 'nota') {
            comparison = a.nota - b.nota;
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };


    const sortedMovies = sortMovies(movies, orderBy, orderDirection);
    
  
    const moviesToShow = filteredMovies.length > 0 ? filteredMovies : sortedMovies;

  
    const handleAssistidoClick = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, assistido: !movie.assistido } : movie
            )
        );
    };
  
        return (
        <Container>
                    <h1>Filmes</h1>
            <MovieList>
            <div className="search-container">
                <input type="text" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                className="search-input"
                placeholder="Buscar Filmes.."
                />
                <button 
                className="search-button "
                onClick={handleSearchClick}>
                    Pesquisar:
                    </button>
            </div>
            </MovieList>
            <OrderByContainer>
            <div className="order-by-container col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="orderby">Ordenar por:</label>
                    <select id="orderby" className="form-control" value={`${orderBy},${orderDirection}`} onChange={handleOrderByChange}>                            
                    <option value="titulo,asc">Título (A-Z)</option>
                    <option value="titulo,desc">Título (Z-A)</option>
                    <option value="ano,asc">Ano antigo</option>
                    <option value="ano,desc">Ano recente</option>
                    <option value="nota,asc">Nota menor</option>
                    <option value="nota,desc">Nota maior</option>
                    </select>
                </div>
            </div>
            </OrderByContainer>
            <MovieList>
                {sortedMovies && sortedMovies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/detalhes/${movie.id}`}>
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </Link>
                            <span>{movie.titulo}</span>
                            <span>Nota: {movie.nota}</span>
                            <Assistido
                                assistido={movie.assistido}
                                onClick={handleAssistidoClick}
                                id={movie.id}
                            />
                        </Movie>
                    );
                })}
            </MovieList>
            
        </Container >
    );
}

export default Home;