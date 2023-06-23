
import '../pages/cadastro.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Cadastro() {

  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numeroCvc, setNumeroCvc] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [image, setImage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  function handleCpfChange(event) {
    setCpf(event.target.value);
  }
  function handleImageChange(event) {
    setImage(event.target.value);
  }
  function handleNomeCartaoChange(event) {
    setNomeCartao(event.target.value);
  }
  function handleNumeroCartaoChange(event) {
    let numero = event.target.value.replace(/-/g, '');
    numero = numero.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
    if (numero.length <= 20) {
      setNumeroCartao(numero);
    }
  }
  function handleNumeroCvcChange(event) {
    setNumeroCvc(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleSenhaChange(event) {
    setSenha(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    const user = {
      Nome: name,
      Telefone: telefone,
      Endereco: endereco,
      Cpf: cpf,
      Imagem: image,
      NomeCartao: nomeCartao,
      NumeroCartao: numeroCartao,
      NumeroCVC: numeroCvc,
      Email: email,
      Senha: senha,
    };
  
    console.log(user);
    alert('Cadastro realizado com sucesso!');
  }

  const location = useLocation();
  const url = location.pathname; 
  
  return (
    <div className="container">
    <div className="mt-5 text-center">
      <h1> Cadastrar|Atualizar Perfil Cliente </h1>
      
    </div>
    <form onSubmit={handleSubmit}>
      <div className="row mt-5">
        <div className="col">
          <div>
            <div className="mt-3">
              <label><b>Dados do Assinante</b></label>
            </div>
          </div>
          <div className="mt-3">
            <label >Nome:</label><br />
            <input className="form-control" placeholder="Nome" id="nameInput" type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className="mt-3">
            <label >Telefone:</label><br />
            <input className="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={handleTelefoneChange} />
          </div>
          <div className="mt-3">
            <label >Endereço:</label><br />
            <input className="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={handleEnderecoChange} />
          </div>
          <div className="mt-3">
            <label >CPF:</label><br/>
            <input className="form-control" placeholder="CPF" id="CpfInput" type="text" value={cpf} onChange={handleCpfChange} />
          </div>
          <div className="mt-3">
          <label ><b>Carregue sua foto de perfil:</b></label><br/>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/> <br/>

          </div>
        </div>
        <div className="col">
          <div className="mt-3">
            <label><b>Dados do Cartão</b></label>
          </div>
          <div className="mt-3">
            <label >Nome no Cartão:</label><br />
            <input className="form-control" placeholder="Insira o nome que está no cartao" id="NomeCartaoInput" type="text" value={nomeCartao} onChange={handleNomeCartaoChange} />
          </div>
          <div className="mt-3">
            <label >Número do Cartão:</label><br />
            <input className="form-control" placeholder="Numero do Cartao" id="NumeroCartaoInput" type="text" maxLength={19} value={numeroCartao} onChange={handleNumeroCartaoChange} />
          </div>
          <div className="mt-3">
            <label >Número do CVC:</label><br />
            <input className="form-control" placeholder="Número do CVC" id="NumerocvcInput" type="password" maxLength={3} value={numeroCvc} onChange={handleNumeroCvcChange} />
          </div>
          <div className="mt-3">
            <label><b>Email e Senha</b></label>
          </div>
          <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="text" value={senha} onChange={handleSenhaChange}/>
          </div>

        </div>
      </div>
      <div>
        <div className="mt-5 text-center">
        <Link to="/" >
          <button class="btn">Cadastrar|Atualizar</button>
          </Link>
        </div>
      </div>
    </form>
  </div>

  );
}


export default Cadastro;