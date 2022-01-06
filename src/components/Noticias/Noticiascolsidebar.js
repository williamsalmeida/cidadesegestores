import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api_news from '../Service/api-news';

class Noticiascolsidebar extends Component {

    state = {
        noticias: [],
    }

    async componentDidMount() {
        const response = await api_news.get('/noticias/categorias/31');

        this.setState(
            { noticias: response.data })
    }

    render() {
        const { noticias } = this.state;
        return (
            <div className="blog-sidebar">
                <div className="widget sidebar_widget widget_recent_post">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Outras noticias</h3>
                        <div className="border_bottom"></div>
                    </div>

                    {noticias.slice(0, 6).map(noticia => {
                        return (
                            <div className="media post_item" key={noticia.id}>
                                <Link className="App-link" to={`/noticias/${noticia.slug}`}>
                                    <img src={noticia.foto} alt={noticia.titulo} loading="lazy" />
                                </Link>
                                <div className="media-body">
                                    <Link className="App-link" to={`/noticias/${noticia.slug}`}>
                                        <h3 className="f_size_16 f_p f_400">{noticia.titulo}</h3>
                                    </Link>
                                    <div className="entry_post_info">
                                        {new Intl.DateTimeFormat('pt-BR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        }).format(
                                            new Date(noticia.data)
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}
export default Noticiascolsidebar;