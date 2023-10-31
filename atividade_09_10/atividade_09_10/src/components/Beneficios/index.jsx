import "./Beneficios.css";

function Beneficios() {
    return (
        <>
            <div className="tudo_beneficios">
                <div className="cada_beneficio">
                    <img src="./assets/high_quality.png" alt="High Quality" />
                    <div className="beneficio_info">
                        <h4 className="beneficio_titulo">High Quality</h4>
                        <p className="beneficio_descricao">crafted from top materials</p>
                    </div>
                </div>
                <div className="cada_beneficio">
                    <img src="./assets/warranty.png" alt="Warranty" />
                    <div className="beneficio_info">
                        <h4 className="beneficio_titulo">Warranty Protection</h4>
                        <p className="beneficio_descricao">Over 2 years</p>
                    </div>
                </div>
                <div className="cada_beneficio">
                    <img src="./assets/shipping.png" alt="Shipping" />
                    <div className="beneficio_info">
                        <h4 className="beneficio_titulo">Free Shipping</h4>
                        <p className="beneficio_descricao">Order over 150 $</p>
                    </div>
                </div>
                <div className="cada_beneficio">
                    <img src="./assets/support.png" alt="Support" />
                    <div className="beneficio_info">
                        <h4 className="beneficio_titulo">24 / 7 Support</h4>
                        <p className="beneficio_descricao">Dedicated support</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficios