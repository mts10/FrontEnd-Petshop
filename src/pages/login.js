import React, { useState } from 'react';
import '../pages/login.css';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
      }
      function handleSenhaChange(event) {
        setSenha(event.target.value);
      }
    
    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            Email: email,
            Senha: senha, 
        }
        console.log(user);
        alert('Login realizado com sucesso!');
    };
  return (
    <div className="container text-center" >
    <div className="mt-5 text-center">
      <h1> Login</h1>
      <p>Faça seu login para concluir a compra</p>
    </div>
    <form onSubmit={handleSubmit} className="formlogin" >
        <div className="mt-3">
            <label >Email:</label><br />
            <input className="form-control" placeholder="Insira seu email" id="EmailInput" type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div className="mt-3">
            <label >Senha:</label><br/>
            <input className="form-control" placeholder="Insira sua senha" id="SenhaInput" type="text" value={senha} onChange={handleSenhaChange}/>
          </div>
          <div className="mt-5 text-center">
          <button className="btn" onClick={handleSubmit}>Entrar</button>
        </div>
    </form>
    </div>
  )
    
   
}