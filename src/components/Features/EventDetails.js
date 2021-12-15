import React from 'react';

const EventDetails =()=>{
    return(
        <section className="event_promotion_area mb_60">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Aulão</span>Subtitulo</h2>
                </div>
                <div className="event_promotion_inner">
                    <div className="event_img">
                        <img src={require('../../img/about-aulao.jpg')} alt=""/>
                    </div>
                    <div className="row event_promotion_info align-items-center">
                        <div className="col-md-6">
                            <div className="e_promo_text wow fadeInDown">
                                <div className="d-flex">
                                    <a href="/#" className="promo_tag">Workshop</a>
                                    <a href="/#" className="date">21/01/2022 10:00h</a>
                                </div>
                                <h3>Texto destaque sobre o Aulão</h3>
                                <a href="/#" className="event_btn event_btn_two btn_hover">Inscreva-se</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventDetails;