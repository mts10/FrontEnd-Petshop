import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./styles";
import comentarios from "../componentes/Comentarios";


function Detalhes() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`/product/${id}`)
            .then((response) => response.json())
            .then((data) => { 
                setProduct(data)     
            });
            
    }, [id]);
      // Error
  if (!product) {
    return (
      <div className="p-3 mb-2 bg-danger text-white">
        <p className="text-center">Não foi possível encontrar os detalhes do produto. Tente novamente mais tarde!</p>
      </div>
    );
  }
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Detalhes do Produto</h1>
            <div className="produtos">
            <img src={`data:image/png;base64,${product.image}`} alt={product.nome} className="produto-imagem" /> <img src={product.image}/>
                <div className="detalhes">
                    <span> Categoria: {product.categoria}</span>
                    <span> Descrição: {product.descricao}</span>
                    <span>Preço:  {product.preço}</span>
                    <span>Nota geral: {product.nota}</span>

                    <div className="text-center mt-5">
                    <button type="submit">
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
