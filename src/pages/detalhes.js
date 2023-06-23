import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./styles";
import comentarios from "../componentes/Comentarios";

function Detalhes() {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`/product/${id}`)
            .then((response) => response.json())
            .then((data) => { 
                setProducts(data)     
            });
            
    }, [id]);


    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Detalhes do Produto</h1>
            <div className="produtos">
                <img src={products.image}/>

                <div className="detalhes">
                    <span> Categoria: {products.categoria}</span>
                    <span> Descrição: {products.descricao}</span>
                    <span>Preço:  {products.preço}</span>
                    <span>Nota geral: {products.nota}</span>
                    <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary" >
                     Adicionar ao carrinho
                    </button>
                </div>
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
