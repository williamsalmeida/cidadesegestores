import React, { Component } from "react";
import { Link } from "react-router-dom";
import api_news from '../Service/api-news';

class NoticiasItems extends Component {

    state= {
        noticias: [],
    }

    async componentDidMount() {
        const response = await api_news.get('/noticias/categorias/31');

        this.setState({ noticias: response.data })
    }

    render(){
        const { noticias } = this.state;        
        
        return(
            <>
                {noticias.slice(0,3).map(noticia => (
                    <div className="col-sm-4" key={noticia.id}>
                        <div className="h_blog_item">
                            <Link className="App-link" to={`/Noticiasingle/${noticia.slug}`}>
                            <img className="img-fluid" src={noticia.foto} alt={noticia.titulo} loading="lazy"/>
                            <div className="h_blog_content">
                                <div className="post_time"><i className="icon_clock_alt"></i>
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    }).format(
                                        new Date(noticia.data)
                                    )}
                                </div>
                                <h3>{noticia.titulo}</h3>
                                <div className="post-info-bottom">
                                    <div className="learn_btn_two">Leia <i className="arrow_right"></i></div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
export default NoticiasItems;