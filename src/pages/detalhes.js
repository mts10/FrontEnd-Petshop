import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./styles";
import comentarios from "../componentes/Comentarios";

function Detalhes() {
    const { id } = useParams();
    const [produtos, setProduto] = useState({});

    useEffect(() => {
        fetch(`/produto/${id}`)
            .then((response) => response.json())
            .then((data) => { 
                setProduto(data)     
            });
            
    }, [id]);

    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Detalhes do Produto</h1>
            <div className="produtos">
                <img src={produtos.image}/>

                <div className="detalhes">
                    <span> Categoria: {produtos.categoria}</span>
                    <span> Descrição: {produtos.descricao}</span>
                    <span>Preço:  {produtos.preço}</span>
                    <span>Nota geral: {produtos.nota}</span>
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
                        <p>Não identificamos comentarios pra esse filme</p>
                    )}
                </div>
        </Container>
    );
}

export default Detalhes;
