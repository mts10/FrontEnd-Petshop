
import '../pages/cadastro.css';
import React, { useState } from 'react';
import api from '../services/api';
import { Link } from "react-router-dom";


function Cadastro() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [image, setImage] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [cvc, setCvc] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('telefone', telefone);
    formData.append('endereco', endereco);
    formData.append('cpf', cpf);
    formData.append('nomeCartao', nomeCartao);
    formData.append('numeroCartao', numeroCartao);
    formData.append('cvc', cvc);
    formData.append('image', image);
    formData.append('email', email);
    formData.append('senha', senha);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
 

    api.post('/clientes', formData, config)
    .then((response) => {
        console.log(response.data)
        alert(" O usuario " + response.data.codigo + " foi criado com sucesso!")
    })
    .catch((err) => {
        console.error(err)
        alert("Ops! Ocorreu um erro!")
    })
    .finally(() => {
        setNome("")
        setTelefone("")
        setEndereco("")
        setCpf("")
        setNomeCartao("")
        setNumeroCartao("")
        setCvc("")
        setImage("")
        setEmail("")
        setSenha("")
    })

}

const formatNumeroCartao = (value) => {//Formata numero do cartão 
const NumCartao = value.replace(/\D/g, '');       
const formatNumCartao = NumCartao.replace(/(\d{4})(?=\d)/g, '$1-');
return formatNumCartao;
};
  
  return (
    <div className="container">
    <div className="mt-5 text-center">
      <h1> Cadastrar Cliente </h1>
      
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
            <input className="form-control" placeholder="Nome" id="nameInput" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >Telefone:</label><br />
            <input className="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >Endereço:</label><br />
            <input className="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >CPF:</label><br/>
            <input className="form-control" placeholder="CPF" id="CpfInput" type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
          </div>
          <div className="mt-3">
          <label ><b>Carregue sua foto de perfil:</b></label><br/>
          <div className="rounded-circle overflow-hidden">
          <img src={image ? URL.createObjectURL(image) : "placeholder.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/> <br/>

          </div>
        </div>
        <div className="col">
          <div className="mt-3">
            <label><b>Dados do Cartão</b></label>
          </div>
          <div className="mt-3">
            <label >Nome no Cartão:</label><br />
            <input className="form-control" placeholder="Insira o nome que está no cartao" id="NomeCartaoInput" type="text" value={nomeCartao} onChange={(e) => { setNomeCartao(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >Número do Cartão:</label><br />
            <input className="form-control" placeholder="Numero do Cartao" id="NumeroCartaoInput" type="text" maxLength={19} value={formatNumeroCartao(numeroCartao)} onChange={(e) => { setNumeroCartao(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >Número do CVC:</label><br />
            <input className="form-control" placeholder="Número do CVC" id="cvcInput" type="password" maxLength={3} value={cvc} onChange={(e) => { setCvc(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label><b>Email e Senha</b></label>
          </div>
          <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="text" value={senha} onChange={(e) => { setSenha(e.target.value) }}/>
          </div>

        </div>
      </div>
      <div>
        <div className="mt-5 text-center">
        <Link to="/" >
          <button class="btn">Cadastrar</button>
          </Link>
        </div>
      </div>
    </form>
  </div>

  );
}


export default Cadastro;