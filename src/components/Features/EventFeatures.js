import React from 'react';
import EventFeaturesItem from './EventFeaturesItem';

const EventFeatures =()=>{
    return(
        <section className="event_features_area">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>O que terá no</span>Cidades e Gestores</h2>
                </div>
                <div className="row event_features_inner">
                    <EventFeaturesItem url="" image="leader.png"  title="Treinamentos" ptext="Cada município precisa estar bem instruído e dotado de conhecimento para que, no dia a dia, possa desenvolver seu trabalho de forma que tragam maiores benefícios à população." 
                    btn="Saiba mais"/>
                    <EventFeaturesItem url="" image="meetup.png"  title="Palestras" ptext="Fortalecimento institucional das prefeituras de Alagoas, levando formação e conhecimento aos servidores públicos municipais, trazendo o melhor desenvolvimento de suas atividades." 
                    btn="Saiba mais"/>
                    <EventFeaturesItem url="" image="expo.png"  title="Exposições" ptext="Com a Expo o foco é divulgar a cultura dos municípios alagoanos para a sociedade, além de fortalecer a economia da região, impulsionando a venda dos artesãos locais." 
                    btn="Saiba mais"/> 
                </div>
            </div>
        </section>
    )
}
export default EventFeatures;