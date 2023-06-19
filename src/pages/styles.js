import styled from "styled-components";

export const Container = styled.div`

h1 {
    margin: 3rem 0;
  }
  h2{
    margin: 1rem 0;
    background-color: rgb(26, 14, 26);
    color: white;
   
    border-radius: 5px;
  }

  
  .movies {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img {
    width: 300px;
    border-radius: 1rem;
  }
  
  .detalhes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5rem;

  }
  .coments{
    flex-direction: column;
    align-items: flex-start;  
    margin-left: 35rem;
    
    display: flex;
    flex-direction: column;
    margin-right; 35rem;
  }
  
    
button {
    font-size: 0.8rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
  
    background-color: rgb(26, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    
    -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));
  }

  
  button:active {
    scale: 0.92;
  }
 
  button:hover {
    background: rgb(2, 8, 78);
    color: rgb(4, 4, 38);
  }


  
span {
    line-height: 130%;
    margin-bottom: 1rem;
  }
`