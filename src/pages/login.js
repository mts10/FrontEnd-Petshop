import React, { useState } from 'react';
import '../pages/login.css';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from '../services/api';


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(event) {
      event.preventDefault();

      const bodyParam = {
          email: email,
          password: password
      }

      api.post('/auth', bodyParam)
          .then((response) => {
              console.log(response.data)
              alert(" Token gerado para o usuario " + response.data.nome)
              localStorage.setItem("token", response.data.token);
              navigate("/");
          })
          .catch((err) => {
              console.error(err.response.data) // Objeto de erro vindo do axios
              alert(" Ocorreu um erro! " + err.response.data.error)
          })
          .finally(() => {
              setEmail("")
              setPassword("")
          })
  }
     
  return (
    <div className="container text-center" >
    <div className="mt-5 text-center">
      <h1> Login</h1>
      <p>Faça seu login para concluir a compra</p>
    </div>
    <form className="formlogin" onSubmit={handleSubmit}>
        <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
          </div> <br/>
          <p>Ainda não se cadastrou? <a href="/cadastro" class="btn btn-dark">Clique aqui</a>.</p>
          <div className="mt-5 text-center">
          <Link to="/" >
          <button className="btn">Entrar</button>
          </Link>
        </div>
    </form>
    </div>
  )
    
   
}