import "./header.css";

export default function Header() {
    return (
        <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" class="btn btn-dark">Home</a></li>
                <li><a href="/detalhes" class="btn btn-dark">Detalhes</a></li>
                <li><a href="/cadastro" class="btn btn-dark">Cadastrar</a></li>
            </ul>
        </header>
    </div>
    )
}