import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import api_news from '../Service/api-news';

class HostingBlogItems extends Component {

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
                {noticias.map(noticia => (
                    <div className="col-sm-4" key={noticia.id}>
                        <div className="h_blog_item">
                            <NavLink to="/Blogsingle">
                                <a href={noticia.slug}>
                                    <img className="img-fluid" src={noticia.foto} alt={noticia.titulo}/>
                                </a>
                            </NavLink>
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
                                <NavLink to="/Blogsingle">
                                    <a href={noticia.slug}><h3>{noticia.titulo}</h3></a>
                                </NavLink>
                                <div className="post-info-bottom">
                                    <NavLink to="/Blogsingle">
                                        <a href={noticia.id} className="learn_btn_two">Leia <i className="arrow_right"></i></a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
export default HostingBlogItems;