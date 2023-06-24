
import { Container, MovieList, OrderByContainer } from "../componentes/Style/styles";
import { useState } from "react";
import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import api from "../services/api";
import { ProductsList } from "./styles";


function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        api.get('/categories')
        .then(response => {
        const categories = response.data;
        setCategories(categories);
        if (categories.length > 0) {
        setActiveCategory(categories[0]._id); 
        }
    })
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        api.get('/product', { params: { category: activeCategory } })
         .then(response => response.data)
            .then(data => {
                const updatedProducts = data.map(produto => {
                const imageData = arrayBufferToBase64(produto.image.data);
                return { ...produto, image: imageData };
                });
                setProducts(updatedProducts);
            })
            .catch(err => console.error(err));
    }, [activeCategory]);

    if (!products) {
        return <p>Carregando...</p>;
    }

    const compareProdutos = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.nome.localeCompare(b.nome);
        } else if (orderBy === 'preco') {
            comparison = parseFloat(a.preco) - parseFloat(b.preco);
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    };

    const sortedProducts = [...products].sort(compareProdutos);

    const handleSearchChange= event => {
        setSearchTerm(event.target.value);
    };

    const renderProductsByCategory = () => {
        const filteredProducts = sortedProducts.filter(
            produto => produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredProducts.map(produto => (
            <li key={produto.codigo}>
                <Link to={`/detalhes/${produto.codigo}`}>
                <div className="card">
                <img src={`data:image/png;base64,${produto.image}`} alt={produto.nome} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p><b>R$ {produto.preco}</b></p>
                </div>
                </div>
                </Link>
            </li>
        ));
    }
        return (
        <Container>
                    <h1>Ecommerce Petshop</h1>
            <MovieList>
            <div className="search-container">
                <input type="text" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                className="search-input"
                placeholder="Buscar produto..."
                />
                <button 
                className="search-button ">
                    Pesquisar:
                </button>
            </div>
            </MovieList>
            <OrderByContainer>
            <div className="order-by-container col-md-6 offset-md-3">
                <div className="form-group">
                    <label htmlFor="orderby">Ordenar por:</label>
                    <select id="orderby" className="form-control" value={`${orderBy},${orderDirection}`} onChange={handleOrderByChange}>                            
                    <option value="titulo,asc">Nome (A-Z)</option>
                    <option value="titulo,desc">Nome (Z-A)</option>
                    <option value="preco,asc">Preço (Menor)</option>
                    <option value="preco,desc">Preço (Maior)</option>
                    </select>
                </div>
            </div>
            </OrderByContainer>
            <MovieList>
            <ProductsList className="products-container">
            {renderProductsByCategory()}
            </ProductsList>
            
            </MovieList>
            
            
        </Container >
    );
}

export default Home;