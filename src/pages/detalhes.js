import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./styles";
import comentarios from "../componentes/Comentarios";

function Detalhes() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});

    const handleAdicionadoClick = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, adicionado: !movie.adicionado } : movie
            )
        );
    };
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            });
    }, [id]);

    return (
        <Container>
            <div className="movies">
                <img src={movies.poster}/>

                <div className="detalhes">
                    <h1>Nome: {movies.titulo}</h1>
                    <span> Categoria: {movies.ano}</span>
                    <span> Descrição: {movies.nota}</span>
                    <span>Preço:</span>
                    <span>Nota geral:</span>
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                </div>
               
            </div>
            <br/>
            <div className="coments">
                    <h2>Comentários</h2>
                    {comentarios.length > 0 ? (
                        comentarios.map((comentario) => (
                            <div key={comentario.id}>
                                <p>
                                    <strong>{comentario.usuario}:</strong> {comentario.mensagem}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>Não identificams comentarios pra esse filme</p>
                    )}
                </div>
        </Container>
    );
}

export default Detalhes;
