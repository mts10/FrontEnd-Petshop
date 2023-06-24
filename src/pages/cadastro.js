import '../pages/cadastro.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import api from "../../src/services/api";


const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bodyParam = {
      username,
      email,
      password,
      address,
      phone,
      cpf,
      image: image ? await convertImageToBase64(image) : null,
    };

    try {
      const response = await api.post('api/auth/register', bodyParam);
      console.log('Requisição bem-sucedida:', response.data);
      alert('Usuário criado com sucesso!');
      console.log(response.data);
      alert('O usuário ' + response.data.username + ' foi cadastrado com sucesso!');

      setUsername('');
      setPhone('');
      setAddress('');
      setCpf('');
      setPassword('');
      setImage(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Lógica para tratar erro 404
        console.log('Recurso não encontrado');
      } else {
        // Lógica para tratar outros erros
        console.log('Erro na requisição:', error.message);
      }
      console.error(error);
      alert('Ops! Ocorreu um erro ao cadastrar o usuário.');
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const formatNumeroCartao = (value) => {
    const numCartao = value.replace(/\D/g, '');
    const formatNumCartao = numCartao.replace(/(\d{4})(?=\d)/g, '$1-');
    return formatNumCartao;
  };

  return (
    <div className="container">
  <div className="mt-5 text-center">
    <h1>Cadastrar Cliente</h1>
  </div>
  <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
    <div className="row mt-5">
      <div className="col">
        <div>
          <div className="mt-3">
            <label><b>Dados do Assinante</b></label>
          </div>
        </div>
        <div className="mt-3">
          <label>Username Completo:</label><br />
          <input className="form-control" placeholder="Username" id="nameInput" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
        </div>
        <div className="mt-3">
          <label>Telefone:</label><br />
          <input className="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
        </div>
        <div className="mt-3">
          <label>Endereço:</label><br />
          <input className="form-control" placeholder="Endereço" id="addressInput" type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} />
        </div>
        <div className="mt-3">
          <label>CPF:</label><br />
          <input className="form-control" placeholder="CPF" id="CpfInput" type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
        </div>
        <div className="mt-3">
          <label><b>Carregue sua foto de perfil:</b></label><br />
          <div className="rounded-circle overflow-hidden">
            <img src={image ? URL.createObjectURL(image) : "placeholder.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])} /> <br />
        </div>
      </div>
      <div className="col">
        <div className="mt-3">
          <label><b>Email e Senha</b></label>
        </div>
        <div className="mt-3">
          <label>Email:</label><br />
          <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className="mt-3">
          <label>Senha:</label><br />
          <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
      </div>
    </div>
    <div>
      <div className="mt-5 text-center">
          <button className="btn">Cadastrar</button>
      </div>
    </div>
  </form>
</div>

  );
};

export default Cadastro;
