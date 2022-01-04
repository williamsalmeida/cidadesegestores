import React from 'react';

const EventDetails =()=>{
    return(
        <section className="event_promotion_area mb_60" id="aulao">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Aulão</span>Gratuito</h2>
                </div>
                <div className="event_promotion_inner">
                    <div className="event_img">
                        <img src={require('../img/about-aulao.jpg')} alt=""/>
                    </div>
                    <div className="row event_promotion_info align-items-center">
                        <div className="col-md-6">
                            <div className="e_promo_text wow fadeInDown">
                                <div className="d-flex">
                                    <div className="promo_tag">Teatro Gustavo Leite</div>
                                    <div className="date">22/01/2022 das 08h às 21h</div>
                                </div>
                                <h3>Aulão Gratuito para Concurso da PM</h3>
                                <a href="https://www.alfaconcursos.com.br/produtos?utf8=%E2%9C%93&query=srv" className="event_btn event_btn_two btn_hover">Inscreva-se</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Em parceria com a Alfacon, a AMA vai oferecer um aulão totalmente gratuito para os inscritos no concurso da Polícia Militar do Estado de Alagoas. O evento será no dia 22 de janeiro, durante a Feira dos Municípios Alagoanos.<br/>
                            Vagas Limitadas!  Não perca essa chance!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventDetails;