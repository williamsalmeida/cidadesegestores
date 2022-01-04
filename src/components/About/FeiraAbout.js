import React from 'react';

const EventAbout =()=>{
    return(
        <section className="event_about_area" id="feira">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src={require("../../img/about-feira.jpg")} alt=""/>
                            <div className="about_bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event_about_content">
                            <h2 className="wow fadeInUp">Expo 2022 - O melhor de Alagoas em um só lugar</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">
                                Artesanato, turismo, apresentações folclóricas, culturais e gastronomia em um só lugar. 
                                A Feira dos Municípios Alagoanos – Congresso e Expo é o maior evento municipalista do Nordeste, 
                                com um ar mais arrojado, tecnológico, e seguindo todas as medidas de biossegurança de proteção 
                                contra o coronavírus. Cada município terá espaço para mostrar o que possui de melhor na região, 
                                além de comercializar produtos com artesãos locais.
                            </p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
                                        <img src={require("../../img/home-event/marker.png")} alt=""/>
                                        <h6>Onde</h6>
                                        <p>Centro Cultural e De Exposições Ruth Cardoso</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.4s">
                                        <img src={require("../../img/home-event/timer.png")} alt=""/>
                                        <h6>Quando</h6>
                                        <p>De 20 a 23 de janeiro de 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventAbout;