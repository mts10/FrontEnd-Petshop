import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

    export default function EditarPerfil({clienteId }){

    const [cliente, setCliente] = useState({
        nome: '',
        telefone: '',
        endereco: '',
        cpf: '',
        nomeCartao: '',
        numeroCartao: '',
        cvc: '',
        image: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // Carregar os dados do cliente a partir do backend
        const carregarCliente = async () => {
            try {
                const response = await api.get(`/clientes/${clienteId}`);
                const data = response.data;
                setCliente(data);
            } catch (error) {
                console.error('Erro ao carregar cliente:', error);
            }
        };

        carregarCliente();
    }, [clienteId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.put(`/clientes/${clienteId}`, cliente);
            console.log(response.data);
            alert('Dados do cliente atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            alert('Ocorreu um erro ao atualizar os dados do cliente. Por favor, tente novamente mais tarde.');
        }
    };
    function AlertEditar() {
        alert('Perfil atualizado com sucesso! Boas Compras.')
    }
    return (
        <div className="container">
    <div className="mt-5 text-center">
      <h1> Atualizar Perfil</h1>
      
    </div>
    <form action="/clientes" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="row mt-5">
        <div className="col">
          <div>
            <div className="mt-3">
              <label><b>Dados do Assinante</b></label>
            </div>
          </div>
          <div className="mt-3">
            <label >Nome Completo:</label><br />
            <input className="form-control" placeholder="Nome" id="nameInput"
             type="text" value={cliente.nome}
             onChange={handleChange}/>
          </div>

          <div className="mt-3">
            <label >Telefone:</label><br />
            <input className="form-control" placeholder="Telefone" 
            id="TelefoneInput" type="number"
            value={cliente.telefone}
            onChange={handleChange} />
          </div>

          <div className="mt-3">
            <label >Endereço:</label><br />
            <input className="form-control" placeholder="Endereço" 
            id="EnderecoInput" type="text"
            value={cliente.endereco} onChange={handleChange}/>
          </div>

          <div className="mt-3">
            <label >CPF:</label><br/>
            <input className="form-control" placeholder="CPF" 
            id="CpfInput" type="text" 
            value={cliente.cpf} onChange={handleChange} />
          </div>

          <div className="mt-3">
          <label ><b>Carregue sua foto de perfil:</b></label><br/>
          <input type="file" name="image" value={cliente.image} onChange={handleChange}/> <br/>
          </div>
        </div>
        <div className="col">
          <div className="mt-3">
            <label><b>Dados do Cartão</b></label>
          </div>
          <div className="mt-3">
            <label >Nome no Cartão:</label><br />
            <input className="form-control" placeholder="Insira o nome que está no cartao" 
            id="NomeCartaoInput" type="text" 
            value={cliente.nomeCartao} onChange={handleChange} />
          </div>
          <div className="mt-3">
            <label >Número do Cartão:</label><br />
            <input className="form-control" placeholder="Numero do Cartao"
             id="NumeroCartaoInput" type="text" maxLength={19}
             value={cliente.numeroCartao} onChange={handleChange} 
             />
          </div>
          <div className="mt-3">
            <label >Número do CVC:</label><br />
            <input className="form-control" placeholder="Número do CVC" 
            id="cvcInput" type="password" maxLength={3} 
            value={cliente.cvc} onChange={handleChange}  />
          </div>
          <div className="mt-3">
            <label><b>Email e Senha</b></label>
          </div>
          <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" 
            id="EmailInput" type="text"
            value={cliente.email}
            onChange={handleChange}/>
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" 
            id="SenhaInput" type="text" 
            value={cliente.password}
            onChange={handleChange}/>
          </div>

        </div>
      </div>
      <div>
        <div className="mt-5 text-center">
        <Link to="/" >
          <button className="btn" onClick={AlertEditar}>Atualizar</button>
          </Link>
        </div>
      </div>
    </form>
  </div>
    )

}