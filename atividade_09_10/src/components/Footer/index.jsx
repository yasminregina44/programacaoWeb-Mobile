import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="footer_conteudo">
                <div className="footer_conteudos">
                    <div className="footer_marca">
                        <h4 className="titulo_marca">Funiro.</h4>
                        <p className="texto_marca">400 University Drive Suite 200 Coral Gables,</p>
                        <p className="texto_marca">FL 33134 USA</p>
                    </div>
                    <div>
                        <p className="titulos_footer">Links</p>
                        <p className="footer_itens">Home</p>
                        <p className="footer_itens">Shop</p>
                        <p className="footer_itens">About</p>
                        <p className="footer_itens">Contact</p>
                    </div>
                    <div>
                        <p className="titulos_footer">Help</p>
                        <p className="footer_itens">Payment Options</p>
                        <p className="footer_itens">Returns</p>
                        <p className="footer_itens">Privaty Policies</p>
                    </div>
                    <div>
                        <p className="titulos_footer">Newsletter</p>
                        <div className="newsletter">
                            <input type="text" placeholder='Enter Your Email Address'/>
                            <p>Subscribe</p></div>
                    </div>
                </div>
                <div>
                    <p className="footer_final">2023 furino. All rights reverved</p>
                </div>
            </div>
        </>
    );
}

export default Footer