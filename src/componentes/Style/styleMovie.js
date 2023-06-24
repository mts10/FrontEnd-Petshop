import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  margin: 0;
  padding: 0;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
    max-width: 180px;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    transition: all 0.3s;
    text-align: center;
    color: #000;
    font-size: 1rem;
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.2);
    color: red;
  }
`;

export const OrderByContainer = styled.div`
  margin-top: -50px;
  padding: 30px;
  text-align: center;

  select {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-left: 5px;
  }
`;
