import React, { useState } from 'react';
import '../pages/login.css';
import {Link } from "react-router-dom";


export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


     
  return (
    <div className="container text-center" >
    <div className="mt-5 text-center">
      <h1> Login</h1>
      <p>Faça seu login para concluir a compra</p>
    </div>
    <form className="formlogin" >
        <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="password" value={senha} onChange={(e) => { setSenha(e.target.value) }}/>
          </div> <br/>
          <p>Ainda não se cadastrou? <a href="/cadastro" class="btn btn-dark">Clique aqui</a>.</p>
          <div className="mt-5 text-center">
          <Link to="/" >
          <button class="btn">Entrar</button>
          </Link>
        </div>
    </form>
    </div>
  )
    
   
}