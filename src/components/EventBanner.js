import React from 'react';

const EventBanner =()=>{
    return(
        <section className="event_banner_area" id="home">
            <div className="parallax-effect" style={{backgroundImage: "url(" + (require("../img/home-event/municipios.jpg")) + ")"}}></div>
            <div className="container">
                <div className="event_banner_content">
                    <div className="round wow zoomIn" data-wow-delay="0.2s">
                    </div>
                    <h6 className="wow fadeInUp" data-wow-delay="0.6s">20 a 23 de Janeiro de 2022</h6>
                    <h2 className="wow fadeInUp" data-wow-delay="0.8s"><span>Feira dos<br/></span>Municípios Alagoanos<br/><span>Congresso e Expo</span></h2>
                    <h6 className="wow fadeInUp mb-5" data-wow-delay="0.6s">Viva Alagoas nos seus detalhes</h6>
                    <a className="event_btn btn_hover wow fadeInLeft" data-wow-delay="0.9s" href="/#">Inscrições</a>
                    <a className="event_btn event_btn_banner event_btn_two btn_hover wow fadeInRight" data-wow-delay="0.9s" href="https://www.youtube.com/watch?v=S719j6wChh0"><i className="arrow_triangle-right_alt2"></i>Conheça</a>
                </div>
            </div>
        </section>
    )
}

export default EventBanner;