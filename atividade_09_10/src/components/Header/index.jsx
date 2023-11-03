import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="img" src="./assets/Logo.png" alt="Logo" />
                <h2 className="nomeLogo">Furniro</h2>
            </div>
            <div className="navBar">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="navBarIcons">
                <a href="#"><img src="./assets/Perfil.png" alt="Perfil" /></a>
                <a href="#"><img src="./assets/Lupa.png" alt="Lupa" /></a>
                <a href="#"><img src="./assets/Favoritos.png" alt="Favoritos" /></a>
                <a href="#"><img src="./assets/Carrinho.png" alt="Carrinho" /></a>
            </div>
        </header>
    );
}

export default Header