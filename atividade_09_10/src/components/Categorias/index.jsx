import "./Categorias.css";

function Categorias() {
    return (
        <>
            <div>
                <div className="div_titulo">
                    <h2 className="titulo_categorias">Browse The Range</h2>
                    <p className="texto_titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="cards_categorias">
                    <div className="card_categoria">
                        <img src="./assets/Dining.png" alt="Dining" />
                        <a href="#">Dining</a>
                    </div>
                    <div className="card_categoria">
                        <img src="./assets/Living.png" alt="Living" />
                        <a href="#">Living</a>
                    </div>
                    <div className="card_categoria">
                        <img src="./assets/Bedroom.png" alt="Bedroom" />
                        <a href="#">Bedroom</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categorias