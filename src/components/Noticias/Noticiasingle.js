import React from 'react';
import Noticiascolsidebar from './Noticiascolsidebar';
import ServiceData from '../Service/ServiceData';

const Noticiasingle =()=>{
    return(
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_sidebar_left">
                        <div className="blog_single mb_50">
                            <img className="img-fluid" src={require('../../img/not_single.png')} alt=""/>
                            <div className="blog_content">
                                <div className="post_date">
                                    <h2>14<span>Dez</span></h2>
                                </div>
                                
                                <h5 className="f_p f_size_20 f_500 t_color mb-30">AMA confirma Feira dos Municípios – Congresso e Expo para 2022</h5>
                                
                                <p className="f_400 mb-30">
                                    A Associação dos Municípios Alagoanos (AMA) reuniu gestores, técnicos e assessores municipais na tarde desta segunda-feira, dia 22, no auditório da Entidade para apresentar detalhes e orientações sobre o regulamento da Feira dos Municípios – Congresso Expo. O evento vai acontecer entre os dias 20 e 23 de janeiro, no Centro de Convenções Ruth Cardoso.
                                    O superintendente da AMA, André Feitosa, ressaltou a importância da participação dos municípios no encontro. “Esse momento foi importante para construirmos juntos a Feira, que não é só da AMA, o evento é de todos os municípios e aqui trocamos ideias, recebemos sugestões e estreitamos o diálogo com os responsáveis”, afirmou o superintendente.
                                    A gerente de Articulação Municipal da Associação dos Municípios Alagoanos, Larissa Ferro, também participou do evento e tirou as dúvidas dos técnicos municipais sobre o manual do expositor.
                                    O Congresso e a Feira dos Municípios será o grande evento da Instituição durante a reabertura da economia nesse período mais ameno da pandemia e seguirá todo o protocolo sanitário que estiver estabelecido pelo Governo do Estado no período da sua realização.
                                    O evento já é tradicional no calendário da AMA. Em 2019, o evento foi referência como maior feira municipalista do Nordeste com a exposição do que há de melhor na cultura, gastronomia e turismo dos municípios. Com o Congresso, o Cidades e Gestores também trouxe nomes de peso na programação de palestras para os técnicos municipais.
                                    Agora, nessa nova edição, traz uma proposta mais moderna, criativa e tecnológica para explorar a arte, cultura da nossa terra, além de fortalecer a gestão nos municípios alagoanos. O evento é uma iniciativa e realização da AMA com apoio do Governo do Estado de Alagoas.
                                    O principal objetivo do Congresso é o fortalecimento institucional das prefeituras de Alagoas, levando formação e conhecimento aos servidores públicos municipais, trazendo como benefício e melhor desenvolvimento de suas atividades. Já na Feira, o foco é divulgar a cultura dos municípios alagoanos para a sociedade, além de fortalecer a economia da região, impulsionando a venda dos artesãos locais.
                                </p>
                                
                                <div className="post_share">
                                    <div className="post-nam"> Compartilhe: </div>
                                    <div className="flex">
                                        <a href=".#"><i className="ti-facebook"></i>Facebook</a>
                                        <a href=".#"><i className="ti-twitter"></i>Twitter</a>
                                        <a href=".#"><i className="ti-pinterest"></i>Pinterest</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>
                    <div className="col-lg-4">
                        <Noticiascolsidebar ServiceData={ServiceData}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Noticiasingle;