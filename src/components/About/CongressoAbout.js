import React from 'react';

const EventAbout =()=>{
    return(
        <section className="event_about_area">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src={require("../../img/about-congresso.jpg")} alt=""/>
                            <div className="about_bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event_about_content">
                            <h2 className="wow fadeInUp">Congresso 2022 - A inovação na pandemia</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">
                                O Congresso promove o fortalecimento institucional das prefeituras de Alagoas, levando
                                formação e conhecimento aos servidores públicos municipais. As palestras terão como
                                tema principal "A inovação na pandemia: a reinvenção da gestão como estratégia de
                                eficiência" e foram divididas em 6 eixos de conhecimento: educação, saúde,
                                contábil/administrativo, previdência, cidades sustentáveis, meio ambiente/turismo
                                sustentável e assistência social.
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