import "./header.css";

export default function Header() {
    return (
        <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/login" class="btn btn-dark">Login</a></li>
                <li><a href="/" class="btn btn-secondary">Home</a></li>
                <li><a href="/carrinho" class="btn btn-light">Carrinho</a></li>
                <li><a href="/editarPerfil" class="btn btn-dark">Atualizar Perfil</a></li>   
            </ul>
        </header>
    </div>
    )
}