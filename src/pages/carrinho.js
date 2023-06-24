import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode';
import api from "../../src/services/api";


export default function Carrinho(){

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch("Carts"); // Altere a URL para o endpoint correto do seu backend
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error("Erro ao obter os produtos:", error);
          }
        };
    
        fetchProducts();
      }, []);

      function handleSubmit(event) {
        event.preventDefault();
    
        const storedToken = localStorage.getItem("token");
    
        if (storedToken) {
          try {
            const data = jwt(storedToken);
            console.log(data);
            alert("Compra efetuada com sucesso para o cliente código: " + data.codigo + ".");
          } catch (error) {
            console.log(error);
          }
        } else {
          alert('Usuário não autenticado! Por favor, faça o login!');
          navigate("/login");
        }
      }

    return(
        <div className="container text-center">
          <h1 >Checkout</h1>
          <p>Finalize seu pedido</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <h3 className="p-3">Produtos selecionados:</h3>
            <table className="table table-sm custom-table border">
              <tbody>
              {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.tipo}</td>
                    <td>{product.quantidade}</td>
                    <td>{product.valor}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="table table-sm custom-table border">
              <thead>
                <tr>
                  <th scope="col">Tipo do Produto</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coleira</td>
                  <td>2</td>
                  <td>60,00R$</td>

                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td>Ração pra Gato</td>
                  <td>10</td>
                  <td>100,00R$</td>
                </tr>
                <tr>
                  <td>Canil</td>
                  <td>3</td>
                  <td>150,00R$</td>
                </tr>
              </tbody>
             
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Total</th>
                  <th scope="col">310,00R$</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="col-md-6">
            <h3 className="p-3">Dados do usuário:</h3>
            <div className="row border">
              <div className="col-md-6">
                <div className="form-group mt-2">
                  <label htmlFor="endereco">Endereço:</label>
                  <input type="text" id="endereco" placeholder="Piraquara-Paraná" className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="nome-cartao">Nome do cartão:</label>
                  <input type="text" id="nome-cartao" placeholder="******* ** *****" className="form-control" disabled />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mt-2">
                  <label htmlFor="numero-cartao">Número do cartão:</label>
                  <input type="text" id="numero-cartao" placeholder="4521-****-****-**22" className="form-control" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="cvc">CVC:</label>
                  <input type="text" id="cvc" placeholder="***" className="form-control" disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Finalizar pedido
          </button>
        </div>
      </form>
    </div>
  );
}